# [@realtby/icons](https://www.npmjs.com/package/@realtby/icons)

realt.by icons library

[![npm](https://img.shields.io/npm/v/@realtby/icons)](https://www.npmjs.com/package/@realtby/icons)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

<a href="https://realtby.github.io/icons" target="_blank"><img width="1341" alt="realt.by icons storybook" src="https://user-images.githubusercontent.com/11758660/143626504-408314fa-aaa2-4b19-8ed5-27891750b2fb.png"></a>

## install

```bash
npm i -S @realtby/icons
```

## usage

1. import `icons.css` to your project, for example:

```ts
import '@realtby/icons/dist/icons.css';
```

2. import icons from lib root:

```ts
import { SuccessIcon } from '@realtby/icons';
```

2. render icon, pass props:

```tsx
<SuccessIcon size={20} className="text-success-500" />
```

## development

```bash
make install
make dev # run storybook
make lint
make build
make release # to push new version & generate changelog
make prerelease # then select pre- version, only push new version to npm, for testing
make build-size # reset cache, build & run size-limit
make size-limit-generate # generate icon size limit
```

## How add svg to the library

1. Copy the raw `svg` (for example: `login.svg`) and put it in the desired folder in `src/icons` (for example: `admin`):

```
  src/
      icons/
            ...
            admin/
                  ...
                  login.svg
```

2. Run `svg:processing` script for the `admin` folder:

```
  $ npm run svg:processing src/icons/admin
```

3. Check result:

```
  src/
      icons/
            ...
            admin/
                  ...
                  login.optimized.svg
                  login.tsx
                  index.tsx
```

> Note: Processing performs an average optimization.
> For the best result, optimize the icon manually in
> the [SVGOMG](https://jakearchibald.github.io/svgomg/) service,
> save it to a file with the extension `.optimized.svg` and
> run `svg:processing` again.

4. Generate icon size-limit:

```
$ make build
$ make size-limit-generate
```
