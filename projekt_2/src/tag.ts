import internal from "stream";
import fs, { write } from 'fs';
import { json } from "stream/consumers";
import { runInThisContext } from "vm";
import { NoteViewModel } from "./noteViewModel";

export class Tag{
    id: number;
    name: string;

    constructor(name: string ="", id: number = 0)
    {
        this.name = name.toLowerCase();
        this.id = id;
        this.id = Date.now()
    }

    private CheckIfExists(tagName: string):boolean {
        let tags = this.ReadAllFileToJSON()
        const elemFound = tags.some(el => el.name === tagName);
        return elemFound
    }

    public AddTag(tag:Tag):number
    {
        if(this.CheckIfExists(tag.name) == false)
        {
            let tags = this.ReadAllFileToJSON()
            tags.push(tag)
            fs.writeFileSync('Tags.json', JSON.stringify(tags))
        }
        return this.FindTagId(tag.name)
        
    }
    public findTagName(tagId: number)
    {
        let tags = this.ReadAllFileToJSON()
        const TagsElementId = tags.findIndex(el => el.id === tagId);
        return tags[TagsElementId].name
    }

    private FindTagId(tagName: string)
    {
        let tags = this.ReadAllFileToJSON()
        const TagsElementId = tags.findIndex(el => el.name === tagName);
        return tags[TagsElementId].id
    }
    private ReadAllFileToJSON()
    {
        let rawdata = fs.readFileSync('Tags.json')
        let tags: Tag[] = JSON.parse(rawdata.toString())
        return tags;
    }

    public GetAllTag()
    {
        let tags = this.ReadAllFileToJSON()
        return tags;
    }

    public IsInDatabase(id:number):boolean
    {
        let tags = this.ReadAllFileToJSON()
        const elemFound = tags.some(el => el.id === id);
        return elemFound
    }

    public GetTag(id:number)
    {
        let tags = this.ReadAllFileToJSON()
        const TagsElementId = tags.findIndex(el => el.id === id);
        return  TagsElementId;
    }
  }