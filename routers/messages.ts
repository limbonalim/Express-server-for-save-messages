import {Router} from "express";
import {createMessage} from "../FileBD";
import {Message} from "../types";

const messagesRouter = Router();

messagesRouter.get('/', (req, res) => {
  res.send('Get all messages');
});

messagesRouter.post('/', async (req, res) => {
  const answer: Message = await createMessage(req.body.message);
  res.send(answer);
});

export default messagesRouter;