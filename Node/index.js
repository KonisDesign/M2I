import express from 'express';
import ip from 'ip';
import data from './data.json' assert { type: 'json' };
import {success} from './helper.js';

const app = express();
const ipAddress = ip.address();
const port = 8888;

app.use(express.json());

app.get('/', (req, res) => {
    res.end("<h1>Hello World</h1>");
});

app.get('/data', (req, res) => {
    res.json(data);
});

app.get('/data/:id', (req, res) => {
    const id = Number(req.params.id);
    const cours = data[id-1];
    let message = cours ? "Un cours à été trouvé" : "Ce cours n'éxiste pas";
    res.json(success(message, cours));
});

app.post('/add', (req, res) => {
    let category = req.body.category;
    let name = req.body.name;
    let difficulte = req.body.difficulte;
    let price = req.body.price;
    let id = req.body.id;
    let created = req.body.created;
    data.push({"category" : category, "name" : name, "difficulte" : difficulte, "price" : price, "id" : id, "created" : created});
    res.send(`<h1>Le cours ${name} à été ajouté</h1>`);
});

app.put('/update/:id', (req, res) => {
    const id = Number(req.params.id);
    let message = "";
    let category = req.body.category;
    let name = req.body.name;
    let difficulte = req.body.difficulte;
    let price = req.body.price;
    let created = req.body.created;

    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            message = `${data[i].name} à été mis à jour`;
            data.splice(i, 1, {"category" : category, "name" : name, "difficulte" : difficulte, "price" : price, "created" : created});
            break;
        }
    }
    res.send(message);
});

app.delete('/delete/:id', (req, res) => {
    const id = Number(req.params.id);
    let message = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            message = `J'ai supprimé l'objet: ${data[i].name}`;
            data.splice(i, 1);
            break;
        }
    }
    res.send(message);
    console.log(data);
});

app.use((req, res, next) => {
    res.status(404).send('Sorry, page not found.');
  });

app.listen(port, ()=>console.log("visit: http://" + ipAddress + ":" + port));