import React from "react";

export const PostsTable = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      Total posts: {posts.length}
      {posts.map(post => (
        <div key={post.node.id}>
          <h2>{post.node.frontmatter.title}</h2>
          <p>{post.node.frontmatter.date}</p>
        </div>
      ))}
    </div>
  )
}