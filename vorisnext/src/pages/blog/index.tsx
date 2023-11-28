import { GetStaticProps } from 'next';
import Head from 'next/head';
import { graphql } from "@/gql/index";
import createApolloClient from '@/apollo-client';
import { GetAllPostsWithAuthorsQuery, Post } from '@/gql/graphql';
// import styles from '@/styles/Home.module.css'
interface BlogProps {
  posts: Post[]
}

const GetAllPostsWithAuthors = graphql(`
query GetAllPostsWithAuthors {
  posts{
    data{ 
      id
      attributes{
        eventpicture{
          data{
            attributes{
              url}
          }
        }
        title
        description
        author{
          data{
            attributes{
              name
              last_name
              email
            }
          }
        }
        publishedAt
      }
    }
  }
}
`);

export const getStaticProps: GetStaticProps/*<BlogProps>*/ = async () => {
  // const response = await fetch(
  //   "http://localhost:1337/graphql",
  //   {
  //     method: "POST",
  //     body: JSON.stringify({
  //       query: `query {
  //         posts{
  //           data{ 
  //             id
  //             attributes{
  //               eventpicture{
  //                 data{
  //                   attributes{
  //                     url}
  //                 }
  //               }
  //               title
  //               description
  //               author{
  //                 data{
  //                   attributes{
  //                     name
  //                     last_name
  //                     email
  //                   }
  //                 }
  //               }
  //               publishedAt
  //             }
  //           }
  //         }
  //       }`,
  //     }),
  //     headers: {
  //       "Authorization": `Bearer ${process.env.TOKEN}`,
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );
  const client = createApolloClient();

  let  {data} = await client.query( {query: GetAllPostsWithAuthors, variables: {}});

  let posts = data.posts?.data.map(entity => ({
    title: entity.attributes?.title,
    //eventpicture: entity.attributes?.eventpicture?.data,
    publishedAt: entity.attributes?.publishedAt
  }));
//console.log(posts);
// const {data} = await client.query({query: GetAllPostsWithAuthors, variables: {}})
//   let posts = await response.json();

  return {
    props:{
      posts: posts
    }
  }
}

const Blog = ({ posts }: BlogProps) => {
    return (
        <>
          <Head>
            <title>BlogPage</title>
            <meta name="description" content="Blog with all blog posts" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <h1>Blog</h1>
            <ul>
              {posts.map((post) => (
                <>
                  <h2>{post.title}</h2>
                  {post.publishedAt}
                  
                  
                </>
              ))}
            </ul>
    
            
          </main>
        </>
      )
}

export default Blog;
