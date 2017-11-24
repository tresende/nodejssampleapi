var app = require('./config/express')();
var express = require('express');

app.use(express.static(__dirname + '/public'));
app.listen(3000, function() {
    console.log("servidor rodando");
})
