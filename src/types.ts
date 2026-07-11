export interface Book {
  id: string;
  title: string;
  author: string;
}

export type Query = {
  books: Book[];
};

export type Mutation = {
  addBook: (title: string, author: string) => Book;
};