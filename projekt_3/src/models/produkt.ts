class Produkt
{
    nazwa: string;
    cena: number;
    ilosc: number;
    jednostkaMiary: string;
    constructor(nazwa: string, cena: number, ilosc: number, jednostkaMiary: string)
    {
        this.nazwa = nazwa;
        this.cena = cena;
        this.ilosc = ilosc;
        this.jednostkaMiary = jednostkaMiary;
    }
}