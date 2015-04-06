# Visual Style Guide

01. [Typography](#typography)
02. [Buttons](#buttons)
03. [Lists](#lists)
04. [Links](#links)
05. [Icons](#icons)
06. [Breadcrumbs](#breadcrumbs)
07. [Table](#table)
08. [Grid](#grid)
09. [Colors](#colours)
10. [Highlights](#highlights)
11. [Editorial header](#editorial-header)
12. [Article section](#article-section)
13. [Guides section](#guides-section)
14. [Page header](#page-header)
15. [Quote](#quote)
16. [Guides Intro](#guides-intro)
17. [Article navigation](#article-navigation)
18. [Next lessons](#next-lessons)

## Typography

- Small (`13px/2em`)
- Base (`16px/1.625em`)
- Medium (`20px/1.3em`)
- Large (`26px/1em`)
- XLarge (`42px/1.2381em`)
- XXLarge (`68px/1.1471em`)
- Huge (`110px/1.19em`)

## Buttons

- Primary
- Secondary

extend: `inverted-block`(wrap) + `button--secondary-variation`

## Lists

`<ul>`, `<ol>`, `<dl>`

- Default lists (`list`, `list__item`)
- Default lists of links (`list-links`, `list-anchor`)

extend: `list-links--primary`, `list-links--secondary`, `list-small`

## Links

- Primary
- Secondary

## Icons

    <i class="icon icon-font"></i>

    .icon {
      font-family: icons;
      display: inline-block;
      vertical-align: top;
      line-height: 1;
      font-weight: 400;
      font-style: normal;
      speak: none;
      text-decoration: inherit;
      text-transform: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

- Icon Circles (`border-radius`)
- Icon Circles - Themed (`background-color`)
- Icon Circles - Large (`font-size`)

## Breadcrumbs

Link 1 / Link 2 / Link 3 / Link 4 (`breadcrumbs`, `breadcrumbs__link`)

## Table

`<table>`, `colgroup`, `thead`, `tbody`

## Grid

## Colours

### Blacks

- gray-background: `#f0f0f0`
- gray-keyline: `#e0e0e0`
- gray: `#737373`
- gray-medium: `#bababa`
- gray-dark: `#404040`

### Themes

- Primary
- Secondary

### Google

- blue: `#4285f4`
- green: `#0f9d58`
- red: `#cb4437`
- yellow: `#f4b400`

### Helpers

- text: `#404040`
- highlight: `#3372df`
- warning: `#ffe168`
- danger: `#cb4437`
- muted: `#737373`
- remember: `#09829a`
- learning: `#da2e75`

## Highlights

## Editorial header

`editorial-header__title`, `editorial-header__subtitle`, `editorial-header__excerpt`

## Article section

- Layout basics
- Basic layouts
- Layout patterns
- UI elements

## Guides section

- Multi-Device Layouts
- Images, Audio and Video
- Forms and User Input
- Optimizing Performance

## Page header

    <nav class="breadcrumbs"></nav>
    <h3></h3>
    <div class="divider"></div>
    <p></p>

## Quote

    <blockquote>
      quote content
      <p>Name / Details</p>
    </blockquote>

## Guides intro

    <ul>
      <li>
        <a href="">
          <span><i></i></span>
          <h3></h3>
        </a>
        <p></p>
      </li>
    </ul>

## Article navigation

`article-nav-link`, `article-nav-link--prev`, `article-nav-link--next`

## Next lessons

`list-lessons`, `list-links`, `current`
