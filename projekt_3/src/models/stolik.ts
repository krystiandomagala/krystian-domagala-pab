export class Stolik
{
    nazwa: string;
    iloscOsob: number;
    status: string;
    constructor(nazwa: string = "", iloscOsob: number = 0, status = "wolny")
    {
        this.nazwa = nazwa;
        this.iloscOsob = iloscOsob;
        this.status = status;
    }
}