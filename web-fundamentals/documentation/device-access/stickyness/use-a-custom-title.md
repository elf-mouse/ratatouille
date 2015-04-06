# 04 Use a Custom Title

Internet Explorer and Safari allow you to specify a custom title that is used as app name next to or on top of your icon.

Add this code to your head `<head>`:

    <meta name="application-name" content="Web Fundamentals">
    <meta name="apple-mobile-web-app-title" content="Web Fundamentals">

All three browsers use the default `<title>` attribute if the additional tags are not around.

**Note**

- This tag is undocumented in Mobile Safari and could be changed and removed at any time.
