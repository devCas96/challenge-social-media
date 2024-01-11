# VITE CHALLENGE SOCIAL MEDIA

Vite code challenge for build a small social media.

## Table of Contents

- [Technical decisions](#technical-decisions)
- [Notes](#notes)
- [Installation](#installation--dev-server)
- [Preview](#preview)

## Technical decisions

This project is composed by:

- **Vite** The best approach for this project is to work with Client-side rendering, for this reason, there was no need for Next, Gatsby or other libraries that help with different ways of rendering.

- **Zustand** yes, it seems like a bad decision, but the complexity of a larger state management like *Redux* was not necessary.

- **React router dom** for handle the different routes in our app.

- **Atomic Design** focused on reusability and to compose big components by smaller ones.

- **Custom Hooks** and some **Compound components** were used as pattern design.

- **HTML** in our **JSX** and pure **CSS**

- **Fetch** yep, once again, it was not neccesary add other dependency like **Axios** to our project.
(I builded an interceptor with fetch to handle request headers) 😉

- **PNPM** as default package manager.

### 📝NOTES

- This App uses oAuth2 from Google and requires a test user for work well, when the google login prompt appears, you must put this credentials:

```bash
  gmail: jorgeipsum03@gmail.com
  psw: googleTest01
```

## Installation & dev server

```bash
    git clone git@github.com:devCas96/challenge-social-media.git && cd challenge-social-media
    pnpm install
    pnpm run dev
```

## Preview

![Preview desktop](/public/preview/preview-desktop.png)

-------------------------------------
![Preview mobile](/public/preview/preview-mobile.png)
