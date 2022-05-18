export class Danie
{
    nazwa: string;
    cena: number;
    kateogria: string;
    constructor(nazwa: string, cena: number, kategoria: string = "")
    {
        this.nazwa = nazwa;
        this.cena = cena;
        this.kateogria = kategoria;
    }
}