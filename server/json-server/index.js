const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Эндпоинт
server.get('/questions', (req, res) => {
    try {
        const {id} = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(
          __dirname, 'db.json'), 'UTF-8'));
        const { questions = [] } = db;

        const questionFromBd = questions.find(
            (question) => question.id === id

        );

        if (questionFromBd) {
            return res.status(200).json(questionFromBd);
        }

    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.get('/answers', (req, res) => {
    try {
        const {id} = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(
          __dirname, 'db.json'), 'UTF-8'));
        const { answers = [] } = db;

        const answersFromBd = answers.find(
          (answers) => answers.id === id
        );

        if (answersFromBd) {
            return res.status(200).json(answersFromBd);
        }

    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.put('/answers', (req, res) => {
    try {
        const { usersAnswer,  wasDone, id} = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(
          __dirname, 'db.json'), 'UTF-8'));
        const { answers = [] } = db;

        const answersFromBd = answers.find(
          (answers) => answers.id === id);
            answers.usersAnswer = usersAnswer;
            answers.wasDone = wasDone;

        if (answersFromBd) {
            return res.status(200).json(answersFromBd);
        }

    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});
server.use(router);

// запуск сервера
server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
