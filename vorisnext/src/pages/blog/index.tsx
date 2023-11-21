import { GetStaticProps } from 'next';
import Head from 'next/head'
// import styles from '@/styles/Home.module.css'
interface Post {
  id: number; 
  eventpicture: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
};
interface BlogProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const response = await fetch(
    "http://localhost:1338/graphql",
    {
      method: "POST",
      body: JSON.stringify({
        query: `query {
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
        }`,
      }),
      headers: {
        "Authorization": `Bearer ${process.env.TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  )
  let posts = await response.json();

  return {
    props:{
      posts: posts
    }
  }
}

const Blog = () => {
    return (
        <>
          <Head>
            <title>BlogPage</title>
            <meta name="description" content="Blog with all blog posts" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <h1>Post1</h1>
              
    
            
          </main>
        </>
      )
}

export default Blog;
