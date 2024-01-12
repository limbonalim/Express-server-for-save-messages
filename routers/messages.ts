import {Router} from "express";
import {createMessage, getMessages} from "../FileBD";
import {Message} from "../types";

const messagesRouter = Router();

messagesRouter.get('/', async (req, res) => {
  const answer: Message[] = await getMessages();
  res.send(answer);
});

messagesRouter.post('/', async (req, res) => {
  const answer: Message = await createMessage(req.body.message);
  res.send(answer);
});

export default messagesRouter;