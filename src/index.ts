import { ApolloServer, gql } from 'apollo-server';

// Sample data
let books = [
  { id: '1', title: '1984', author: 'George Orwell' },
  { id: '2', title: 'Brave New World', author: 'Aldous Huxley' }
];

// GraphQL schema
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }
  type Query {
    books: [Book]
  }
  type Mutation {
    addBook(title: String!, author: String!): Book
  }
`;

// Resolvers
const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (_: any, { title, author }: { title: string; author: string }) => {
      const newBook = { id: String(books.length + 1), title, author };
      books.push(newBook);
      return newBook;
    },
  },
};

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});