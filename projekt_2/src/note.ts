import internal from "stream";
import { Tag } from "./tag";

export class Note{
    title: string;
    content: string;
    createDate: string;
    tags: Tag[];
    id: number;
    constructor(title: string, content: string, tags: Tag[])
    {
        this.title = title;
        this.content = content;
        this.createDate = JSON.parse(JSON.stringify(new Date()));
        this.tags = tags;
        this.id = Date.now();
        console.log("Note created");
    }
  }

