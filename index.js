//Rutas// Todas las vistas

let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {

    res.render('index.html')

})


module.exports = router;