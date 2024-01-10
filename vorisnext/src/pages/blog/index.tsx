import { GetStaticProps } from 'next';
import Head from 'next/head';
import { graphql } from "@/gql/index";
import createApolloClient from '@/apollo-client';
import Link from 'next/link';
import style from "@/styles/App.module.css"
// import styles from '@/styles/Home.module.css'

interface Post{
  id: string
  title: string,
  publishedAt: string,
  author: string
}
interface BlogProps {
  posts: Post[]
}


const GetAllPostsWithAuthors = graphql(`
query GetAllPostsWithAuthors {
  posts(sort: "publishedAt:desc"){
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
    id: entity.id!,
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
            <ul className={style.dotgone}>
              {posts.map((post) => (
              <div className={style.blogborder}>
                <li key={post.id} >
                  
                  <Link href={`/blog/${post.id}`}className={style.blog}>
                    <h2>{post.title}</h2>
                    <p>{post.author}</p>
                    <p>{post.publishedAt} </p>
                  </Link>
                  
                </li>
              </div>
              ))}
            </ul>
    
            
          </main>
        </>
      )
}

export default Blog;
