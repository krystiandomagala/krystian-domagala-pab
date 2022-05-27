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
 - Usunięcie danych konkretnego stolika `DELETE http://localhost:3000/tables/:id`. 
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
        "jednostkaMiary": "szt",
    }
 ```
 
 **Pole status jest typu wyliczeniowego i wprowadzenie innych wartości niż zdefiniowane prowadzi do błędu.**
 ```js
  jednostkaMiary: {
    type: String,
    enum: ['g','kg','ml','l','szt'],
    default: "kg",
  }
 ```
 
 
 <br/>
 
 - Zwrócenie listy produktów z bazy danych `GET http://localhost:3000/products`.
 - Zwrócenie listy produktów z paginacją `GET http://localhost:3000/products?page=1&limit=2`
 - Zwrócenie listy produktów z sortowaniem `GET http://localhost:3000/products?sort=1` sortowanie rosnąco: `sort=1`, malejąco: `sort=-1`
 - Zwrócenie konkretnego produktu z bazy danych `GET http://localhost:3000/products/:id`.
 - Edycja danych produktu  `PUT http://localhost:3000/products/:id`.
 - Usunięcie danych konkretnego produktu `DELETE http://localhost:3000/products/:id`. 
 - Usunięcie wszystkich produktów z bazy danych `DELETE http://localhost:3000/products`.

 W miejsce `:id` wstawiamy identyfikator produktu zwrócony z `GET`.
 
 <br/>

  ### Zamówienia

- Dodanie produktu do bazy danych `POST http://localhost:3000/products`.
- Zgłoszenie zapotrzebowania na produkt do bazy danych `POST http://localhost:3000/products/to-buy`.
<a/>

**Przykładowe dane:**
```json
    {
        "nazwa": "Chleb",
        "cena": 4,
        "ilosc": 12,
        "jednostkaMiary": "szt",
    }
 ```
 
 **Pole status jest typu wyliczeniowego i wprowadzenie innych wartości niż zdefiniowane prowadzi do błędu.**
 ```js
  jednostkaMiary: {
    type: String,
    enum: ['g','kg','ml','l','szt'],
    default: "kg",
  }
 ```
 
 
 <br/>
 
 - Zwrócenie listy produktów z bazy danych `GET http://localhost:3000/products`.
 - Zwrócenie listy produktów z paginacją `GET http://localhost:3000/products?page=1&limit=2`
 - Zwrócenie listy produktów z sortowaniem `GET http://localhost:3000/products?sort=1` sortowanie rosnąco: `sort=1`, malejąco: `sort=-1`
 - Zwrócenie konkretnego produktu z bazy danych `GET http://localhost:3000/products/:id`.
 - Edycja danych produktu  `PUT http://localhost:3000/products/:id`.
 - Usunięcie danych konkretnego produktu `DELETE http://localhost:3000/products/:id`. 
 - Usunięcie wszystkich produktów z bazy danych `DELETE http://localhost:3000/products`.

 W miejsce `:id` wstawiamy identyfikator produktu zwrócony z `GET`.

