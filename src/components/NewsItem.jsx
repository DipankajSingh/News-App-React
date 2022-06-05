import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class NewsItem extends Component {

  render() {
    let {title,desc,imageUrl}=this.props
    return (
      <div className='news-card'>
        <img src={imageUrl} alt="not found!" />
        <h3 className='news-heading'>{title}</h3>
        <p className='news-paragraph'>{desc}</p>
      </div>
    )
  }
}

