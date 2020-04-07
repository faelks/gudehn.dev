import { Link } from "gatsby";
import React from "react";
import { Stack, Card } from ".";

export const PostsTable = ({ posts }) => {

  return (
    <Stack margin="medium">
      {posts.map(post => (
        <Card key={post.node.id}>
          <h4>{post.node.frontmatter.title} ({post.node.fields.slug})</h4>
          <p>{post.node.frontmatter.date}</p>
          <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
        </Card>
      ))}
    </Stack>
  )
}