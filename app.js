const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
const app = express();
const router = express.Router();
const port = 3005;
require("./database/connection");

const auth = require("./middleware/auth");
const { UserController, ProductController, CountyController, CityController, StreetController, CategoryController, LoginController, RegisterController} = require("./controllers/Main");

app.use(cors());
app.use(bodyParser.json());

app.engine('.hbs', handlebars({defaultLayout: 'main',extname: '.hbs'}));
app.set('view engine', '.hbs');


app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/login', (req,res) => {
  res.render('login');
});

app.get('/register', (req,res) => {
  res.render('register');
});

router.post('/register', RegisterController.saveUser);

router.post('/login', LoginController.checkLogin);

router.post('/profile',auth, UserController.getUserInfos);

router.post('/profile-update',auth, UserController.updateUserInfos);

router.post('/product',auth, ProductController.saveProduct);

router.post('/product-update',auth, ProductController.updateProduct);

router.get('/categories', CategoryController.getCategory);

router.get('/counties', CountyController.getCounty);

router.get('/cities', CityController.getCities);

router.get('/streets', StreetController.getStreets);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})