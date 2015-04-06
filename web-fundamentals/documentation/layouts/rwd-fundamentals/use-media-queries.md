# 03 Use CSS media queries for responsiveness

**TL;DR**

- Media queries can be used to apply styles based on device characteristics.
- Use **`min-width`** over `min-device-width` to ensure the broadest experience.
- Use relative sizes for elements to avoid breaking layout.

## Apply media queries based on viewport size

    @media (query) {
      /* CSS Rules used when query matches */
    }

attribute | Result
--------- | ------
`min-width` | Rules applied for any browser width over the value defined in the query.
`max-width` | Rules applied for any browser width below the value defined in the query.
`min-height` | Rules applied for any browser height over the value defined in the query.
`max-height`| Rules applied for any browser height below the value defined in the query.
`orientation=portrait` | Rules applied for any browser where the height is greater than or equal to the width.
`orientation=landscape` | Rules for any browser where the width is greater than the height.

![Preview of a page using media queries to change properties as it is resized.](imgs/mq.png)

    <link rel="stylesheet" media="(max-width: 640px)" href="max-640px.css">
    <link rel="stylesheet" media="(min-width: 640px)" href="min-640px.css">
    <link rel="stylesheet" media="(orientation: portrait)" href="portrait.css">
    <link rel="stylesheet" media="(orientation: landscape)" href="landscape.css">
    <style>
      @media (min-width: 500px) and (max-width: 600px) {
        h1 {
          color: fuchsia;
        }

        .desc:after {
          content:" In fact, it's between 500px and 600px wide.";
        }
      }
    </style>

[sample](samples/media-queries.html)

- When the browser is between **0px** and **640px** wide, `max-640px.css` will be applied.
- When the browser is between **500px** and **600px** wide, styles within the `@media` will be applied.
- When the browser is **640px or wider**, `min-640px.css` will be applied.
- When the browser **width is greater than the height**, `landscape.css` will be applied.
- When the browser **height is greater than the width**, `portrait.css` will be applied.

## A note on `min-device-width`

尽管开发者也可以根据 `*-device-width` 创建查询，但是我们**强烈建议不要这么做**。

这两种代码的差别虽然不明显但却十分重要：`min-width` 以浏览器窗口尺寸为依据，而 `min-device-width` 却是以屏幕尺寸为依据。很遗憾，有些浏览器（包括旧版 Android 浏览器）可能无法正确报告设备宽度，反而会以预期的视口宽度报告屏幕尺寸（以设备像素为单位）。

此外，使用 `*-device-width` 会阻止内容适应允许窗口调整大小的桌面设备或其他设备，因为该查询基于设备的实际大小，而非浏览器窗口大小。

## Use `any-pointer` and `any-hover` for flexible interactions

Starting with Chrome 39, your style sheets can write selectors that cover multiple pointer types and hover behaviors. The `any-pointer` and `any-hover` media features are similar to `pointer` and `hover` in allowing you to query the capabilities of the user’s pointer. Unlike the later, `any-pointer` and `any-hover` operate on the union of all pointer devices rather than the just the primary pointer device.

## Use relative units

    // NO
    div.fullWidth {
      width: 320px;
      margin-left: auto;
      margin-right: auto;
    }

    // YES
    div.fullWidth {
      width: 100%;
    }
