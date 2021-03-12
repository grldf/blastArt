express() // or Polka, or a similar framework
	.use(
		'/my-base-path', // <!-- add this line
		compression({ threshold: 0 }),
		serve('static'),
		sapper.middleware()
	)
	.listen(process.env.PORT);