import React from "react";
import { Link } from "gatsby";

export const PostsTable = ({ posts }) => {

  return (
    <div>
      Total posts: {posts.length}
      {posts.map(post => (
        <div key={post.node.id}>
          <h2>{post.node.frontmatter.title} ({post.node.fields.slug})</h2>
          <p>{post.node.frontmatter.date}</p>
          <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
        </div>
      ))}
    </div>
  )
}