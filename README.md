# @realtby/icons
realt.by icons library

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
