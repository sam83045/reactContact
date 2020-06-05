import React, { Component } from 'react';
import { Form } from "semantic-ui-react";
import { Button, Modal, Grid } from 'semantic-ui-react';
class CreateContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isCreate: !this.props.contactDetails?.id,
            formData: { ...this.props.contactDetails }
        }
    }
    handleChange = (e, { name, value }) => {
        this.setState(
            {
                formData:
                    { ...this.state.formData, [name]: value }
            })
    };

    handleSubmit = () => {
        this.props.updateContactList(this.state.formData, this.state.isCreate ? "create" : "update");
        this.props.onClose();
    }
    render() {
        return (
            <>
                <Modal
                    open={this.props.open}
                    closeOnEscape={true}
                    closeOnDimmerClick={true}
                    onClose={this.props.onClose}
                    size="small"
                >
                    <Modal.Header>{this.state.isCreate ? "Create" : "Edit"} Contact</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <Form.Input
                                            label="First Name"
                                            placeholder='First Name'
                                            name='firstName'
                                            value={this.state.formData.firstName}
                                            onChange={this.handleChange}
                                            fluid
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Form.Input
                                            label="Last name"
                                            placeholder='Last Name'
                                            name='lastName'
                                            value={this.state.formData.lastName}
                                            onChange={this.handleChange}
                                            fluid
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <Form.Input
                                            label="Contact Number"
                                            placeholder='Contact Namber'
                                            name='contact'
                                            value={this.state.formData.contact}
                                            onChange={this.handleChange}
                                            fluid
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Form.Input
                                            label="Email"
                                            placeholder='Email'
                                            name='email'
                                            value={this.state.formData.email}
                                            onChange={this.handleChange}
                                            fluid
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic onClick={this.props.onClose} negative>
                            Cancel
                        </Button>
                        <Button
                            basic
                            type="submit"
                            onClick={this.handleSubmit}
                            positive
                            content={this.state.isCreate ? "Create" : "Update"}
                        />
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

CreateContact.defaultProps = {
    contactDetails: {
        firstName: '',
        lastName: '',
        email: '',
        contact: ''
    }
}

export default CreateContact
