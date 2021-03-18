import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import express from "express";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
// ...
sapper.middleware({
	session: () => ({
	  // Instantiate client, but can't serialze? No problem, we'll fix this later
	  apollo: new ApolloClient({
		// Make sure queries run once
		ssrMode: true,
		// Collects cache for this session
		cache: new InMemoryCache(),
	  })
	})
  });

  const expressServer = express().use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
);

export { expressServer };
