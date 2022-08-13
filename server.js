const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const PORT = process.env.PORT || 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
    },
    'chance the rapper': {
        'age': 29,
        'brithName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'brithLocation': 'unknown'
    }
    
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => { // :name - query parameters
    const rapperName = req.params.name.toLowerCase() // whatever we put in the url (name is :name)
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    } else {
        res.json(rappers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on post ${PORT}!`)
})