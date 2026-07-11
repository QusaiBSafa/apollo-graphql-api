# Infrastructure Overview
This project uses Apollo Server to create a GraphQL API. The server is built using Node.js and Express.

## Data Models
- **Book**: Represents a book with the following fields:
  - `id`: String
  - `title`: String
  - `author`: String

## API Design
- **Queries**:
  - `books`: Returns a list of all books.
- **Mutations**:
  - `addBook`: Adds a new book to the list.

## Key Decisions
- Using in-memory storage for simplicity. In a real application, this would be replaced with a database.