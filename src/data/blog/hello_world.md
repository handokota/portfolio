---
banner_alt: A photo of a forest overlooking the bright white sky in the background
banner: https://images.unsplash.com/photo-1494825514961-674db1ac2700?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8
title_prefix: Introducing
title: Hello World!
description: This site has been long overdue a re-design & fresh lick of paint, so here's how I did it.
date: '2025-06-15'
---

## :face_with_raised_eyebrow: What is this?

---

This is my new Website! Built from the ground up with a whole new tech stack that I selected based on what I have learn't & been using over the past few months / years.

So, with the amount of work that went into re-building my current website but with a whole new look & a whole bunch of new features & options, I thought now this would be a good change to show some of them off.

## :question: Why

---

In short, it was long overdue. I usually try to update my personal portfolio website every year or so. I use it as an opportunity to experiment, try new tech, new ideas, etc. However, due to complications I kept delaying it, putting it off & just never doing it. However as of late I had a burst of motivation to get it done & launched. My previous portfolio site I deployed back in the beginning of 2024 & does look alright even today.

## :hammer: Tech Stack

---

The project built using the following tools & frameworks:

-   :atom_symbol: [React](https://reactjs.org/) / [Preact](https://preactjs.com/) (For Production)
-   :muscle: [Next.js](https://nextjs.org/)
    -   :mag: [next-seo](https://github.com/garmeeh/next-seo)
    -   :crescent_moon: [next-themes](https://github.com/pacocoursey/next-themes)
-   :female-singer: [EmotionCSS](https://emotion.sh)
-   :lipstick: [Twin.macro](https://github.com/ben-rogerson/twin.macro) (For [Tailwind CSS](https://tailwindcss.com/))
-   :tokyo_tower: [Tailwind UI](https://tailwindui.com/)
-   :feather: [Feather Icons](https://feathericons.com/)
-   :file_cabinet: [Hookstate](https://hookstate.js.org/)
-   :+1: [react-use](https://github.com/streamich/react-use)

## :sparkles: Features

---

With this new ground up re-build comes a whole host of new features & improvements.

### :atom_symbol: Preact

---

A small feature that I often forget I added but helps a lot with bundle size, is [Preact](https://preactjs.com/).

In summary, my Next.js project is configured to replace [React](https://reactjs.org/) with Preact in production builds.

```js:next.config.js
webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
            'react': 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
        });
    }

    return config;
},
```

### :book: Blog

---

As you can tell by the fact you're currently reading this, I now have a blog! :tada:

This means that I finally have a place to create lengthy articles that can go more in-depth on topics I care deeply about. Everything from technical write-ups on new technology I am experimenting with, to other personal posts on hobbies enjoy, such as gaming.

<XButton href="/blog" icon="feather:external-link" label="Vist my Blog" />

### :clipboard: Projects

---

My new [projects page](/projects) has been redesigns to utilize server-side rendering for a very unique purpose.
The page will show a select number of projects that are publicly available on my GitHub repository. However, the way they are selected is very unique.

Every request made for the page (That isn't already cached) will return a newly server-side rendered page that is later hydrated on the client (As all SSR does).
When performing the render, the server will go out and fetch all of my available GitHub repositories & then filter down all of them based on a number of filters.
These include the following:

-   The repository isn't archived
-   Contains the `portfolio` topic in the repository meta data

From there we then strip out the emoji suffix used in the repository description (This is a common practice I do to add a touch of color) so it can then be used as the project icon, with the description then being returned with that stripped out emoji.
The rest of the data returned is pretty standard (Homepage URL, GitHub repository URL, etc).

With this I can update the contents of my projects page by using GitHub as a form of CMS. All I will need to do to add a project to my projects page page is add the `portfolio` tag to any of my repositories.

<XButton href="/projects" icon="feather:external-link" label="Go to Projects" />

### :clock1: Timeline

---

I wanted a more effective way to track and record significant events without the commitment of writing a full blog post for each one. To achieve this, I developed a new Timeline feature for my site.

The solution was to build a simple JSON structure that allows me to add a new event to the timeline by simply creating a new data object. The heavy lifting is handled by [Next.js's static site generation (SSG)](https://nextjs.org/blog/next-9-3#next-gen-static-site-generation-ssg-support), which ensures the page is both fast and easy to maintain.

<XButton href="/timeline" icon="feather:external-link" label="Go to Timeline" />

### :link: Referrals

---

Many of the apps and services we use daily offer perks for spreading the word. I decided to create a central hub for the referral codes to the products I genuinely use and stand behind.

It's a curated list, and I figured this was the best place to share it. ¯\_(ツ)_/¯

This page is built almost identically to my [timeline](/timeline) page whereby a JSON structure is used to store the data that is then compiled at build time into a static page.

<XButton href="/referrals" icon="feather:external-link" label="Go to Referrals" />

### :red_circle: Status

---

This next feature I am super happy with how it turned out & a HUGE credit has to go to [@phineyes](https://twitter.com/phineyes) for his work on building & hosting [Lanyard](https://github.com/Phineas/lanyard), a service to expose your Discord presence via a RESTful API or WebSocket.

Using Lanyard I was able to build a live status widget & indicator component(s) that mean, as long as I am online on Discord, anyone is able to view what I am listening to on Spotify, what game I'm playing or even whatever I am coding thanks to a Visual Studio Code extension that adds rich presence to Discord.

<XButton href="/status" icon="feather:external-link" label="Go to Status" />

### :crescent_moon: Theme

---

A very common feature now days is offering multiple themes for an application. My previous site iteration was no stranger to this as it would switch between light & dark themes based on the users system preference. This worked very well, until you wanted to manually override is. As such I have, again, added both light & dark modes as I did before, but this time offer a way to manually override this setting from your system setting.

### :speaker: Sound

---

A fair few of the portfolio websites I looked at always had a nice touch of flair & one such touch I always found that I really liked was sound. Nothing crazy like playing music in background the whole time, but instead just subtle sound effects like button clicks, etc.

It's a small addition, built using [`use-sound`](https://github.com/joshwcomeau/use-sound), that adds some depth & makes the site feel much more interactive.

Currently the click sound is the only sound effect... For now. In the future I would like to experiment adding more sound effects to the site to continue expanding the feature. One such sound effect I have in mind I plan on looking into in the future is a envelope opening sound for when opening a blog post, or something similar? Not too sure yet but a nice idea I feel.

### :wheelchair: Accessibility

---

The final fea... Well, kind of a feature but more of a much needed improvement has been accessibility.

My previous website iteration met a lot of the minimum requirements for basic accessibility, however it could have been a lot better. Since the launch of that site I have learn't a LOT about the importance of accibility when designing & building websites / applications. As such I wanted to do my very best when building this one to improve it & make it as accessible as possible.

Here are some of the notable accessibility features/improvements:

#### Alt tags

---

Something small but very noticible is adding alt tags or `aria-label`'s where possible. This includes any & all images and buttons. This way screen readers are able to actually understand what the element is & read it back to the user.

#### Focus Highlights

---

Primarily brought to my attention by the work of Discord via there [`focus-rings`](https://github.com/discord/focus-rings) package & [TailwindCSS](https://tailwindcss.com/) offering a new `ring` style system aimed at helping with focus visiblity & accessibility.

![Focus ring](/blog/hello_world/focus.png 'Focus ring')

#### Keyboard navigation

---

While not complete coverage, I aimed to offer complete or near complete keyboard navigation as it can aid with accesibility systems by ensuring that all items both can be navigated to at all, but also in the order you need.

![Focus ring switching between buttons](/blog/hello_world/keyboard_nav.gif 'Focus ring switching between buttons')

#### Reduced Motion

---

When implementing my very pretty & fancy looking particles background, I started to consider the performance & accessibility implications of offering such animations. As such I began researching into motion & animation accesbility in the web.

From there I found out about the [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) CSS media query. By defualt when my site first loads, the initial state of the `animations` setting will default to whatever this query provides. If for whatever reason though this fails you are still always able to toggle off animations manually via the settings icon in the top right at all times.

With this setting I am toggle not only the background aniamtion graphic off, but also toggle off the transitions that are wrapping several components on several pages.

### Settings toggles

---

Following from the reduced motion toggle mention above, the settings dropdown, which is always located in the top right of the screen, also contains toggle buttons (Both displaying an icon to represent the icon as well as a checked icon to represent its current state) for toggling between light & dark theme, as well as to toggle sound effects.

## The Result

---

And with all of that, we have the final result of what you are looking at right now!

![A screenshot of handokota.com](/blog/hello_world/home.png 'A screenshot of handokota.com')
