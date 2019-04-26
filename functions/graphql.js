const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return `Hello from Netlify function. https://bit.ly/2UXh0fD`
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

exports.handler = server.createHandler()
