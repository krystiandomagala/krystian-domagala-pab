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
 - Usunięcie danych restauracji `DELETE http://localhost:3000/restaurant/:id`. 
 
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
        "status": "wolny",
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
 - Usunięcie danych stolika `DELETE http://localhost:3000/tables/:id`. 
 - Usunięcie wszystkich stolików z bazy danych `DELETE http://localhost:3000/tables`.

 W miejsce `:id` wstawiamy identyfikator restauracji zwrócony z `GET`.
 
 <br/>
 
  ### Produkty

- Dodanie produktu do bazy danych `POST http://localhost:3000/products`.
<a/>

**Przykładowe dane:**
```json
    {
        "_id": "628e499858f6cab03380407d",
        "nazwa": "Stolik 1",
        "iloscOsob": 3,
        "status": "wolny",
        "__v": 0
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
 - Usunięcie danych stolika `DELETE http://localhost:3000/tables/:id`. 
 - Usunięcie wszystkich stolików z bazy danych `DELETE http://localhost:3000/tables`.

 W miejsce `:id` wstawiamy identyfikator restauracji zwrócony z `GET`.

