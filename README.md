# Netlify Functions + GraphQL

This repo demonstrates how to use functions for a GraphQL API using `apollo-server-lambda`.

See the graphQL [function code](./functions/graphql.js)

For more information on functions. Checkout [functions.netlify.com](https://functions.netlify.com/) and the [Netlify functions workshop](https://github.com/DavidWells/netlify-functions-workshop#workshop-lessons)

## Setup & Deployment

### Easy mode:

Simply click the deploy button:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify-labs/functions-and-graphql">
  <img src="https://www.netlify.com/img/deploy/button.svg">
</a>

### Manual mode:

Follow the steps below to set this up via the [`netlify-cli`](https://cli.netlify.com/)

1. **Fork this repo**

    Fork this repo and clone it down to your local machine

    ```bash
    git clone repoURL
    ```

2. **Create this site in Netlify**

    Open your terminal and run the following command:

    ```bash
    netlify init
    ```

    Choose "create & configure a new site", then add a site name or hit enter for one to be generated for you.

3. **Install our graphQL dependencies**

    Change directories into our functions folder and create new package.json

    ```bash
    cd functions && npm init -y
    ```

    Now install the `apollo-server-lambda` npm package

    ```bash
    npm install apollo-server-lambda
    ```

4. **Require the graphQL dependencies in your function**

    In `functions/graphql.js`, require 'apollo-server-lambda'

5. **Define your GraphQL types**

    In `functions/graphql.js`, define your graphQL types

6. **Define your GraphQL resolvers**

    In `functions/graphql.js`, define your graphQL resolvers

7. **Create a new `ApolloServer`**

    In `functions/graphql.js`, create a new `ApolloServer` and pass it your typeDefs and resolves

8. **Export the Lambda compatible ApolloServer**

    In `functions/graphql.js`, turn your server into a lambda compatible function signature

    ```js
    server.createHandler()
    ```

    Then export the handler

9. **Deploy the site**

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

    Open the frontend and test your new graphQL endpoint

    ```
    netlify open:site
    ```

10. **You did it! 🎉**

    You should see a site like [https://graphql-functions.netlify.com/](https://graphql-functions.netlify.com/) where you can explore your graphQL schema.

## Additional resources

- [The Fullstack Tutorial for GraphQL](https://www.howtographql.com/)
