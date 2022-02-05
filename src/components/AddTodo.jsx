import React, { Component, Fragment } from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'

class AddTodo extends Component {
  render() {
    return (
      <Fragment>
        <Form>
          <FormGroup>
            <Label>Create New Task</Label>
            <Input
              type='text'
              placeholder='New Task'
            />
          </FormGroup>
          <FormGroup>
            <Button
              color='light'
            >Create</Button>
          </FormGroup>
        </Form>
      </Fragment>
    );
  }
}

export default AddTodo;