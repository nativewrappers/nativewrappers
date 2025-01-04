import { writeFileSync } from 'fs';
import repoPackage from './package.json' with { type: 'json' };

const packageTemplate = {
  author: repoPackage.author,
  license: repoPackage.license,
  type: repoPackage.type,
  version: repoPackage.version,
  repository: repoPackage.repository,
  bugs: repoPackage.bugs,
  homepage: repoPackage.homepage,
  keywords: repoPackage.keywords,
  files: repoPackage.files,
  exports: { ".": "./index.js", },
  dependencies: repoPackage.dependencies,
};

const packages = ['common', 'fivem', 'redm', 'server'];
const aliases = ['Cfx.re\'s scripting runtimes', 'FiveM', 'RedM', 'FxServer'];

packages.forEach((packageName, index) => {
  const packageJson = {
    name: `@nativewrappers/${packageName}`,
    description: `Native wrappers and utilities for use with ${aliases[index]}.`,
    ...packageTemplate,
  };

  if (packageName !== 'common') packageJson.dependencies = { '@nativewrappers/common': packageJson.version };

  writeFileSync(`./lib/${packageName}/package.json`, JSON.stringify(packageJson, null, 2));
});
