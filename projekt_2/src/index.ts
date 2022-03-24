import express from 'express'
import {Request, Response} from 'express'
import { json } from 'stream/consumers'
import {Note} from './note'
import {Tag} from './tag'

const app = express()

const notes: Array<Note> = new Array();

app.use(express.json())

app.get('/notes', function (req: Request, res: Response) {
  res.send(notes)
})

app.get('/note/:id', function (req: Request, res: Response) {
  let id  = req.params.id;
  let note = notes.filter(x =>x.id == +id)

  if(notes.findIndex(x =>x.id == +id) == -1)
    res.status(404).send("Note doesn`t exist!")
  else
    res.status(200).send(note);
})

app.put('/note/:id', function (req: Request, res: Response) {
  let id  = req.params.id;
  let note = notes.filter(x =>x.id == +id)
  if(notes.findIndex(x =>x.id == +id) == -1)
    res.status(404).send("Note doesn`t exist!")
  else
  {
    if(req.body.title)
      notes[notes.findIndex(x =>x.id == +id)].title = req.body.title
    if(req.body.content)
      notes[notes.findIndex(x =>x.id == +id)].content = req.body.content

      res.status(204).send("Note updated.")
  }
})

app.delete('/note/:id', function (req: Request, res: Response) {
  let id  = req.params.id;
  
  if(notes.findIndex(x =>x.id == +id) == -1)
    res.status(404).send("Wrong Id!")
  else
  {
    notes.splice(notes.findIndex(x =>x.id == +id), 1)
    res.status(204).send("Note deleted.")
  }
})

app.post('/note', function (req: Request, res: Response) {
  
  if(req.body.title === "" || req.body.content === "")
    res.status(400).send("Title and Content can not be empty!")
  else if(!req.body.title || !req.body.content)
    res.status(400).send("Wrong arguments!")
  else
  {
    console.log(req.body) 

    let note: Note = new Note(req.body.title, req.body.content, req.body.tags);
    tags.push(tag);
    notes.push(note);
    res.status(201).send(note.id.toString());
  }
  
})

/*---------------------------------Tagi -----------------------------------*/

const tags: Array<Tag> = new Array();

app.get('/tags', function (req: Request, res: Response){
  res.send(tags)
})

app.get('/tag/:id', function (req: Request, res: Response) {
  let id  = req.params.id;
  let tag = tags.filter(x =>x.id == +id)
  if(tags.findIndex(x =>x.id == +id) == -1)
    res.status(404).send("Tag doesn`t exist!")
  else
    res.status(200).send(tag);
})

app.put('/tag/:id', function (req: Request, res: Response) {
  let id  = req.params.id;
  let tag = tags.filter(x =>x.id == +id)
  if(tags.findIndex(x =>x.id == +id) == -1)
    res.status(404).send("Tag doesn`t exist!")
  else
  {
    if(req.body.name)
      tags[tags.findIndex(x =>x.id == +id)].name = req.body.name

    res.status(204).send("Note updated.")
  }
})

app.delete('/tag/:id', function (req: Request, res: Response) {
  let id  = req.params.id;
  
  if(tags.findIndex(x =>x.id == +id) == -1)
    res.status(404).send("Wrong Id!")
  else
    tags.splice(tags.findIndex(x =>x.id == +id), 1)
    res.status(204).send("Tag deleted.")
})

app.post('/tag', function (req: Request, res: Response) {
  
  if(req.body.name === "")
    res.status(400).send("Tag cannot be empty!")
  else if(!req.body.name)
    res.status(400).send("Wrong arguments!")
  else
  {
    console.log(req.body) 

    let tag: Tag = new Tag(req.body.name.toLowerCase());
    tags.push(tag);
    res.status(201).send(tag.id);
  }
  
})

app.listen(3000)