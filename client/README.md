# Yenius v2

Yenius v2 has separate subdirectories for the frontend and backend.
The frontend is a React/Redux app that uses the Redux Hooks API. It was created using [cra-template-redux](https://github.com/reduxjs/cra-template-redux), the official Redux+JS template for [Create React App](https://github.com/facebook/create-react-app).
The backend is an API-only Ruby on Rails app, and uses a postgreSQL database.

# Startup

- run `nf start`

# Issues

- Can't use JSX currently... https://reactjs.org/docs/add-react-to-a-website.html#run-jsx-preprocessor

# Resources Used

- [Guide on creating an API-only Rails project](https://medium.com/@oliver.seq/creating-a-rest-api-with-rails-2a07f548e5dc)

# Documentation

- Configure yenius-client server to proxy any unknown API requests to the yenius-api server.

  node foreman starts yenius-client and yenius-api from Procfile
  yenius-client: webpack-dev-server returns index.html with React app, uses react-router-dom to update Components in response to changes in frontend routes
  yenius-api: rails server returns JSON data in response to RESTful API calls (Procfile specifies the port to use)

  Users access the application via yenius-client
  Adding \"proxy\": \"http://localhost:3001/\" in package.json tells webpack-dev-server to proxy any unknown requests to yenius-api at localhost:3001.

  This setup allows the application to avoid CORS issues like \"No 'Access-Control-Allow-Origin' header is present on the requested resource.\"

  https://create-react-app.dev/docs/proxying-api-requests-in-development/

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
