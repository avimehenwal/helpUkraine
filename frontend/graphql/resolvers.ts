import { prisma } from "../common/db";

// data can come from ORM
export const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers: any = {
  Query: {
    books: () => books,
    links: async () => await prisma.link.findMany()
  },
};
