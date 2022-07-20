import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
  // constructor() {
  //   super();
  //   console.log("Hello I am a constructor");
  // }
  //aa constructor 3 var call thase karan ke news.js ma aapde 3 var newsitem ne call karyu che ane aa constructor newsitem.js nu che etle
  render() {
    let { title, description, imgurl,newsUrl,author,date } = this.props;//aano matlab have jyare bija function ma thi props pass thase tyare title ,description ane imgurl aapde aapvu padse je ne aapde use kari saksu
    return (
      <div className="my-3">
        <div className="card">
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"unknown" :author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem