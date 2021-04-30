import React from "react";

const Movie = (props) => {
  return (
    <div className="card shadow mt-5 mb-5">
      <div className="card-body p-5">
        <h1 className="text-primary">{props.title}</h1>
        <p className="lead">{props.opening_crawl}</p>
        <h3>Director: {props.director}</h3>
        <h3>Producer: {props.producer}</h3>
        <h3>Release Date: {props.release_date}</h3>
      </div>
    </div>
  )
}

export default Movie;
