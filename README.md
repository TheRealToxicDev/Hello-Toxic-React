# Hello Toxic | React Starter
Simple, Hackable and Minimalistic static site made using React and 
## What's in this project?

← `README.md`: That’s this file, where you can tell people what your cool website does and how you built it.

← `index.html`: This is the main page template React uses to build your site. When you're ready to share it or add a custom domain, change SEO/meta settings in here.

← `src/`: This folder contains all the files React will use to build your site.

### Working in the `src/` folder 📁

← `src/index.jsx`: This is the root of your React app. If you add libraries like [chakra-ui](https://chakra-ui.com) or [redux](https://react-redux.js.org), you'll insert their providers here. The `<HelmetProvider`> is an example of a provider you'd use.

← `src/app.jsx`: The base for your react app, here is where the magic really happens. The router (from [wouter](https://github.com/molefrog/wouter) 🐰) is imported here.

← `src/hooks/`: [Hooks](https://reactjs.org/docs/hooks-intro.html) are a powerful way to interact with your app. Included are two examples, `wiggle` and `prefers-reduced-motion`. You can use the wiggle on any of your elements!

← `src/pages/`: Pages to import to the router should go here!

← `src/components/router.jsx`: One of the most important parts of a single page app is the router. It's how we know what page to show. We're using [Wouter](https://github.com/molefrog/wouter), a small and easy router. You could replace it for something like [React Router](https://reactrouter.com/), but we really like wouter!

← `src/components/seo.jsx`: When you share your site on social media, you want to make sure the meta tags are correct and you've got an image. All of the settings for this file are in `src/seo.json`.

← `src/styles`: CSS files add styling rules to your content. You have [a lot of](https://vitejs.dev/guide/features.html#css) importing options for CSS including CSS modules if that's your jam.
