var express = require('express');
const { handleUserLogin, handleUserRegistration } = require('../controllers/user_ctrl');
const{authMiddleware}=require("../middlewares/auth")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login_register', function(req, res, next) {
  res.render('login_register');
});

router.post("/login",handleUserLogin)


router.post("/register",handleUserRegistration)


router.get('/dashboard', authMiddleware, function (req, res, next) {
  res.render('dashboard');
});


module.exports = router;
 