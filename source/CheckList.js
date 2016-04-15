import React, {Component} from 'react'

export default class CheckList extends Component {
  render () {
    let tasks = this.props.tasks.map((task) => {
      return (
        <li key={ task.id } className='checklist__task'>
          <input type='checkbox' checked={ task.done } />
          { task.name }
          <a href='#' className='checklist__task--remove' />
        </li>
      )
    });

    return (
      <div className='checklist'>
        <ul>{ tasks }</ul>
        <input type='text' className='checklist--add-tast'
               placeholder='Type then hit Enter to add a task' />
      </div>
    );
  }
}
