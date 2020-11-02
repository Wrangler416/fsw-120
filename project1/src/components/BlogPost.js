import React from "react";

function BlogPost(props) {
    return (
        <div style={{width: "100%"}}>
            <div style={{width: "320px", margin: "0 auto"}}>
                <h3>{props.title}</h3>
                <h4>{props.subTitle}</h4>
                <span style={{color: "gray"}}>Posted by {props.author} on {props.date}</span>
            </div>
            <hr style={{width: "50%"}}/>
        </div>
    )
}

export default BlogPost