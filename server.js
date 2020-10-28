const express = require('express')
const mongoose = require('mongoose')
const routes = require('./server/routes')
const cors = require('cors')

mongoose
	.connect(
		"mongodb://localhost:27017/LibraryProject",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	)
	.then(() => {
		const app = express()

		app.use(express.json())
		app.use(cors())
		
		app.use("/api", routes)

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})