const express = require('express')
const Book = require('./model')
const router = express.Router()


router.get("/all", async (req, res) => {
    const books = await Book.find()
    res.send({books})
})

router.post("/new", async (req, res) => {
    try {
        const book = new Book ({
            _id: req.body._id,
            name: req.body.name,
            author: req.body.author,
            coverimg:req.body.coverimg,
            desc: req.body.desc
        })

        await book.save()
        res.send(book)
        console.log("New entry posted")
    }
    catch {
        res.status(404)
        res.send({ error: "Book already exists in catalogue!"})
    }
})

router.delete("/delete", async (req, res) => {
    try {
        console.log(req.body._id)
        await Book.deleteOne({ _id: req.body._id })        
        res.send("deleted")
        console.log("One entry deleted")
        res.status(204).send()
    } 
    catch {
        res.status(404)
        console.log("Could not delete")
	}
})

module.exports = router;