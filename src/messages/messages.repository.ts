import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  fileName: string = 'messages.json';

  async findOne(id: string) {
    const contants = await readFile(this.fileName, 'utf8');
    const messages = JSON.parse(contants);
    return messages[id];
  }

  async findAll() {
    const contants = await readFile(this.fileName, 'utf8');
    const messages = JSON.parse(contants);
    return messages;
  }

  async create(message: string) {
    const contants = await readFile(this.fileName, 'utf8');
    const messages = JSON.parse(contants);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, message };
    await writeFile(this.fileName, JSON.stringify(messages));
  }
}
