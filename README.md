# MSW Path Match example

Currently, MSW patch matching [as given in the documentation](https://mswjs.io/docs/basics/path-matching#path) doesn't work when using with Axios. This repository is a working example illustrating the behaviour. Between the 2 API calls to the [Star Wars API](https://swapi.dev/), only one of them (which has been explicitly mocked with the complete URL) is mocked by MSW.
