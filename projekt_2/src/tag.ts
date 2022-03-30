import internal from "stream";
import fs from 'fs';
import { json } from "stream/consumers";


export class Tag {
  id: number;
  name: string;
  constructor(name: string) {
    this.name = name.toString();
    this.id = Date.now();
    console.log("Tag created");
  } 
}
