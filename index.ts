import express from 'express';
import messagesRouter from './routers/messages';

const app = express();
const port = 8000;
const path = 'http://localhost:8000/messages';

app.use(express.json());
app.use('/messages', messagesRouter);

app.get('/', (req, res) => {
	res.send(`<div>You can send a post request your message to <b>${path}</b>, Or you can send a get request</div>`);
});

app.listen(port, () => {
	console.log(`Server started on ${port} port!`);
});