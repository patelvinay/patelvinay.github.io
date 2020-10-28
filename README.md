<p align="center">
  <a href="https://patelvinay.com/">
    <img alt="Gatsby" src="./src/static/logo_noalpha.svg" width="100" />
    <h2 align="center">Vinay Patel</h2>
  </a>
</p> 
<p align="center">Creative FrontEnd Web Developer</p>

[![Build Status](https://travis-ci.org/patelvinay/patelvinay.github.io.svg?branch=develop)](https://travis-ci.org/patelvinay/patelvinay.github.io)
![GitHub](https://img.shields.io/github/license/patelvinay/patelvinay.github.io)
![Website](https://img.shields.io/website?down_message=offline&label=site&up_message=online&url=http%3A%2F%2Fpatelvinay.github.io)


Strained eyes? There's DarkMode too :p

_NOTE: If you are using this site as a template for your own portfolio site, I
would be very glad if you add a link to the original site with my name in
footer_

## :rocket: Quick start

**Run the site locally**

_NOTE: The default branch for this repo is `develop`, when you push or pull make
sure you specify the correct branch_

### Step 1: Clone The Repo

Fork the repository. then clone the repo locally by doing -

```bash
git clone https://github.com/patelvinay/patelvinay.github.io.git
```

### Step 2: Install Dependencies

cd into the directory

```bash
cd patelvinay.github.io
```

install all the dependencies

```bash
npm install
```

### Step 3: Start Development Server

Then start the development Server

```
npm run develop
```

After running the development server the site should be running on
https://localhost:8000

## :open_file_folder: What's inside?

A quick look at the folder structure of this project.

    .
    ├── content
    │   ├───blog
    │   ├───case-studies
    │   └───json
    ├── cypress
    ├── plugins
    └── src
        ├───components
        │   ├───About
        │   ├───Blog
        │   ├───common
        │   ├───Concepts
        │   ├───Contact
        │   ├───CreativeCoding
        │   ├───Home
        │   ├───Layout
        │   │   └───Navbar
        │   ├───Lightbox
        │   ├───Projects
        │   └───Skills
        ├───hooks
        ├───pages
        ├───static
        │   └───images
        ├───styles
        └───templates

## Tools Used

1. Gatsby.js (of course)
2. Styled Components for styling
3. Cypress for E2E Testing
4. Jest for Unit Testing
5. TravisCI for CI/CD

## :v: Contributing

_NOTE: if you want to change the [blog content](./content) or fix any typo you
can do that from github's ui without cloning the repo locally_

After cloning & setting up the local project you can push the changes to your
github fork and make a pull request.

> You can also run the tests locally to see if everything works fine with

### Running tests

```bash
npm run test
npm run test:e2e
```

### Pushing the changes

```bash
git add .
git commit -m "commit message"
git push YOUR_REPO_URL develop
```

---

Made with :heart: and Gatsbyjs
