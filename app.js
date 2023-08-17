import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("combined"));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/index', (req, res) => {
    const name = req.body.name; // Get the name from query parameter
    res.send('Name: ' + name); // Send the name in the response
});

app.listen(8081, () => {
    console.log(`Server is running on http://localhost:8081`);
});
