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

1. To change the icons color add this code (⬇️) to your `global.css`:

```css
.fill-current,
.fill-current path {
  fill: currentColor;
}
```

2. import icons from lib root:

```ts
import { SuccessIcon } from '@realtby/icons';
```

3. render icon, pass props:

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
```
