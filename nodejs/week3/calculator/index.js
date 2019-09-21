const express = require('express');
const app = express();


app.get('/calculator/multiply', (req, res) => {
    const numbers = [];
    for (const key in req.query) {
        const num = Number(req.query[key]);
        numbers.push(num);
     };
     const multiplication = numbers.reduce((multiply, num) => num * multiply);
     res.send(multiplication.toString());
})

app.get('/calculator/add', (req, res) => {
    const numbers = [];
    for (const key in req.query) {
        const num = Number(req.query[key]);
        numbers.push(num);
     };
     const addition = numbers.reduce((add, num) => add + num);
     res.send(addition.toString());
})

app.get('/calculator/div', (req, res) => {
    const numbers = [];
    for (const key in req.query) {
        const num = Number(req.query[key]);
        numbers.push(num);
     };
     const division = numbers.reduce((div, num) => div/num ,1);
     res.send(division.toString());
})

app.get('/calculator/sub', (req, res) => {
    const numbers = [];
    for (const key in req.query) {
        const num = Number(req.query[key]);
        numbers.push(num);
     };
     const Subtraction = numbers.reduce((sub, num) => sub-num);
     res.send(Subtraction.toString());
})


app.listen(3000, () => {
    console.log('Server at localhost 3000');
});