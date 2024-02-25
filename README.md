# CarHub

A car showcase application using Next.js 13

First, run the development server:

### Things to Provide

- assets
- tailwind config
  ```javascript
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ["Inter", "sans-serif"],
        },
        colors: {
          "white-600": "#fcfcfc",
          "black-100": "#bbbbbb",
          "black-300": "#9195a1",
          "black-400": "#2C2E33",
          "primary-purple": {
            DEFAULT: "#3b3c98",
            100: "rgba(59, 60, 152, 0.1)",
          },
          "secondary-orange": "#f79761",
          "light-white": {
            DEFAULT: "rgba(59,60,152,0.03)",
            100: "rgba(59,60,152,0.02)",
          },
          gray: "#747A88",
        },
      },
    },
    plugins: [],
  };
  ```
- globals.css
- favicon

### Setup

Create a Next.js 13 project using,

```bash



You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

1. Local state in the main/home page: We can manage the state locally within the main/home page component. However, this would essentially turn the main/home page into a client-side component, which goes against our goal of utilizing server-side rendering.

2. Global state management: We can explore options such as using the Context API or a state management library like Redux Toolkit (RTK). However, implementing these approaches would still involve making the home or main page a client-side component.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
```
