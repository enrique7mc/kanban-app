import React, { Component, PropTypes } from 'react'
import Card from './Card'

export default class List extends Component {
  render () {
    let cards = this.props.cards.map((card) => {
      return <Card key={ card.id }
                   taskCallbacks={ this.props.taskCallbacks }
                   {...card} />
    });

    return (
      <div className='list'>
        <h1>{ this.props.title }</h1>
        { cards }
      </div>
    )
  }
}

List.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  taskCallbacks: PropTypes.object
};
