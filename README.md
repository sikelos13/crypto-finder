## Crypto-finder

Cryptocurrency finder and stats using CRA and Coingecko API.
## Build With

* [React](https://reactjs.org/)
* [Material UI](https://material-ui.com/)
* [Create-react-app with Typescript template](https://create-react-app.dev/docs/adding-typescript/)
* [React hot toast](https://github.com/timolins/react-hot-toast)
* [Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
* [Axios](https://github.com/axios/axios)
* [Date-fns](https://date-fns.org/)
* [Highcharts-react](https://github.com/highcharts/highcharts-react)

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


