const express = require('express');
const router = express.Router();

/* cntrolador */
const reqResCntrl = require('../controllers/reqres');

router.post('/registro', reqResCntrl.register);
router.post('/login', reqResCntrl.login);
router.post('/registro-usuario', reqResCntrl.registerUser);
router.put('/editar-usuario/:id', reqResCntrl.updateUser);
router.get('/lista', reqResCntrl.getLista);
router.get('/mi-usuario/:id', reqResCntrl.singleUser);


module.exports = router;