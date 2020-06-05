import React, { useState } from "react";
import Header from "../components/Header";
import ContactCard from "../components/contact-card";
import { Grid, Button, Icon } from "semantic-ui-react";
import CreateContact from "../components/create-contact";

const ContactList = ({ contactData }) => {
    const [list, setList] = useState(contactData);
    const [open, setOpen] = useState(false);

    const updateContactList = (contact, operation) => {
        const newList = [...list];

        if (operation === "create") {
            const newId = newList[newList.length - 1].id + 1;
            contact.id = newId;
            newList.push(contact);
        } else {
            const foundIndex = newList.findIndex((item) => {
                return item.id === contact.id;
            });
            if (operation === "update") {
                newList.splice(foundIndex, 1, contact);
            } else {
                newList.splice(foundIndex, 1);
            }
        }
        setList(newList);
    }
    return (
        <>
            <Header />
            <Grid container>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Button onClick={() => { setOpen(true) }} floated="right" icon labelPosition='left' basic color="green">
                            <Icon name='add' />
                            Create New
                            </Button>
                        <CreateContact open={open} onClose={() => setOpen(false)} updateContactList={updateContactList} />
                    </Grid.Column>
                </Grid.Row>
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
        </>
    )
}

export default ContactList;