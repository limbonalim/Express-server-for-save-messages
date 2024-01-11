import {promises as fs} from "fs";

const path = './messages/'

export const createMessage = async (message: string) => {
  const dateTime = new Date().toISOString();
  await fs.writeFile(`${path}${dateTime}.txt`, message);
  return {
    message: message,
    datetime: dateTime
  }
};