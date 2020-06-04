import React, { useState } from "react";
import { Card, Icon } from "semantic-ui-react";
import styled from "styled-components";
import CreateContact from "./create-contact";

const StyledCard = styled(Card)`
&&&{margin-top: 1rem;}
`;

const StyledAnchor = styled.a`
overflow-wrap: break-word;
`;

const StyledPara = styled.p`
float: right;
`;
const SytledIcon = styled(Icon)`
cursor: pointer;
`;

const ContactCard = ({ contactDetails, updateContactList }) => {
    const [open, setOpen] = useState(false);
    return (
        <StyledCard>
            <Card.Content>
                <Card.Header>
                    {contactDetails.firstName} {contactDetails.lastName}
                </Card.Header>
                <Card.Description>
                    <StyledAnchor href={"tel:" + contactDetails?.contact}>
                        <Icon name="phone square" />{contactDetails.contact}
                    </StyledAnchor>
                    <br />
                    <StyledAnchor href={"mailto:" + contactDetails?.email}>
                        <Icon name="mail" />{contactDetails.email}
                    </StyledAnchor>
                    <br />

                    <StyledPara>
                        <SytledIcon name='edit' color="green" title="Edit contact" onClick={() => setOpen(true)} />
                        <SytledIcon name='delete' color="red" title="Delete contact" onClick={() => updateContactList(contactDetails, "delete")} />
                    </StyledPara>
                </Card.Description>
            </Card.Content>
            <CreateContact contactDetails={contactDetails} open={open} onClose={() => setOpen(false)} updateContactList={updateContactList} />
        </StyledCard>
    )
}

export default ContactCard;
