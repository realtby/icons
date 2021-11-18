# @realtby/icons
realt.by icons library

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

3. render icon, path props:

```tsx
<SuccessIcon size={20} className="text-success-500" />
```
