import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";


export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
      <Layout bodyClass={null}>
        <div className="w-full bg-slate-200 font-serif">
            <h1>{post.frontmatter.title}</h1>
            <small>{post.frontmatter.date}</small>
            <div className="max-w-screen-lg mx-auto my-16 px-4">
                <div
                    className="grid grid-cols-1 gap-16 text-2xl leading-loose tracking-wide"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                ></div>
            </div>
            
        </div>
      </Layout>
    
  )
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`