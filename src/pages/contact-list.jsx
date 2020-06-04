import React, { useState } from "react";
import Header from "../components/Header";
import ContactCard from "../components/contact-card";
import { Grid, Button } from "semantic-ui-react";
import CreateContact from "../components/create-contact";

const ContactList = ({ contactData }) => {
    const [list, setList] = useState(contactData);
    const [open, setOpen] = useState(false);

    const updateContactList = (contact, operation) => {
        const newList = [...list];
        if (operation) {
            const foundIndex = newList.findIndex((item) => {
                return item.id === contact.id;
            });
            if (operation === "update") {
                newList.splice(foundIndex, 1, contact);
            } else {
                newList.splice(foundIndex, 1);
            }
        } else {
            const newId = newList[newList.length - 1].id + 1;
            contact.id = newId;
            newList.push(contact);
        }
        setList(newList);
    }
    return (

        <React.Fragment>
            <Header updateContactList={updateContactList}></Header>
            <Button onClick={() => { setOpen(true) }}>Create New</Button>
            <CreateContact open={open} onClose={() => setOpen(false)} updateContactList={updateContactList} />
            <Grid container>
                <Grid.Row>
                    {
                        list.map(contact => (
                            <Grid.Column width={4} key={contact.id}>
                                <ContactCard contactDetails={contact} updateContactList={updateContactList} />
                            </Grid.Column>
                        ))
                    }
                </Grid.Row>
            </Grid>
        </React.Fragment>
    )
}

export default ContactList; 