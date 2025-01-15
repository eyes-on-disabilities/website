# Eyes on (Dis)Abilities Webpage

This is the source code for the [Eyes on (Dis)Abilities](https://eyes-on-disabilities.de) website. It is built using [VitePress](https://vitepress.vuejs.org/).

## Development

First, make sure you have the prerequisites:
- [Node.js](https://nodejs.org/) version 18 or higher.
- Terminal for accessing VitePress via its command line interface (CLI).
- Text Editor with [Markdown](https://en.wikipedia.org/wiki/Markdown) syntax support.

Then navigate into the project's root and install vitepress:
```sh [npm]
$ npm add -D vitepress
```

To start a local live-server, run:
```sh [npm]
$ npm run docs:dev
```

To build, run:
```sh [npm]
$ npm run docs:build
```
The build result will be stored under `docs/.vitepress/dist`.
