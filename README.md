<!-- START -->
<h1 align="center">
  Demoing page flicker with `gatsby-plugin-image` using `StaticImage` & `gatsby-plugin-intl` as locale is pushed onto route.
</h1>

## Site is [here](https://gracious-mestorf-268e1b.netlify.app/en/). ##

Go try it out and propose a better strategy for pushing locales onto routes, please.

## What's a better strategy to push locales on to the url path without making network requests as `gatsby-plugin-intl` pushes the locale path onto the route?

Open to ideas for better locale routing strategies to avoid having to make network requests to push the locale onto the route, or if it has to be this way, open to strategies for how to improve user experience.

![Page flickers as locales pushed onto routes.](https://media.giphy.com/media/6wVDjk6aBBjiAS3gkX/giphy.gif)

## Using Static Image with `gatsby-plugin-image` flickers.

This is unrelated to the locale routes issue but included anyway. Watch the logo png in the Header. Open to ideas for how to fix this. 

![Img flickers](https://media.giphy.com/media/Y7CdS5vPTJ7Codxn2x/giphy.gif)

Here's `/src/components/Logo.js`:

```
export function Logo() {
  return (
    <StaticImage
      src="../assets/images/logo.png"
      loading="eager"
      alt="Logo"
      placeholder="blurred" />
  );
}
```



**How to work this.**

`git clone` this repo

`npm install`

`npm start`

## 🧐 What's inside?

There's some Tailwind and SSR stuff for themes you can ignore.

```.
├── LICENSE
├── README.md
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-ssr.js
├── node_modules
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
├── src
├── static
└── tailwind.config.js
```

<!-- END -->
