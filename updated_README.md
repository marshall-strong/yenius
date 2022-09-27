<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT TITLE & LOGO -->

<div align="center">
  <h1 align="center">YENIUS</h1>

  <!-- project logo -->
  <img src="./assets/logo-yenius-1482-207.png" alt="Yenius logo">

  <p align="center">
    a Kanye West-centric full-stack clone of Genius.com -- community sourced music lyrics, interpretations, and metadata.
    <!-- <img src="images/pexelsLogoOnTransparent.png" alt="Logo" height="40"> -->
    <br />
    <!-- <a href="https://github.com/marshall-strong/yenius"><strong>Explore the docs »</strong></a> -->
    <!-- <br /> -->
    <!-- <br /> -->
    <a href="http://yenius.herokuapp.com/">View Demo Site</a>
    ·
    <a href="https://github.com/marshall-strong/yenius/issues">Report Bug</a>
    ·
    <a href="https://github.com/marshall-strong/yenius/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<!-- While the README is still being updated, use the automatically generated ToC -->
<!-- Once the README is ready to be published, update and use the collapsable HTML ToC -->

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [1. Install Prerequisites](#1-install-prerequisites)
  - [2. Clone the GitHub Repository and Install Dependencies](#2-clone-the-github-repository-and-install-dependencies)
  - [3. Acquire an API Key (for Microsoft's Bing News Search API)](#3-acquire-an-api-key-for-microsofts-bing-news-search-api)
  - [4. Add the API Key to the Project](#4-add-the-api-key-to-the-project)
  - [5. Run the Project](#5-run-the-project)
- [Features](#features)
  - [the site fetches photos using the Pexels API without exposing the API key to end users](#the-site-fetches-photos-using-the-pexels-api-without-exposing-the-api-key-to-end-users)
  - [the site displays images using a "masonry" layout](#the-site-displays-images-using-a-masonry-layout)
  - [the site initially displays photos from the Pexels "Curated Photos" endpoint](#the-site-initially-displays-photos-from-the-pexels-curated-photos-endpoint)
- [Project Style](#project-style)
  - [Pre-commit](#pre-commit)
  - [Prettier](#prettier)
  - [Stylelint](#stylelint)
- [Testing](#testing)
- [Production Deployment](#production-deployment)
- [Project Roadmap](#project-roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

<!-- <details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details> -->

<!-- ABOUT THE PROJECT -->

## About The Project

[![Project Screenshot][project-screenshot]][project-production-url]

This project is a Kanye West-centric fullstack clone of the music encyclopedia [Genius.com](https://genius.com/).

A production deployment of this project can be viewed at [yenius.herokuapp.com](https://yenius.herokuapp.com/#/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Amazon AWS, Amazon S3, Babel, Microsoft Bing New Search API, Create React App,
CSS3, ES6, ESLint, GitHub, Google Chrome, Heroku, HTML5, JavaScript, Markdown, Node.js, npm, PostgreSQL, pre-commit, Prettier, React Router, React, Redux, Ruby, Ruby on Rails, RubyGems, SCSS, stylelint, webpack

[![Ruby on Rails 6][rubyonrails-shield]][rubyonrails-url] <!-- #CC0000 -->

- Ruby on Rails description...

[![PostgreSQL][postgresql-shield]][postgresql-url] <!-- #4169E1 -->

- PostgreSQL description...

[![React][react-shield]][react-url] <!-- #61DAFB -->

- React is an open-source front-end JavaScript library for building user interfaces based on UI components.

[![Redux][redux-shield]][redux-url] <!-- #764ABC -->

- Redux description...

[![Create React App][cra-shield]][cra-url] <!-- #09D3AC -->

- Create React App takes care of setting up and configuring a new React application with useful defaults, eliminating a lot of boilerplate code. It also integrates Jest and React-Testing-Library into the application, making it easy to setup unit tests down the road.

[![Bing News Search API][microsoftbing-shield]][microsoftbing-url] <!-- #258FFA -->

- Microsoft Bing News Search API description...

[![Amazon AWS][amazonaws-shield]][amazonaws-url] <!-- #232F3E -->

- Amazon AWS description...

[![AWS S3 Image Hosting][amazons3-shield]][amazons3-url] <!-- #569A31 -->

- AWS S3 Image Hosting description...

[![Heroku][heroku-shield]][heroku-url] <!-- #430098 -->

- Heroku description...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To set up and run a local copy of this project on your own machine, do the following:

### 1. Install Prerequisites

- install Ruby
- install Rails

- install Heroku local?

- Do the steps below have to take place in order to run the front end with CRA scripts?

Node.js is a back-end runtime environment that executes JavaScript code outside a web browser, and npm is its default package manager. Both must be installed locally in order to run this project.

- `Node.js`

  The recommended way of installing Node.js is with a Node version manager.
  Different operating systems use different Node version managers:

  _Node version managers for OSX and Linux:_

  - `nvm` - [installation instructions](https://github.com/creationix/nvm)
  - `n` - [installation instructions](https://github.com/tj/n)

  _Node version managers for Windows:_

  - `nodist` - [installation instructions](https://github.com/marcelklehr/nodist)
  - `nvm-windows` - [installation instructions](https://github.com/coreybutler/nvm-windows)

  Choose an appropriate Node version manager for your operating system and follow the installation instructions linked above to install both the version manager and Node.js.

  To confirm that Node.js has been installed successfully, run the following command to check the installed version:

  ```sh
  node -v
  ```

- `npm`

  Once Node.js is installed, download and install the latest version of npm by running the following command from the command line:

  ```sh
  npm install npm@latest -g
  ```

  To confirm that npm has been installed successfully, run the following command to check the installed version:

  ```sh
  npm -v
  ```

For additional information or help installing Node.js, npm, and Node version managers, consult the official npm documentation on [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### 2. Clone the GitHub Repository and Install Dependencies

The GitHub repository for this project can be found at <https://github.com/marshall-strong/yenius>.

Click on the "Code" button and select which method to use to clone the repository: HTTPS, SSH, the GitHub CLI, or Download a ZIP file.

To clone the repository using the GitHub CLI, run the following command from the command line:

```sh
gh repo clone marshall-strong/yenius
```

Navigate into the project's root directory:

```sh
cd yenius
```

Install project dependencies:

```sh
npm install
```

### 3. Acquire an API Key (for Microsoft's Bing News Search API)

All of the images this site displays are retrieved from Pexels, and are requested and received via the Pexels API. An API key is required in order to interact with the Pexels API. **A Pexels API Key is NOT included in this repository -- you must get your own (free) API key from Pexels.**

Follow these steps to register with Pexels and obtain a Pexels API Key:

- Create a free Pexels account at <https://www.pexels.com/onboarding>
- Click the "I want to download" button
- Enter your personal information, then click the "Create New Account" button
- Complete your account setup by opening the email sent to you by Pexels and clicking the "Confirm email" button
- Go to <https://www.pexels.com/api/> and click the "Your API Key" button
- Fill out the form, agree to the Terms of Service, and click the "Generate API Key" button
- Copy the API key and save it somewhere safe -- you will need it in the next section

The API key should be a 56 character string of numbers and lowercase letters.

example: `sample0api0key123456789abcdefghijklmnopqrstuvwxyz0000000`

If you ever lose or misplace your API key, you can retrieve it by logging in to your Pexels account.

### 4. Add the API Key to the Project

In development mode, the Pexels API Key is stored in a `.env` file and saved as an environment variable. This `.env` file should NOT be committed to GitHub, and is not a secure way to store API keys in a production environment.

Create a new file named `.env` inside of the `react-frontend` sub-directory:

```sh
touch react-frontend/.env
```

Add your Pexels API Key to the `.env` file as an environmental variable named `PEXELS_API_KEY`:

```sh
echo "PEXELS_API_KEY=sample0api0key123456789abcdefghijklmnopqrstuvwxyz0000000" > react-frontend/.env
```

Once you are done, your `.env` file should look like this:

```js
// react-photo-search/react-frontend/.env

PEXELS_API_KEY = sample0api0key123456789abcdefghijklmnopqrstuvwxyz0000000;
```

The file `react-photo-search/react-frontend/example.env` is an example `.env` file with a fake API Key that you can use as a guide when creating your own `.env` file with your own API Key.

### 5. Run the Project

Start the project by running the `npm start` command from the root directory of the GitHub repository:

```sh
npm start
```

This command is a shortcut that uses Create React App's built-in scripts to start the development server and compile the project using webpack. At the same time, Netlify Dev starts another, separate server to load the Netlify Functions onto, and it makes the environment variables defined in the `.env` file available to the Netlify Functions server (but NOT to the Create React App server). Even in Development mode, this will hide the Pexels API key from users on the client side.

<p align="right">(<a href="#project_title">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

<!-- ## Usage -->

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->

## Features

### the site fetches photos using the Pexels API without exposing the API key to end users

Sending a request to the Pexels API requires a key, and if the request is created and sent from inside of the Create React App application, the API key will end up being exposed to any site users with access to Chrome DevTools. Netlify provides a solution to this problem. A netlify function is a function that can be used to execute server-side code without having to deploy your own server. Under the hood, Netlify functions indirectly use AWS's serverless Lambda functions to run on-demand server-side code.

<!-- react-photo-search/react-frontend/src/components/App.jsx -->

```jsx
// react-photo-search/react-frontend/src/components/App.jsx

import React, { useEffect, useState } from "react";

const App = () => {
  const [displayedUrl, setDisplayedUrl] = useState(null);
  const [newUrl, setNewUrl] = useState(null);
  const [response, setResponse] = useState(null);
  const [userInput, setUserInput] = useState("");

  const attributionUrl = "https://www.pexels.com/api/";
  const baseUrl = "https://api.pexels.com/v1/";
  const homeUrl = baseUrl + "curated/?page=1&per_page=10";

  useEffect(() => {
    const fetchPexelsPhotos = async () => {
      const apiEndpointSubstring =
        newUrl.substring(26, 32) === "search"
          ? "?endpoint=search&"
          : "?endpoint=curated&";
      const remainingParamsSubstring = newUrl.split("?")[1];
      const netlifyUrl =
        `/.netlify/functions/fetchPexelsPhotos` +
        apiEndpointSubstring +
        remainingParamsSubstring;
      // sends the Pexels API request using a Netlify function to avoid exposing the secret key
      try {
        const netlifyRes = await fetch(netlifyUrl).then((res) => res.json());
        setResponse(netlifyRes);
        setDisplayedUrl(newUrl);
        setNewUrl(null);
      } catch (err) {
        console.log(err);
      } finally {
      }
    };

    // invoke the async fetch function declared above if the conditions are met
    if (newUrl) {
      fetchPexelsPhotos();
    }
  }, [displayedUrl, newUrl, userInput, response]);

  return (
    <div className="app-component">
      <Navbar />
      <Gallery response={response} />
      <Footer />
    </div>
  );
};

export default App;
```

<!-- react-photo-search/react-frontend/netlify/functions/fetchPexelsPhotos.js -->

```js
// react-photo-search/react-frontend/netlify/functions/fetchPexelsPhotos.js

const axios = require("axios");
const SECRET = process.env.PEXELS_API_KEY;

exports.handler = async (event, _context) => {
  try {
    const { endpoint, page, per_page, query } = event.queryStringParameters;

    const baseUrl = `https://api.pexels.com/v1/`;

    const constructRequestUrl = (
      baseUrl,
      apiEndpoint,
      page,
      perPage,
      query
    ) => {
      let url = baseUrl + apiEndpoint + `/?page=${page}&per_page=${perPage}`;
      const requestUrl = !query ? url : url + `&query=${query}`;
      return requestUrl;
    };

    const url = constructRequestUrl(baseUrl, endpoint, page, per_page, query);

    // fetch data from the the Pexels API endpoint
    const response = await axios({
      method: "get",
      url: url,
      headers: {
        Authorization: `${SECRET}`,
      },
    });

    const netlifyResponse = {
      statusCode: response.status,
      body: JSON.stringify({
        statusCode: response.status,
        statusText: response.statusText,
        request_url: response.config.url,
        page: response.data.page,
        per_page: response.data.per_page,
        photos: response.data.photos,
        total_results: response.data.total_results,
        prev_page: response.data.prev_page,
        next_page: response.data.next_page,
      }),
    };

    return netlifyResponse;
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};
```

### the site displays images using a "masonry" layout

The `Gallery` component displays photos in a masonry layout, where photos are arranged to completely fill out rows without compromising the images' aspect ratios.

### the site initially displays photos from the Pexels "Curated Photos" endpoint

When the site loads for the first time, the photos it displays in the `Gallery` component are retrieved from Pexels' "Curated Photos" endpoint.



<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Style

### Pre-commit

[Pre-commit](https://pre-commit.com/) is a framework for managing and maintaining multi-language pre-commit hooks. It runs Git hook scripts (like linters) before each Git commit, and prompts the user to fix any issues that are found before the commit can be saved. Pre-commit manages Git hooks for the user and allows them to use linters written in any language, regardless of which language the actual project is written in.

Before using Pre-commit on your machine for the first time, the Pre-commit package manager must first be installed locally on your machine:

```bash
#!/bin/bash
$ pip install pre-commit
```

Pre-commit hooks are configured using a file named `.pre-commit-config.yaml`. The file containing the Pre-commit configuration for this project is reproduced below:

```yaml
# yenius/.pre-commit-config.yaml

repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v3.4.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-added-large-files
  - repo: https://github.com/pre-commit/mirrors-prettier
    rev: "v2.7.1" # Note: Use the sha / tag you want to point at
    hooks:
      - id: prettier
  - repo: https://github.com/thibaudcolas/pre-commit-stylelint
    rev: "v14.10.0" # Note: Use the sha / tag you want to point at
    hooks:
      - id: stylelint
        args: [--fix]
        additional_dependencies:
          # Note: stylelint itself (and not a mirror) needs to be used here when using additional_dependencies.
          - stylelint@latest
          - stylelint-config-standard@latest
          - stylelint-config-idiomatic-order@latest
          - stylelint-config-prettier@latest
          # Note: Package names starting with `@` need to be quoted. For example:
          # - "@scope/my-awesome-plugin@0.12.0"
```

**Note:** The `prettier` and `stylelint` hooks configured in the `.pre-commit-config.yaml` file above are described in greater detail in the next section.

Once the configuration file is complete, run `pre-commit install` to set up the git hook scripts:

```sh
#!/bin/bash
$ pre-commit install
pre-commit installed at .git/hooks/pre-commit
```

Once installed, Pre-commit will run automatically on every `git commit`!

_Console output after installing and configuring pre-commit:_

```bash
#!/bin/bash
$ pip install pre-commit --upgrade
$ pre-commit --version
pre-commit 2.13.0
$ cd yenius
$ pre-commit sample-config
$ pre-commit install
pre-commit installed at .git/hooks/pre-commit
$ pre-commit run --all-files
```

[pre-commit/pre-commit-hooks](https://github.com/pre-commit/pre-commit-hooks) Some out-of-the-box hooks for pre-commit

### Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter that enforces conventions automatically.

[prettier/prettier](https://github.com/prettier/prettier)
Official Prettier repository

[pre-commit/mirrors-prettier](https://github.com/pre-commit/mirrors-prettier)
Mirrors all prettier/prettier releases, used by Pre-commit to run the prettier hook

### Stylelint

[Stylelint](https://stylelint.io/) is a linter that identifies errors and enforces conventions in a project's stylesheets.

_Use `npx` to run Stylelint at any time (not just when saving a commit):_

```bash
#!/bin/bash
$ cd yenius
$ npx stylelint "react-frontend/src/**/*.css" --fix
```

[stylelint/stylelint](https://github.com/stylelint/stylelint)
Official Stylelint repository

[stylelint/stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
The standard shareable config for Stylelint

[ream88/stylelint-config-idiomatic-order](https://github.com/ream88/stylelint-config-idiomatic-order)
Orders styles using consistent, idiomatic CSS

[prettier/stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)
Turns off all rules that are unnecessary or might conflict with prettier

[thibaudcolas/pre-commit-stylelint](https://github.com/thibaudcolas/pre-commit-stylelint)
Mirrors all stylelint/stylelint releases, used by Pre-commit to run the stylelint hook

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing

There are not currently any tests -- they need to be added.

<!-- [**Jest**](https://jestjs.io/) is a JavaScript testing framework put out by Facebook and designed for unit testing React components.

This project has basic unit tests for each component -- [Add more Unit Testing with Jest](https://github.com/marshall-strong/yenius/issues/67) for all React components is part of the [Project Roadmap](#project-roadmap) for future development.

[**Playwright**](https://playwright.dev/) is a framework by Microsoft that enables reliable end-to-end testing for modern web apps.

This project does not currently have any end-to-end tests -- [Add End-to-End Testing with Playwright](https://github.com/marshall-strong/yenius/issues/68) is part of the [Project Roadmap](#project-roadmap) for future development.

### Running Unit Tests with Jest

To run this project's unit tests using Jest, run the following command:

```node
npm test
```

This project was built using Create React App, so Jest is already built into the app.
When `npm test` is run from the root directory, Node navigates into the React project subdirectory and runs Jest using `react-scripts test`.

At this point in time, the only Unit Tests for this project are basic smoke tests for each component. Part of the [Project Roadmap](#project-roadmap) for future development is to [add more robust unit testing](https://github.com/marshall-strong/yenius/issues/67) for all React components. -->

<!-- #### Jest Documentation

<https://jestjs.io/docs/tutorial-react>
<https://create-react-app.dev/docs/running-tests/#testing-components>
<https://reactjs.org/docs/testing-recipes.html> -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Production Deployment

**<http://yenius.herokuapp.com/>**

This project is deployed to Production via Heroku.
A live version of the site can be viewed [here]("http://yenius.herokuapp.com/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Project Roadmap

Plans for future development, testing, and features:

<!-- - [ ] [Add Server-Side Rendering with Next.js](https://github.com/marshall-strong/react-photo-search/issues/65)
- [ ] [Add Mobile Responsiveness](https://github.com/marshall-strong/react-photo-search/issues/66)
- [ ] [Add more Unit Testing with Jest](https://github.com/marshall-strong/react-photo-search/issues/67)
- [ ] [Add End-to-End Testing with Playwright](https://github.com/marshall-strong/react-photo-search/issues/68) -->

See the [open issues](https://github.com/marshall-strong/yenius/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue.

If you found this project helpful, don't forget to give it a star!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Want to get in touch? Email me at <marshallstrong123@gmail.com> or reach out on [LinkedIn][linkedin-url].

Interesting in checking out some of the other projects I've worked on?

Visit [marshallstrong.com](https://marshallstrong.com/) for a full list, as well as my resume and work experience.

Thanks for reading!!!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [pre-commit](https://pre-commit.com/)
  - runs Git hook scripts before each commit and prompts the user to fix any issues before the commit can be saved
- [Prettier](https://prettier.io/)
  - Automatically formats code and enforces style conventions
- [Stylelint](https://stylelint.io/)
  - Identifies errors and enforces conventions in a project's stylesheets
- [Shields.io](https://shields.io/)
  - Concise, consistent, and legible badges in SVG and raster format

Resources and How-Tos

- [How to Securely Access Secret API keys using Netlify Functions in a React App](https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/)
- [Netlify Blog: How to deploy React Apps in less than 30 Seconds](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/)
- [Cool grayscale hover effect](https://codepen.io/AnthonyMoss/pen/RwwyQQ)
- [Emoji Unicode Reference](https://www.w3schools.com/charsets/ref_emoji.asp)
- [the position property](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_position2)
- ["Cool and Fresh" color palette](https://visme.co/blog/website-color-schemes/#attachment_13239)
- [CSS Pulse Effect](https://www.florin-pop.com/blog/2019/03/css-pulse-effect/)
- [Adaptive Photo Layout with Flexbox](https://css-tricks.com/adaptive-photo-layout-with-flexbox/)
- [Boxy SVG: A free, browser-based tool for editing SVG elements](https://boxy-svg.com/)
- [The Difference Between ALT text and Title text](https://blog.spotibo.com/difference-between-alt-text-and-title-text/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- END OF README -->

<!-- MARKDOWN REFERENCE STYLE IMAGE AND URL LINKS -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- PROJECT SHIELDS -->

[contributors-shield]: https://img.shields.io/github/contributors/marshall-strong/yenius.svg?style=for-the-badge
[contributors-url]: https://github.com/marshall-strong/yenius/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/marshall-strong/yenius.svg?style=for-the-badge
[forks-url]: https://github.com/marshall-strong/yenius/network/members
[stars-shield]: https://img.shields.io/github/stars/marshall-strong/yenius.svg?style=for-the-badge
[stars-url]: https://github.com/marshall-strong/yenius/stargazers
[issues-shield]: https://img.shields.io/github/issues/marshall-strong/yenius.svg?style=for-the-badge
[issues-url]: https://github.com/marshall-strong/yenius/issues
[license-shield]: https://img.shields.io/github/license/marshall-strong/yenius.svg?style=for-the-badge
[license-url]: https://github.com/marshall-strong/yenius/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/marshall-strong

<!-- PROJECT TITLE & LOGO -->
<!-- TABLE OF CONTENTS -->
<!-- ABOUT THE PROJECT -->

[project-screenshot]: ./assets/uncropped-yenius-screenshot.png
[project-production-url]: http://yenius.herokuapp.com/

<!-- Built With -->

[amazonaws-shield]: https://img.shields.io/badge/Amazon%20AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white
[amazonaws-url]: https://aws.amazon.com/
[amazons3-shield]: https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white
[amazons3-url]: https://aws.amazon.com/s3/
[cra-shield]: https://img.shields.io/badge/Create%20React%20App-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=white
[cra-url]: https://create-react-app.dev/
[heroku-shield]: https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white
[heroku-url]: https://www.heroku.com/
[rubyonrails-shield]: https://img.shields.io/badge/Ruby%20on%20Rails-CC0000?style=for-the-badge&logo=rubyonrails&logoColor=white
[rubyonrails-url]: https://rubyonrails.org/
[microsoftbing-shield]: https://img.shields.io/badge/Bing%20News%20Search%20API-258FFA?style=for-the-badge&logo=microsoftbing&logoColor=white
[microsoftbing-url]: https://www.microsoft.com/en-us/bing/apis/bing-news-search-api/
[postgresql-shield]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[postgresql-url]: https://www.postgresql.org/
[react-shield]: https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black
[react-url]: https://reactjs.org/
[redux-shield]: https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white
[redux-url]: https://redux.js.org/

<!-- GETTING STARTED -->
<!-- USAGE EXAMPLES -->
<!-- ROADMAP -->
<!-- CONTRIBUTING -->
<!-- LICENSE -->
<!-- CONTACT -->
<!-- ACKNOWLEDGMENTS -->
