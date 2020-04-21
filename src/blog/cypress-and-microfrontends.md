---
title: "Cypress and Microfrontends"
date: "2020-04"
---

Cypress is a new, hip, tool for writing and running end to end tests. How well does it play with complex websites consisting out of multiple parts?

Topics: 
  - Cypress
  - User Acceptance Testing
  - End to End Testing
  - Iframes
  - Microfrontends
  - The postMessage API
  - Vertical Stack Apps

Resources: 
  - [Cypress](https://www.cypress.io/)
  - [Kent C. Dodds - Write Tests](https://kentcdodds.com/blog/write-tests)
  - [UserSnap - User Accepance Testing](https://usersnap.com/blog/user-acceptance-testing-right/)
  - [MDN - iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
  - [Martin Fowler - Microfrontends](https://martinfowler.com/articles/micro-frontends.html)
  - [micro-frontends.org](https://micro-frontends.org/)


Themes: 
  - Cypress is awesome
  - Complex websites are harder to trust
  - Iframes do not like Cypress
  - Hard to 'get' complicated functionality

Points:
  - ... we had a complex website, there was a foundation which was a e-commerce framework which was mixed with various, independently hosted applications.
  - ... Cypress is a pleasure to work with, when things are fast and reliable
  - ... Continuous Integration (CI) pipelines like Jenkins sometimes caused unexpected behaviour
  - ... Figure out what to stub, and how much you can get rid of.
  - ... Cypress is implemented with iframes, if you run your test suite in the Cypress GUI you can inspect and see that you have at least two frames, one for your app and one for your test suite.
  - ... in our case, using the postMessage API was necessary since that is how we implemented the iframe to top level context communication ...
  - ... It is very important to strike a balance between reliability and speed ...
  - ... reliability in terms of when a test runs and fails you would rather trust the test than the website ...
  - ... if you stub out too much of your system then your test is less and less reliable; if you run the test against your production site and the test passes, you can be fairly confident that things are working. (Although it can be wise to always be a bit skeptic) ...
  - ... Microfrontends are interesting because you can change, test and deploy a part of your website individually which can help you release features quicker, but at the same time you are introducing a lot more integration points, places where things can break ...
  - ... Proper user acceptance tests can be used to test the parts in isolation and then in integration, it is like a higher level version of the more common unit and integration tests with which I think most developers are comfortable with ...