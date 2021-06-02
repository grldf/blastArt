express() // or Polka, or a similar framework
	.use(
		compression({ threshold: 0 }),
		serve('static'),
		sapper.middleware()
	)
	.listen(process.env.PORT);
