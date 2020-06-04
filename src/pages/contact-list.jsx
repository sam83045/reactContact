import React from "react";
import Header from "../components/Header";
import ContactCard from "../components/contact-card";
import { Grid } from "semantic-ui-react";

let contactData = [
    {
        "id": 1,
        "firstName": "Macy",
        "lastName": "Padilla",
        "phone": "3927070561",
        "email": "mpadilla730@allidapycam.net"
    },
    {
        "id": 2,
        "firstName": "Keith",
        "lastName": "Daniels",
        "phone": "3403479561",
        "email": "kdaniels416@sleinadhtiek.net"
    },
    {
        "id": 3,
        "firstName": "Meaghan",
        "lastName": "Pham",
        "phone": "7426952066",
        "email": "mpham917@mahpnahgaem.biz"
    },
    {
        "id": 4,
        "firstName": "Stephen",
        "lastName": "Jordan",
        "phone": "6946544732",
        "email": "sjordan821@nadrojnehpets.net"
    },
    {
        "id": 5,
        "firstName": "Lewis",
        "lastName": "Hopkins",
        "phone": "3116707132",
        "email": "lhopkins570@snikpohsiwel.net"
    },
    {
        "id": 6,
        "firstName": "Tanisha",
        "lastName": "Leonard",
        "phone": "6457687800",
        "email": "tleonard607@dranoelahsinat.com"
    },
    {
        "id": 7,
        "firstName": "Tyler",
        "lastName": "Gonzalez",
        "phone": "2646003927",
        "email": "tgonzalez982@zelaznogrelyt.org"
    },
    {
        "id": 8,
        "firstName": "Orlando",
        "lastName": "Ortiz",
        "phone": "7755616175",
        "email": "oortiz169@zitroodnalro.biz"
    },
    {
        "id": 9,
        "firstName": "Dean",
        "lastName": "Dawson",
        "phone": "6102469376",
        "email": "ddawson281@noswadnaed.org"
    },
    {
        "id": 10,
        "firstName": "Maggie",
        "lastName": "Banks",
        "phone": "4312959918",
        "email": "mbanks199@sknabeiggam.biz"
    }
];

const ContactList = () => {

    return (

        <React.Fragment>
            <Header></Header>
            <Grid container>
                <Grid.Row>
                    {
                        contactData.map(contact => (
                            <Grid.Column width={4} key={contact.id}>
                                <ContactCard  contactDetails={contact} />
                            </Grid.Column>
                        ))
                    }
                </Grid.Row>
            </Grid>
        </React.Fragment>
    )
}

export default ContactList; 