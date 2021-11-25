module.exports = [
    {
      name: "[cjs] bundle",
      path: "./dist/icons.js",
      running: false,
      webpack: false,
      limit: "45 kb"
    },
    {
      name: "[esm] bundle",
      path: "./dist/icons.esm.js",
      running: false,
      webpack: false,
      limit: "45 kb"
    },
    {
      name: "> tree-shaking: vk",
      path: "./dist/icons.esm.js",
      import: "{ VkIcon }",
      running: false,
      limit: "1478 B"
    },
    {
      name: "> tree-shaking: close",
      path: "./dist/icons.esm.js",
      import: "{ CloseIcon }",
      running: false,
      limit: "570 B"
    },
    {
      name: "> tree-shaking: flame",
      path: "./dist/icons.esm.js",
      import: "{ FlameIcon }",
      running: false,
      limit: "1023 B"
    },
    {
      name: "> tree-shaking: map",
      path: "./dist/icons.esm.js",
      import: "{ MapIcon }",
      running: false,
      limit: "671 B"
    },
    {
      name: "> tree-shaking: tv",
      path: "./dist/icons.esm.js",
      import: "{ TvIcon }",
      running: false,
      limit: "641 B"
    },
  ]
