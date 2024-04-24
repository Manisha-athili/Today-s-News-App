import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {

    let{title,description,imgUrl,newsUrl,publishedAt} = this.props;

    return (
      <>
      {/* <div>
        im NEWS ITEM
      </div> */}

    <div className="card my-4 mx-5" style={{width: "20rem", minHeight: "32rem", maxHeight: "32rem"}}>
        <img src={imgUrl ? imgUrl : "https://www.thameshigh.school.nz/wp-content/uploads/2019/01/news.jpg"} className="card-img-top" alt="..." style={{minHeight: "15rem",maxHeight: "15rem"}}/>
        <div className="card-body ">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text "> {description}...</p>
          <a href={newsUrl} target='-blank' 
          className="btn btn-primary btn-sm" >
          Read more</a>
          <p> {publishedAt}</p>
        </div>
       
    </div>
    </>
    )
  }
}

export default Newsitem
