# Netlify Functions + GraphQL

This repo demonstrates how to use functions for a GraphQL API using `apollo-server-lambda`.

## Setup & Deployment

1. Fork this repo

    Fork this repo and clone it down to your local machine

    ```bash
    git clone repoURL
    ```

1. Create this site in Netlify

    Open your terminal and run the following command:

    ```bash
    netlify init
    ```

    Choose "create & configure a new site", then add a site name or hit enter for one to be generated for you.

2. Install our graphQL dependencies

    Change directories into our functions folder and create new package.json

    ```bash
    cd functions && npm init -y
    ```

    Now install the `apollo-server-lambda` npm package

    ```bash
    npm install apollo-server-lambda
    ```

3. In `functions/graphql.js`, require 'apollo-server-lambda'

4. In `functions/graphql.js`, define your graphQL types

5. In `functions/graphql.js`, define your graphQL resolvers

6. In `functions/graphql.js`, create a new `ApolloServer` and pass it your typeDefs and resolves

7. In `functions/graphql.js`, turn your server into a lambda compatible function signature

    ```js
    server.createHandler()
    ```

    Then export the handler

8. Deploy the site

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

    Open the frontend and test your new graphQL endpoint

    ```
    netlify open:site
    ```

## Additional resources

- [The Fullstack Tutorial for GraphQL](https://www.howtographql.com/)
