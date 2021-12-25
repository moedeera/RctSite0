const express = require('express');

const app = express();
const path = require('path');
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true})); 



 // Use this after the variable declaration

// app.get('/', (req, res) => {


// res.send('its working')

// })



app.use('/api/users', require('./routes/api/users'))






if (process.env.NODE_ENV === 'production'){

    app.use(express.static('client/build'))
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    
    })
}



const PORT = process.env.PORT || 9700;


app.listen(PORT, console.log('its running'));
