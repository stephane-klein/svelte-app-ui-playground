# Svelte + Tailwind CSS + HeadlessUI

Root issue: https://github.com/stephane-klein/svelte-app-ui-playground/issues/2

Example goal: create a https://cal.com "copy cat" UI based on [Svelte](https://svelte.dev/) + [SvelteKit](https://kit.svelte.dev/) + [Tailwind CSS](https://tailwindcss.com/) + [Headless UI](https://svelte-headlessui.goss.io/docs).


## Getting started

```
$ asdf install
```

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
