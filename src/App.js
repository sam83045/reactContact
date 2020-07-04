import React, { Component } from "react";
import ContactList from "./pages/contact-list";
import { createStore } from "redux";
import { Provider } from "react-redux";
import root from "./reducers";
import { addContact } from "./actions";

import "../node_modules/semantic-ui-css/semantic.css";

let contactData = [
  {
    "id": 1,
    "firstName": "Macy",
    "lastName": "Padilla",
    "contact": "3927070561",
    "email": "mpadilla730@allidapycam.net"
  },
  {
    "id": 2,
    "firstName": "Keith",
    "lastName": "Daniels",
    "contact": "3403479561",
    "email": "kdaniels416@sleinadhtiek.net"
  },
  {
    "id": 3,
    "firstName": "Meaghan",
    "lastName": "Pham",
    "contact": "7426952066",
    "email": "mpham917@mahpnahgaem.biz"
  },
  {
    "id": 4,
    "firstName": "Stephen",
    "lastName": "Jordan",
    "contact": "6946544732",
    "email": "sjordan821@nadrojnehpets.net"
  },
  {
    "id": 5,
    "firstName": "Lewis",
    "lastName": "Hopkins",
    "contact": "3116707132",
    "email": "lhopkins570@snikpohsiwel.net"
  },
  {
    "id": 6,
    "firstName": "Tanisha",
    "lastName": "Leonard",
    "contact": "6457687800",
    "email": "tleonard607@dranoelahsinat.com"
  },
  {
    "id": 7,
    "firstName": "Tyler",
    "lastName": "Gonzalez",
    "contact": "2646003927",
    "email": "tgonzalez982@zelaznogrelyt.org"
  },
  {
    "id": 8,
    "firstName": "Orlando",
    "lastName": "Ortiz",
    "contact": "7755616175",
    "email": "oortiz169@zitroodnalro.biz"
  },
  {
    "id": 9,
    "firstName": "Dean",
    "lastName": "Dawson",
    "contact": "6102469376",
    "email": "ddawson281@noswadnaed.org"
  },
  {
    "id": 10,
    "firstName": "Maggie",
    "lastName": "Banks",
    "contact": "4312959918",
    "email": "mbanks199@sknabeiggam.biz"
  }
];

const store = createStore(root, { contacts: contactData }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContactList />
      </Provider>
    );
  }
}

export default App;
