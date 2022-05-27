# :rocket: Projekt semestralny Restauracja

Projekt REST API do zarządzania restauracją. Do projektu wykorzystałem *Express.js, MongoDB, TypeScript, VanillaJS*. API działa na adresie http://localhost:3000/

## :white_check_mark: Funkcjonalności

### Restauracja

- Dodanie restauracji do bazy danych `POST http://localhost:3000/restaurant` (możliwe dodanie jednej restauracji, dodanie nowej musi być poprzedzone usunięciem poprzedniej).
<a/>

**Przykładowe dane:**
```json
    {
        "nazwa": "Restaduracja-update",
        "adres": "ul. Basztowa 10, Kraków",
        "telefon": "233456789",
        "NIP": "3223456789",
        "email": "restauracja@gmail.com",
        "www": "restauracja.pl"
    }
 ```
 
 <br/>
 
 - Zwrócenie restauracji z bazy danych `GET http://localhost:3000/restaurant`
 - Edycja danych restauracji `PUT http://localhost:3000/restaurant/:id`.
 - Usunięcie restauracji `DELETE http://localhost:3000/restaurant/:id`. 
 
 W miejsce `:id` wstawiamy identyfikator restauracji zwrócony z `GET`.
 
 <br/>
 
 ### Stoliki

- Dodanie stolika do bazy danych `POST http://localhost:3000/tables`.
<a/>

**Przykładowe dane:**
```json
    {
        "nazwa": "Stolik 1",
        "iloscOsob": 3,
        "status": "wolny"
    }
 ```
 
 **Pole status jest typu wyliczeniowego i wprowadzenie innych wartości niż zdefiniowane prowadzi do błędu.**
 ```js
 status: {
    type: String,
    enum: ['wolny','niedostepny','zajety'],
    default: 'wolny'
  }
 ```
 
 
 <br/>
 
 - Zwrócenie listy stolików z bazy danych `GET http://localhost:3000/tables`.
 - Zwrócenie konkretnego stolika z bazy danych `GET http://localhost:3000/tables/:id`.
 - Edycja danych stolika `PUT http://localhost:3000/tables/:id`.
 - Usunięcie konkretnego stolika `DELETE http://localhost:3000/tables/:id`. 
 - Usunięcie wszystkich stolików z bazy danych `DELETE http://localhost:3000/tables`.

 W miejsce `:id` wstawiamy identyfikator stolika zwrócony z `GET`.
 
 <br/>
 
  ### Produkty

- Dodanie produktu do bazy danych `POST http://localhost:3000/products`.
- Zgłoszenie zapotrzebowania na produkt do bazy danych `POST http://localhost:3000/products/to-buy`.
<a/>

**Przykładowe dane:**
```json
    {
        "nazwa": "Chleb",
        "cena": 4,
        "ilosc": 12,
        "jednostkaMiary": "szt"
    }
 ```
 
 **Pole status jest typu wyliczeniowego i wprowadzenie innych wartości niż zdefiniowane prowadzi do błędu.**
 ```js
  jednostkaMiary: {
    type: String,
    enum: ['g','kg','ml','l','szt'],
    default: "kg"
  }
 ```
 
 
 <br/>
 
 - Zwrócenie listy produktów z bazy danych `GET http://localhost:3000/products`.
 - Zwrócenie listy produktów z paginacją `GET http://localhost:3000/products?page=1&limit=2`
 - Zwrócenie listy produktów z sortowaniem `GET http://localhost:3000/products?sort=1` sortowanie rosnąco: `sort=1`, malejąco: `sort=-1`
 - Zwrócenie konkretnego produktu z bazy danych `GET http://localhost:3000/products/:id`.
 - Edycja danych produktu  `PUT http://localhost:3000/products/:id`.
 - Usunięcie konkretnego produktu `DELETE http://localhost:3000/products/:id`. 
 - Usunięcie wszystkich produktów z bazy danych `DELETE http://localhost:3000/products`.

 W miejsce `:id` wstawiamy identyfikator produktu zwrócony z `GET`.
 
 <br/>

  ### Zamówienia

- Dodanie zamówienia do bazy danych `POST http://localhost:3000/orders`.
<a/>

**Przykładowe dane:** (w pola `pracownik`, `pozycje`, `stolik` podaj `id` istniejących dokumentów z bazy)
```json
    {
        "pracownik": "628f8982495ce298d6883b0e",
        "pozycje": ["628f87872de61a31355eaa8a","628f881c2de61a31355eaa92"],
        "statusZamowienia": "zlozone",
        "stolik": "628e4a7d58f6cab03380407f",
        "kwota": 140
    }
 ```
 
 **Pole statusZamowienia jest typu wyliczeniowego i wprowadzenie innych wartości niż zdefiniowane prowadzi do błędu.**
 ```js
  statusZamowienia: {
    type: String,
    enum: ["zlozone","wRealizacji","zrealizowane","rachunek"],
    required: true
  }
 ```
 
 <br/>
 
 - Zwrócenie listy zamówień z bazy danych `GET http://localhost:3000/orders`.
 - Zwrócenie konkretnego zamówienia z bazy danych `GET http://localhost:3000/orders/:id` w miejsce `:id` wstawiamy identyfikator zamówienia zwrócony z `GET`.
 - Zwrócenie raportu zamówień per stolik `GET http://localhost:3000/orders/table-raport/:id` w miejsce `:id` wstawiamy identyfikator stolika zwrócony z `GET`.
 - Zwrócenie raportu zamówień per kelner `GET http://localhost:3000/orders/waiter-raport/:id` w miejsce `:id` wstawiamy identyfikator kelnera zwrócony z `GET`.
 - Edycja danych zamówienia  `PUT http://localhost:3000/orders/:id` w miejsce `:id` wstawiamy identyfikator zamówienia zwrócony z `GET`.
 - Usunięcie konkretnego zamówienia `DELETE http://localhost:3000/orders/:id` w miejsce `:id` wstawiamy identyfikator zamówienia zwrócony z `GET`. 
 - Usunięcie wszystkich zamówień z bazy danych `DELETE http://localhost:3000/orders`.

<br/>

  ### Pracownicy

- Dodanie pracownika do bazy danych `POST http://localhost:3000/employees`.
<a/>

**Przykładowe dane:** 
```json
    {
        "imie": "Jan",
        "nazwisko": "Matejko",
        "stanowisko": "kelner"
    }
 ```
 
 <br/>
 
 - Zwrócenie listy pracowników z bazy danych `GET http://localhost:3000/employees`.
 - Zwrócenie konkretnego pracownika z bazy danych `GET http://localhost:3000/employees/:id`.
 - Edycja danych pracownika  `PUT http://localhost:3000/employees/:id`.
 - Usunięcie konkretnego pracownika `DELETE http://localhost:3000/employees/:id`. 
 - Usunięcie wszystkich pracowników z bazy danych `DELETE http://localhost:3000/employees`.

 W miejsce `:id` wstawiamy identyfikator pracownika zwrócony z `GET`.

<br/>

  ### Dania

- Dodanie dania do bazy danych `POST http://localhost:3000/dishes`.
<a/>

**Przykładowe dane:** 
```json
    {
        "nazwa": "Pizza margherita",
        "cena": 23,
        "kategoria": "pizza"
    }
 ```
 
 <br/>
 
 - Zwrócenie listy dań z bazy danych `GET http://localhost:3000/dishes`.
 - Zwrócenie konkretnego dania z bazy danych `GET http://localhost:3000/dishes/:id`.
 - Edycja danych dania  `PUT http://localhost:3000/dishes/:id`.
 - Usunięcie konkretnego dania `DELETE http://localhost:3000/dishes/:id`. 
 - Usunięcie wszystkich dań z bazy danych `DELETE http://localhost:3000/dishes`.

 W miejsce `:id` wstawiamy identyfikator dania zwrócony z `GET`.

<br/>

  ### Rezerwacje

- Dodanie rezerwacji do bazy danych `POST http://localhost:3000/bookings`.
<a/>

**Przykładowe dane:** 
```json
    {
        "stolik": "628e499858f6cab03380407d",
        "start": "2012-04-23T00:00:00.000Z",
        "koniec": "2012-04-23T00:00:00.000Z",
        "klient": "Jan Kowalski"
    }
 ```
 
 <br/>
 
 - Zwrócenie listy rezerwacji z bazy danych `GET http://localhost:3000/bookings`.
 - Zwrócenie konkretnej rezerwacji z bazy danych `GET http://localhost:3000/bookings/:id`.
 - Wyszukanie stolików wolnych danego dnia `POST http://localhost:3000/bookings/free`.
 - Edycja danych rezerwacji  `PUT http://localhost:3000/bookings/:id`.
 - Usunięcie konkretnej rezerwacji `DELETE http://localhost:3000/bookings/:id`. 
 - Usunięcie wszystkich rezerwacji z bazy danych `DELETE http://localhost:3000/bookings`.

 W miejsce `:id` wstawiamy identyfikator rezerwacji zwrócony z `GET`.



