import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from 'next/head';
import { graphql } from "@/gql/index";
import createApolloClient from '@/apollo-client';
import style from "@/styles/App.module.css"

interface Post{
    id: string
    title: string,
    description: string,
    picture: string,
    publishedAt: string,
    author: string
  }
interface PostProps {
    post: Post;
  }

const GetAllPostId = graphql(`
query GetAllPostsId{
  posts{
    data{
      id
    }
  }
}
`)

const GetPostById = graphql(`
query GetPostById ($id: ID){
    post(id:$id){
      data{
        id
        attributes{
          title
          description
          eventpicture{
            data{
              attributes{
                url
              }
            }
          }
          author{
            data{
              attributes{
                name 
                last_name
              }
            }
          }
          publishedAt
        }
      }
    }
  }
`)



interface Paths extends ParsedUrlQuery {
    id: string
  }

  export const getStaticPaths = async () => {
    const client = createApolloClient();
    const {data}= await client.query({ query: GetAllPostId, variables: {}});

    const paths = data.posts?.data.map((post)=> {
      return {
        params: {
          id: post.id
        }
      }
    })
    
    return {
        paths: paths,
        fallback: false,
    };
};


  
  export const getStaticProps : GetStaticProps<PostProps, Paths> = async (context) => {
    const client = createApolloClient();

    let  {data} = await client.query( {query: GetPostById, variables: {id: context.params!.id}});
      
    let post: Post = {
        id: context.params!.id,
        title: data.post?.data?.attributes?.title!,
        description: data.post?.data?.attributes?.description!,
        picture: data.post!.data?.attributes?.eventpicture?.data?.attributes?.url!,
        publishedAt: data.post?.data?.attributes?.publishedAt!,
        author: data.post?.data?.attributes?.author?.data?.attributes?.name!
    }
    
  
      return {
          props: {
              post: post,
          },
      };
  };

  const Post = ({ post }: PostProps) => {
    return (
        <div className={style.latestPost}>
            <h1>{post.title}</h1>
            <p><b>{post.author}</b> {post.publishedAt}</p>
            <img src={post.picture} width={500} />
            <p>{post.description}</p>
        </div>
    );
};
export default Post;