const express = require('express')
const app = express()
const port = 3000
app.get('/prueba', (req, res) => {
    res.send('Compa que te parece esta morra')

})
app.listen(port, () => {
    console.log('La aplicacion se esta ejecutando por el puerto ' +port)
})