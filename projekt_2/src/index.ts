import express from 'express'
import {Request, Response} from 'express'
import { nextTick } from 'process'
import { json } from 'stream/consumers'
import { Login } from './login'
import {Note} from './note'
import {Tag} from './tag'

require('dotenv').config();

const app = express()

const notes: Array<Note> = new Array();

app.use(express.json())

app.get('/notes', function (req: Request, res: Response) {
  let note: Note =  new Note();
  //res.status(200).send(note.ReadAllFileToJSON())
  res.status(200).send(note.GetAllNote())

})

app.get('/note/:id', function (req: Request, res: Response) {
  let id  = req.params.id;
  let note:Note=new Note()
  if(note.IsInDatabase(+id) == false)
  {
    res.status(404).send("Note doesn`t exist!")
  }
  else
  {
    res.status(200).send(note.GetNote(+id));
  }
})

app.put('/note/:id', function (req: Request, res: Response) {
  let id  = req.params.id;
  let note = notes.filter(x =>x.id == +id)
  if(notes.findIndex(x =>x.id == +id) == -1)
  {
    res.status(404).send("Note doesn`t exist!")
  }
  else
  {
    if(req.body.title){
      notes[notes.findIndex(x =>x.id == +id)].title = req.body.title
    }
    if(req.body.content){
      notes[notes.findIndex(x =>x.id == +id)].content = req.body.content
    }
    res.status(204).send("Note updated.")
  }
})

app.delete('/note/:id', function (req: Request, res: Response) {
  let id  = req.params.id;
  
  let note:Note=new Note()
  if(note.IsInDatabase(+id) == false)
  {
    res.status(404).send("Wrong Id!")
  }
  else
  {
    note.DeleteNote(+id)
    res.status(200).send("Note deleted!");
  }
})

app.post('/note', function (req: Request, res: Response) {
  
  if(req.body.title === "" || req.body.content === "")
  {
    res.status(400).send("Title and Content cannot be empty!")
  }
  else if(!req.body.title || !req.body.content)
  {
    res.status(400).send("Wrong arguments!")
  }
  else
  {
    console.log(req.body) 

    let tagsFromPost: Array<Tag> = new Array();
    tagsFromPost = req.body.tags
    let tagIdsToNote: Array<number> = new Array()
    tagsFromPost.forEach(element => {
      let tag = new Tag(element.name)
      //AddTag zwraca nam id podanego taga
      tagIdsToNote.push(tag.AddTag(tag))
    });
    
    let note: Note = new Note(req.body.title, req.body.content, tagIdsToNote);
    note.AddNote(note)
    console.log("x")
    res.status(201).send(note.id.toString());
  }
  
})

/* Login ------------------------------------------*/


const jwt = require('jsonwebtoken');

app.use(express.json());

app.post('/login', authenticateToken,function (req: Request, res: Response) {
  //let user: Login = new Login(req.body.login, req.body.password)
  
  const user = { login: req.body.login, password: req.body.password}

  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

  //const payload = jwt.verify(token, secret)
})

app.listen(3000)


