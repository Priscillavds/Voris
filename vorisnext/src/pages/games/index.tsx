import Head from 'next/head'
import { graphql } from "@/gql/index";
import { GetStaticProps } from 'next';
import createApolloClient from '@/apollo-client';
interface Player {
  firstName: string,
  lastName: string,
}

interface Games{
  name: string,
  when: string,
  where: string,
  picture: string,
  result: string,
  players: Player[]
}

interface GamesProps{
  games: Games[]
}
const GetAllGames = graphql(`
query GetAllGames{
  games{
    data{
      id 
      attributes{
        name
        when
        where
        image{
          data{
            attributes{
              url
            }
          }
        }
        result
        players{
          data{
            attributes{
              first_name 
              last_name
            }
          }
        }
      }
    }
  }
}`)

export const getStaticProps: GetStaticProps<GamesProps> = async () => {
  const client = createApolloClient();

  let  {data} = await client.query( {query: GetAllGames, variables: {}});

  let players : Games[]= data.games!.data.map(entity => ({
    name: entity.attributes?.name,
    lastName: entity.attributes?.last_name!,
    picture: entity.attributes?.picture?.data?.attributes?.url!
  }));


  return {
    props:{
      players: players
    }
  }
}

const Games = () => {
    return (
        <>
          <Head>
            <title>GamesPage</title>
            <meta name="description" content="All games" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <h1>Games</h1>
              
    
            
          </main>
        </>
      )
}

export default Games;
