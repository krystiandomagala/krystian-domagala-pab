import { Stolik } from "./Stolik";

export class Rezerwacja
{
    stolik: Stolik[];
    start: Date;
    koniec: Date;
    klient: string;
    constructor(stolik: Stolik[], start: Date, koniec: Date, klient: string = "")
    {
        this.stolik = stolik;
        this.start = start;
        this.koniec = koniec;
        this.klient = klient;
    }
}