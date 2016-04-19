import React, { Component, PropTypes } from 'react';
import KanbanBoard from './KanbanBoard';
import 'whatwg-fetch';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'enrique7mc'
};

export default class KanbanBoardContainer extends Component {
  constructor () {
    super(...arguments);
    this.state = {
      cards: []
    };
  }

  addTask (cardId, taskName) {
    console.log(`add: Id: ${cardId} task: ${taskName}`);
  }

  deleteTask (cardId, taskId, taskIndex) {
    console.log(`delete: Id: ${cardId} taskId: ${taskId}, taskIndex: ${taskIndex}`);
  }

  toggleTask (cardId, taskId, taskIndex) {
    console.log(`toggle: Id: ${cardId} taskId: ${taskId}, taskIndex: ${taskIndex}`);
  }

  componentDidMount () {
    fetch(API_URL + '/cards', { headers: API_HEADERS })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ cards: data })
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render () {
    return <KanbanBoard cards={ this.state.cards }
                        taskCallbacks={{
                          add: this.addTask.bind(this),
                          delete: this.deleteTask.bind(this),
                          toggle: this.toggleTask.bind(this)
                        }} />
  }
}
