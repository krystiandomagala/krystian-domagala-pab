import { Pracownik } from "./Pracownik";
import { Danie } from "./Danie";
import { Stolik } from "./Stolik";
class Zamowienie 
{
    pracownik: Pracownik[];
    pozycje: Danie[];
    status: string;
    stolik: Stolik[];
    kwota: number;
    constructor(pracownik: Pracownik[], pozycje: Danie[], status: string = "", stolik: Stolik[], kwota: number = 0)
    {
        this.pracownik = pracownik;
        this.pozycje = pozycje;
        this.status = status;
        this.stolik = stolik;
        this.kwota = kwota;
    }
}