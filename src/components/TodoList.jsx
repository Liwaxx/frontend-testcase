import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getTodo } from '../redux/action';
import Todo from './Todo';
import { Table } from 'reactstrap'

class TodoList extends Component {

  componentDidMount() {
    this.props.getTodo();
  }

  render() {
    return (
      <Fragment>
      <Table
          bordered
          responsive
          striped
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <Todo/>
        </tbody>
      </Table>
    </Fragment>
    );
  }
}

const mstp = state => {
  console.log("FROM VIEWER:", state)
  return {
      dataList: state.allTodo,
  }
}

export default connect(mstp, { getTodo })(TodoList);