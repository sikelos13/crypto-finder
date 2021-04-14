## Crypto-finder

Cryptocurrency finder and stats using Webpack, React, TypeScript and Coingecko API.
## Build With

* [React](https://reactjs.org/)
* [Material UI](https://material-ui.com/)
* [React hot toast](https://github.com/timolins/react-hot-toast)
* [Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
* [Axios](https://github.com/axios/axios)
* [Date-fns](https://date-fns.org/)
* [Highcharts-react](https://github.com/highcharts/highcharts-react)
* [Docker](https://www.docker.com/)

### How to run 

```
git clone crypto-finder
cd crypto-finder
Create on the root folder a .env file and put inside our env var for API Endpoint.
```

* **The api endpoint. (REACT_APP_API_ENDPOINT="https://api.coingecko.com/api/v3")**

After the first step continue with our main set up and the installation of our modules.

```
npm install
npm run start
```

## Docker build and run

### Run in development mode

To run the project in webpack dev server via docker run:

```
cd crypto-finder

docker-compose up web
```

 *Development listening at:* **localhost:3000**.

### Run in production mode

To run the current project install the prerequisites inside project's directory.
I have used multi-stage build in Docker, in order to optimize the size of the built image. 
As you will see in the Dockerfile, an initial node-based phase is utilized only for building the static assets, which are then copied over and served from a stripped-down nginx image. 
In order to run the project please run:

```
cd crypto-finder

docker-compose up production
```

 *Production listening at:*  **localhost:8080**.

### Features implemented
* Paginated list of coins and their overviews
* Details view with extended information of the coin
* Line chart with select dropdown for different data sets
* Zoom in line chart for better visibility on big data sets.
* More icons suggestions added as footer in order for the user to not navigate back and forth to change coin.

### Testing build with

* [Jest for React](https://jestjs.io/)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* [Axios mock adapter](https://github.com/ctimmerm/axios-mock-adapter#readme)

### Testing
To run the test type:

```
npm test
```

To run test with coverage run:

```
npm test -- --coverage
```

* **If coverage don't show on the terminal add --watchAll to the command line above**


