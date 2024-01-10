import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { graphql } from '@/gql'
import { GetStaticProps } from 'next'
import createApolloClient from '@/apollo-client'
import Link from 'next/link'
import style from "@/styles/App.module.css"
// import { serialize } from 'next-mdx-remote';
// import styles from '@/styles/Home.module.css'

interface Post{
  id: string
  title: string,
  description: string,
  picture: string,
  publishedAt: string,
  author: string
}
interface BlogProps {
  post: Post
}

const GetPostHome = graphql(`
query GetPostHome {
  posts(sort: "publishedAt:desc", pagination:{limit:1}){
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

  let  {data} = await client.query( {query: GetPostHome, variables: {}});
  let latestpost= data.posts!.data[0]

  let post: Post = {
    id: latestpost.id!,
    title: latestpost.attributes?.title!,
    description: latestpost.attributes?.description!,
    picture: latestpost.attributes?.eventpicture?.data?.attributes?.url!,
    publishedAt: latestpost.attributes?.publishedAt!,
    author: latestpost.attributes?.author?.data?.attributes?.name!
}

  return {
    props:{
      post: post
    }
  }
}


const Home = ({post}: BlogProps) => {
  return (
    <>
      <Head>
        <title>HomePage</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Voris</h1>
          <article className={style.latestPost}>
            <h2>Laatste Post</h2>
            <h3>{post.title}</h3>
            <p><b>{post.author}</b>  {post.publishedAt}</p>
            <img src={post.picture} width={500}/>
            <p>{post.description}</p>
            <Link href="/blog" className={style.morePosts}>Lees meer posts</Link>
            
          </article>

        
      </main>
    </>
  )
}
export default Home;/**/