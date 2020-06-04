import React from "react";
import { Card, Icon } from "semantic-ui-react";
import styled from "styled-components";

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

const ContactCard = ({ contactDetails }) => {
    return (
        <StyledCard>
            <Card.Content>
                <Card.Header>
                    {contactDetails.firstName} {contactDetails.lastName}
                </Card.Header>
                <Card.Description>
                    <StyledAnchor href={"tel:" + contactDetails?.phone}>
                        <Icon name="phone square" />{contactDetails.phone}
                    </StyledAnchor>
                    <br />
                    <StyledAnchor href={"mailto:" + contactDetails?.email}>
                        <Icon name="mail" />{contactDetails.email}
                    </StyledAnchor>
                    <br />

                    <StyledPara>
                        <SytledIcon name='edit' color="green" title="Edit contact" />
                        <SytledIcon name='delete' color="red" title="Delete contact" />
                    </StyledPara>
                </Card.Description>
            </Card.Content>
        </StyledCard>
    )
}

export default ContactCard;
