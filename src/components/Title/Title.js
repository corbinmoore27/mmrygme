import React from "react";
import "./Title.css";

const Title = props => (
<div className="header">
<h1 className="title">{props.children}</h1>
<h1 className="scores">Score: {props.counter} High Score: {props.hScore}</h1>
</div>
);
export default Title;
