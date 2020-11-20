const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:  server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    return res.render("index")
})


server.use(function(req, res){
    res.status(404).render("not-found")
})

server.listen(5000, function() {
    console.log("Server is Running")
})