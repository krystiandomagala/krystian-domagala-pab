import internal from "stream";

export class Tag{
    id: number;
    name: string;
    constructor(name: string)
    {
        this.name = name.toString();
        this.id = Date.now();
        console.log("Tag created");
    }
}