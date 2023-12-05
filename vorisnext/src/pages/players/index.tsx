import Head from 'next/head'
import { graphql } from "@/gql/index";
import { GetStaticProps } from 'next';
import createApolloClient from '@/apollo-client';


interface Player {
  firstName: string,
  lastName: string,
  picture: string
}

interface PlayersProps {
  players: Player[]
}

const GetAllPlayers = graphql(`
query GetAllPlayers{
  players{
    data{
      id 
      attributes{
        first_name 
        last_name 
        picture{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}`)

export const getStaticProps: GetStaticProps<PlayersProps> = async () => {
  const client = createApolloClient();

  let  {data} = await client.query( {query: GetAllPlayers, variables: {}});

  let players : Player[]= data.players!.data.map(entity => ({
    firstName: entity.attributes?.first_name!,
    lastName: entity.attributes?.last_name!,
    picture: entity.attributes?.picture?.data?.attributes?.url!
  }));


  return {
    props:{
      players: players
    }
  }
}


const Players = ({players}:PlayersProps) => {
    return (
        <>
          <Head>
            <title>PlayersPage</title>
            <meta name="description" content="page with all players" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <h1>Spelers</h1>
            <ul>
              {players.map((player)=>(
                <>
                  <h2>{player.firstName} {player.lastName}</h2>
                  <img src={player.picture} />
                </>
              ))}
            </ul>
    
            
          </main>
        </>
      )
}

export default Players;