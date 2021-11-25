# [@realtby/icons](https://www.npmjs.com/package/@realtby/icons)

realt.by icons library

[![npm](https://img.shields.io/npm/v/@realtby/icons)](https://www.npmjs.com/package/@realtby/icons)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

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
make lint
make build
make release # to push new version & generate changelog
make prerelease # then select pre- version, only push new version to npm, for testing
make build-size # reset cache, build & run size-limit
```
