import React from "react";
import BlogPost from "../components/BlogPost";
import blogsData from "../blogsData";

function BlogList() {
    const blogComponents = blogsData.map(blog => <BlogPost 
        key={blog.id} 
        title={blog.title} 
        subTitle={blog.subTitle} 
        author={blog.author} 
        date={blog.date} />)

    return (
        <div style={{width: "680px", border: "1px solid gray"}}>
            {blogComponents}
        </div>
    )
}

export default BlogList