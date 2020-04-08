# express-graphql-react-boilerplate

another boilerplate. mostly for personal use. express, graphql, react, sequelize, and maybe oath.

### Requirements

- a decent computer....
- yarn
- postgres

### Setup (TODO NEED TO WRITE THIS)

```
git clone ...
cd ...
yarn install
```

### Install

```
yarn install
```

### Start

start server

```
yarn start:server
```

start client

```
yarn start:client
```

##### TODO:

I didn't want to start a board for this just cause of lazyness.

- [x] add sequelize
- [ ] add google oath
  - [ ] add modal for users
  - [x] client add google login
  - [x] add routes for login in client (react-router)
  - [x] server add mutation for google token
- [x] refactor index.js for server / seperate files
- [ ] add 404 route to client
- [ ] heroku setup
  - [ ] add start script for heroku
  - [ ] add build script for react on root package.json
  - [ ] setup index in server to serve react build
- [ ] add instruction for cloning
- [ ] client : might rename 'ApolloClient' so we can keep gql queries and mutates

### getting google oath api

go to (google console)[https://console.developers.google.com]
