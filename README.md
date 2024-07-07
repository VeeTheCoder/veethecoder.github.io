## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `docker build -t vees-portfolio-react-app .`

Builds the docker image from the Dockerfile for the react app

### `docker run -p 3000:3000 vees-portfolio-react-app`

Creates and starts a docker container executing the image that was built and specified

### `docker compose up`

Builds the docker image from the Dockerfile for the react app. Creates and starts a docker container executing the image that was built and specified

