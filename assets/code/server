import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema.js';

const app = express();

app.use('/graphql', graphqlHTTP(req => ({
  schema,
  graphiql: true,
})));

app.listen(3000, () => {
  console.log('Listening at port', 3000);
});
