---
title: "How I built this site"
date: "2020-04-08"
---

![Site Landing Page](./images/felix-gudehn-dev-landing-page.png)

So, since I have just revamped my personal website ([`felix.gudehn.dev`](https://felix.gudehn.dev)) I thought it might be interesting to read about how that happened, and what tools I used and how I solved any of the problems that popped up. 

I recently lost my job. Or lost might be the wrong word since I actually resigned a month prior to getting notice. But currently I am what you would call _unemployed_. Without going into detail as to why I am in this situation (\*_cough_\* Coronavirus \*_cough_\*) I decided that I need to work on my online brand and get a proper personal website up and running. I mean, are you even really a developer if you don't have your own website?

This turned out to be the perfect opportunity to try some new tools out, I settled on using [Gatsby](https://www.gatsbyjs.org/) to get the general structure of the site off the ground. I have dabbled with Gatsby before but never had the time to properly learn how it works. So I quickly went through the [tutorial](https://www.gatsbyjs.org/tutorial/) and I was off! 

Gatsby is a framework for creating smaller static websites like blogs and e-commerce fronts. It is build with a core data layer which a user can fetch data from using the hyper-modern query language _GraphQL_. So the basic gist of it is: Setup the main `Layout` of your website, defined components & page templates and then use GraphQL to query for data like 'all blog posts' or 'the 5 most recent articles' which can then be handled by your React component based pages.

![GraphQL query](./images/graphql-query-blog-posts.png)

Once i got Gatsby setup to my liking I pretty soon started to thing about how to start styling my website. There are several ways of styling in Gatsby. You can use plain old CSS files, util first CSS frameworks like [TailwindCSS](https://tailwindcss.com/) and CSS-in-JS libraries like [Emotion](https://github.com/emotion-js/emotion) & [Styled Components](https://styled-components.com/). I settled for Styled Components and used the gatsby plugin `gatsby-plugin-styled-components` to get it working within Gatsby.

Styled Components is a way of tying the sack on the component based mindset first started by JSX which merged JS & HTML and now CSS-in-JS libraries go even further and put JS, HTML & CSS all in the same file. Within the context of React this makes sense. A component-driven way of organising all crucial parts of a 'thing' on a website. The Styled Components library is pretty powerful, it allows you to create simple *styled* html components like a styled `<div/>` or a styled `<p/>` with ease.

![Styled Components Sample](./images/styled-components-sample.png)

Now armed with solid structure for the site with Gatsby and an idea of how to style the components the next part, and maybe the most crucial part of building any React based website, is building the components. I've been learning a lot about design systems lately so I decided to apply some of the concepts mentioned by Mark Dalgleish in [this talk](https://www.youtube.com/watch?v=xxbc3wAztl0) about Design Practices at ReactConfAU 2020. In this talk Mark talks about designating the different tasks of design onto different classes of components. Margin & orientation for Layout components & styling etc to other components. I decided to use a bit of this thinking by implementing a `<Stack>` and a `<Row>` component. These components have the sole responsibility of positioning children vertically and horizontally. This sort of pattern is very useful since you can quickly change / prototype your design by alternating through a set of predefined spacing or size values.

![Layout Component Usage](./images/layout-components-usage.png)

Finally, with my website build with posts, styling & components the last step is now to release it. The modern way of releasing a static website is by using a service like [Netlify](https://www.netlify.com/) or [Zeit](https://zeit.co/). I've used Netlify previously so I decided to roll with Zeit for comparison. It is unbelivably easy to get off the ground. Simply connect Zeit to where you are hosting your repository (I'm using GitHub) and press deploy. Easy as. The only configuration needed was to redirect my custom domain [managed by Google](https://domains.google.com) to Zeit, setup some redirects for the `www.*` and apex domain `gudehn.dev` and then the site was live. 

So in conclusion, setting up a personal website in 2020 is a fairly straightforward process using the tools mentioned in this article. I will keep updating this website with more features so maybe this article will be the first in a series of articles. 😀

That's all for now, and if you liked this blog post or have any questions feel free to reach out.
