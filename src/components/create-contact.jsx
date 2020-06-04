import React, { Component } from 'react';
import {  Form } from "semantic-ui-react";
import { Button, Modal } from 'semantic-ui-react';
class CreateContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false, isCreate: false,
            ...this.props.contactDetails
        }
    }
    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    render() {
        return (
            <>
                <Modal
                    // trigger={}
                    open={this.props.open}
                    closeOnEscape={true}
                    closeOnDimmerClick={true}
                    onClose={this.props.onClose}
                    size="small"
                >
                    <Modal.Header>{this.isCreate ? "Create" : "Edit"} Contact</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Input
                                    placeholder='First Name'
                                    name='firstName'
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                />
                                <Form.Input
                                    placeholder='Last Name'
                                    name='lastName'
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                />
                                <Form.Button content='Submit' />
                            </Form.Group>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.props.onClose} negative>
                            Cancel
                        </Button>
                        <Button
                            onClick={this.props.onClose}
                            positive
                            content={this.isCreate ? "Create" : "Update"}
                        />
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default CreateContact
