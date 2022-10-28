# HTML layout and theme playground

This playground is powered by:

- Svelte Kit with:
  - [SSG](https://kit.svelte.dev/docs/appendix#ssg) mode enabled
  - [PostCSS](https://postcss.org/) enabled

## Getting started

```sh
$ pnpm install
$ pnpm run dev
```

Go to http://127.0.0.1:3000/

Build SSG site:

```
$ pnpm run build
```

Browse SSG site:

```
$ pnpm run preview
```

Go to http://127.0.0.1:3000/


## Test build version

```
$ docker compose build
$ docker compose up -d
```

Go to http://127.0.0.1:8080/
