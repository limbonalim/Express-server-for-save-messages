import {Router} from "express";

const messagesRouter = Router();

messagesRouter.get('/', (req, res) => {
  res.send('Get all messages');
});

messagesRouter.get('/:id', (req, res) => {
  res.send('Get one message');
});

messagesRouter.post('/', (req, res) => {
  res.send('Create new message');
});

export default messagesRouter;