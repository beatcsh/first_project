import express from 'express'

const app = express()
app.use(express.json())


app.get('/sum',(req, res) => {
    const num1 =  req.body.num1
    const num2 = req.body.num2
    const tot = num1 + num2
    return res.status(200).json({tot})
})

app.get('/res',(req, res) => {
    const num1 =  req.body.num1
    const num2 = req.body.num2
    const tot = num1 - num2
    return res.status(200).json({tot})
})

app.get('/prod',(req, res) => {
    const num1 =  req.body.num1
    const num2 = req.body.num2
    const tot = num1 * num2
    return res.status(200).json({tot})
})

app.get('/', (req,res) => {
    res.end('jala?')
})

app.listen(4000, () => {
    console.log('esta todo bien con esto')
})