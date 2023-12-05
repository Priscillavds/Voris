import { GetStaticProps } from 'next';
import Head from 'next/head';
import { graphql } from "@/gql/index";
import createApolloClient from '@/apollo-client';
// import styles from '@/styles/Home.module.css'
interface Post{
  title: string,
  publishedAt: string,
  author: string
}
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

export const getStaticProps: GetStaticProps<BlogProps> = async () => {

  const client = createApolloClient();

  let  {data} = await client.query( {query: GetAllPostsWithAuthors, variables: {}});

  let posts: Post[] = data.posts!.data.map(entity => ({
    title: entity.attributes?.title!,
    publishedAt: entity.attributes?.publishedAt!,
    author: entity.attributes?.author?.data?.attributes?.name!
  }));

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
                  <p>{post.author}</p>
                  <p>{post.publishedAt} </p>
                </>
              ))}
            </ul>
    
            
          </main>
        </>
      )
}

export default Blog;
