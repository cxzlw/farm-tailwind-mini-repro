# Farm + Vue + PostCSS + Tailwind CSS 复现

并非最简，详见下文

## 步骤

1. `pnpm i`
2. `pnpm i @farmfe/js-plugin-postcss@latest @farmfe/core@latest @farmfe/cli@latest` 使用 `latest` 版本
3. `pnpm dev`
4. 看到报错
5. `pnpm i @farmfe/js-plugin-postcss@nightly @farmfe/core@nightly @farmfe/cli@nightly` 更新至 `nightly`
6. 再看报错

## `App.vue`

随便写点让 tailwind 生效的内容

```vue
<script setup lang="ts"></script>

<template>
  <div class="bg-red-400" />
</template>

<style scoped></style>
```

## `index.ts`

内容可以清空，但为了更像正常环境，保留内容

## `farm.config.ts`

你甚至不需要 `vue` 插件，保留原因同上

## `style.css`

必须包含

```css
@import "tailwindcss";
```

## index.html

甚至不需要 `<script>` 引入 `index.ts`，保留原因同上

## 报错

```log
❯ pnpm dev

> farm-tailwind-mini-repro@1.0.0 dev C:\Users\cxzlw\cxzlw-projects\farm-tailwind-mini-repro
> farm start

[ Farm ] Using config file at C:\Users\cxzlw\cxzlw-projects\farm-tailwind-mini-repro\farm.config.ts
[ building ] ⠂ transform (13) src/style.css
[ Farm ] Error: Failed to start the server
Caused by: Error: Parse `src/style.css` failed.
 Error: Parse `src/style.css` failed.
 Error:   × Expected 'none' value of an ident token
     ╭─[src/style.css:225:1]
 222 │   inherits: false;
 223 │ }
 224 │ @layer properties {
 225 │   @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
     ·                                                                                                                              ─
 226 │     *, ::before, ::after, ::backdrop {
 227 │       --tw-blur: initial;
 228 │       --tw-brightness: initial;
     ╰────

Potential Causes:
1.The module have syntax error.
2.This kind of module is not supported, you may need plugins to support it

Potential Causes:
1.The module have syntax error.
2.This kind of module is not supported, you may need plugins to support it

    at logError (file:///C:/Users/cxzlw/cxzlw-projects/farm-tailwind-mini-repro/node_modules/.pnpm/@farmfe+core@1.7.10/node_modules/@farmfe/core/dist/server/error.js:74:15)
    at Server.compile (file:///C:/Users/cxzlw/cxzlw-projects/farm-tailwind-mini-repro/node_modules/.pnpm/@farmfe+core@1.7.10/node_modules/@farmfe/core/dist/server/index.js:63:29)
    at async Server.listen (file:///C:/Users/cxzlw/cxzlw-projects/farm-tailwind-mini-repro/node_modules/.pnpm/@farmfe+core@1.7.10/node_modules/@farmfe/core/dist/server/index.js:45:9)
    at async start (file:///C:/Users/cxzlw/cxzlw-projects/farm-tailwind-mini-repro/node_modules/.pnpm/@farmfe+core@1.7.10/node_modules/@farmfe/core/dist/index.js:35:9)
    at async handleAsyncOperationErrors (file:///C:/Users/cxzlw/cxzlw-projects/farm-tailwind-mini-repro/node_modules/.pnpm/@farmfe+cli@1.0.5/node_modules/@farmfe/cli/dist/utils.js:111:9)
 ELIFECYCLE  Command failed with exit code 1.
```

## nightly 报错

````log
❯ pnpm dev

> farm-tailwind-mini-repro@1.0.0 dev C:\Users\cxzlw\cxzlw-projects\farm-tailwind-mini-repro
> farm start

[ building ] ⠂ transform (25) \0plugin-vue:export-helper
[ Farm ] Compilation failed: Parse `src/style.css` failed.
   × Expected 'none' value of an ident token
     ╭─[src/style.css:248:1]
 245 │   inherits: false;
 246 │ }
 247 │ @layer properties {
 248 │   @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
     ·                                                                                                                              ─
 249 │     *, ::before, ::after, ::backdrop {
 250 │       --tw-rotate-x: initial;
 251 │       --tw-rotate-y: initial;
     ╰────

[ Farm ] Using config file at C:\Users\cxzlw\cxzlw-projects\farm-tailwind-mini-repro\farm.config.ts

 ϟ  Farm  v2.0.0-nightly-20250411141103
 ✓  Compile in 127ms ⚡️FULL EXTREME!

[ Farm ] ➜  Local:   http://localhost:9000/
[ Farm ] ➜  Network: http://198.18.0.1:9000/
[ Farm ] ➜  Network: http://10.242.21.0:9000/
[ Farm ] ➜  Network: http://192.168.33.1:9000/
[ Farm ] ➜  Network: http://192.168.95.1:9000/
[ Farm ] ➜  Network: http://192.168.11.59:9000/
[ Farm ] ➜  Network: http://172.23.21.0:9000/
[ Farm ] ➜  Network: http://192.168.33.59:9000/
[ Farm ] ➜  Network: http://192.168.0.104:9000/
[ building ] ⠠ transform (25) \0plugin-vue:export-helper
C:\Users\cxzlw\cxzlw-projects\farm-tailwind-mini-repro\node_modules\.pnpm\etag@1.8.1\node_modules\etag\index.js:72
    throw new TypeError('argument entity is required')
          ^

TypeError: argument entity is required
    at etag (C:\Users\cxzlw\cxzlw-projects\farm-tailwind-mini-repro\node_modules\.pnpm\etag@1.8.1\node_modules\etag\index.js:72:11)
    at send (file:///C:/Users/cxzlw/cxzlw-projects/farm-tailwind-mini-repro/node_modules/.pnpm/@farmfe+core@2.0.0-nightly-20250411141103/node_modules/@farmfe/core/dist/server/send.js:5:20)
    at htmlFallbackMiddleware (file:///C:/Users/cxzlw/cxzlw-projects/farm-tailwind-mini-repro/node_modules/.pnpm/@farmfe+core@2.0.0-nightly-20250411141103/node_modules/@farmfe/core/dist/server/middlewares/htmlFallback.js:43:13)
    at call (C:\Users\cxzlw\cxzlw-projects\farm-tailwind-mini-repro\node_modules\.pnpm\connect@3.7.0\node_modules\connect\index.js:239:7)
    at next (C:\Users\cxzlw\cxzlw-projects\farm-tailwind-mini-repro\node_modules\.pnpm\connect@3.7.0\node_modules\connect\index.js:183:5)
    at generateResourceMiddleware (file:///C:/Users/cxzlw/cxzlw-projects/farm-tailwind-mini-repro/node_modules/.pnpm/@farmfe+core@2.0.0-nightly-20250411141103/node_modules/@farmfe/core/dist/server/middlewares/resource.js:51:9)
    at call (C:\Users\cxzlw\cxzlw-projects\farm-tailwind-mini-repro\node_modules\.pnpm\connect@3.7.0\node_modules\connect\index.js:239:7)
    at next (C:\Users\cxzlw\cxzlw-projects\farm-tailwind-mini-repro\node_modules\.pnpm\connect@3.7.0\node_modules\connect\index.js:183:5)
    at handleOutputFiles (file:///C:/Users/cxzlw/cxzlw-projects/farm-tailwind-mini-repro/node_modules/.pnpm/@farmfe+core@2.0.0-nightly-20250411141103/node_modules/@farmfe/core/dist/server/middlewares/resource.js:88:20)
    at call (C:\Users\cxzlw\cxzlw-projects\farm-tailwind-mini-repro\node_modules\.pnpm\connect@3.7.0\node_modules\connect\index.js:239:7)

Node.js v20.16.0
 ELIFECYCLE  Command failed with exit code 1.```
````
