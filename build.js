import esbuild from "esbuild";
import { writeFile, copyFile } from "node:fs/promises";
import { copy as copyDir, remove as removeDir } from "fs-extra";
import repoPackage from "./package.json" with { type: "json" };
import { replaceTscAliasPaths } from "tsc-alias";

const packageTemplate = {
  author: repoPackage.author,
  contributors: repoPackage.contributors,
  license: repoPackage.license,
  type: repoPackage.type,
  version: repoPackage.version,
  repository: repoPackage.repository,
  bugs: repoPackage.bugs,
  homepage: repoPackage.homepage,
  keywords: repoPackage.keywords,
  files: repoPackage.files,
  exports: { ".": "./index.js" },
};

/**
 * Creates a build process using esbuild.
 * @param {{ name: string; title: string, options: esbuild.BuildOptions }[]} environments
 */
async function createBuilder(environments) {
  const watch = process.argv.includes("--watch");

  await Promise.all(
    environments.map(async ({ name, options }) => {
      options = {
        entryPoints: [`./src/${name}/index.ts`],
        keepNames: true,
        legalComments: "inline",
        bundle: true,
        treeShaking: true,
        format: "esm",
        outdir: `./lib/${name}`,
        minify: false,
        color: true,
        logLevel: "info",
        ...options,
        plugins: [
          {
            name: "build",
            setup(build) {
              build.onEnd(async (result) => {
                if (result.errors.length === 0) {
                  console.log(`Successfully built @nativewrappers/${name}`);
                }
              });
            },
          },
        ],
        dropLabels: [...(options.dropLabels || [])],
      };

      if (watch) {
        options.dropLabels.push("$DEBUG");
      }

      const ctx = await esbuild.context(options).catch((err) => {
        console.error(err);
        process.exit(1);
      });
      return watch ? ctx.watch() : ctx.rebuild();
    }),
  );

  for (const { name, title } of environments) {
    await copyFile("README.md", `./lib/${name}/README.md`);
    await copyDir("./lib/common/", `./lib/${name}/common`);
    await replaceTscAliasPaths({ outDir: `./lib/${name}/` });
    await writeFile(
      `./lib/${name}/package.json`,
      JSON.stringify(
        {
          name: `@nativewrappers/${name}`,
          description: `Native wrappers and utilities for use with ${title}.`,
          ...packageTemplate,
        },
        null,
        2,
      ),
    );
  }

  await removeDir("./lib/common/");

  if (!watch) process.exit(0);
}

createBuilder([
  {
    name: "server",
    title: "FXServer",
    options: {
      dropLabels: ["$CLIENT"],
    },
  },
  {
    name: "fivem",
    title: "FiveM",
    options: {
      dropLabels: ["$SERVER"],
    },
  },
  {
    name: "redm",
    title: "RedM",
    options: {
      dropLabels: ["$SERVER"],
    },
  },
]);
