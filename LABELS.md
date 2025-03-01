In order to have the ability to allow users to cleanup the code base and remove un-needed
bits of shared codes, or remove some advanced functionality we use labels.

This is a decent solution and can be treated a bit like C++'s `#ifdef` if you're using esbuild.

You can drop these labels with [dropLabel](https://esbuild.github.io/api/#drop-labels)

```ts
import { build } from 'esbuild';

await build({
  // Remove client labels for the server
  dropLabels: ["CLIENT"],
  entryPoints: ['server/main.ts'],
  outfile: 'dist/server/main.js',
  platform: "node",
  target: "es2022",
  bundle: true,
}).then(() => console.log("Built server files"));
```

This isn't guarantee to be up to date.

A list of all the labels used to be used to remove extra checks around the code base

`CLIENT`: Removing this label will remove any ***client*** side specific code
`SERVER`: Removing this label will remove any ***server*** side specific code
`REMOVE_EVENT_LOG`: Removing this label will disable the pretty print on errors for the `@NetEvent` and `@Event` decorators
