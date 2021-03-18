express() // or Polka, or a similar framework
	.use(
		compression({ threshold: 0 }),
		serve('static'),
		sapper.middleware()
	)
	.listen(process.env.PORT);


	const { expressServer } = require("./__sapper__/build/server/server");

	exports.ssr = functions.https.onRequest(expressServer);