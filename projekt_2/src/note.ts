import internal from "stream";

export class Note{
    title: string;
    content: string;
    createDate: string;
    tags: string[];
    id: number;
    constructor(title: string, content: string)
    {
        this.title = title;
        this.content = content;
        this.createDate = JSON.parse(JSON.stringify(new Date()));
        this.tags = ["not implemented"];
        this.id = Date.now();
        console.log("Note created");
    }
  }