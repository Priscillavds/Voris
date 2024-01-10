import Head from 'next/head'
import { graphql } from "@/gql/index";
import { GetStaticProps } from 'next';
import createApolloClient from '@/apollo-client';
import style from "@/styles/App.module.css"


interface Player {
  id: string,
  firstName: string,
  lastName: string,
  picture: string,
  description: string
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
        description
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
    id: entity.id!,
    firstName: entity.attributes?.first_name!,
    lastName: entity.attributes?.last_name!,
    picture: entity.attributes?.picture?.data?.attributes?.url!,
    description: entity.attributes?.description!
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
            <ul className={style.playersrow}>
              {players.map((player)=>(
                <div className={style.playerscolumn}> 
                  <li key={player.id}>
                    <h2>{player.firstName} {player.lastName}</h2>
                    <img src={player.picture} height={400}/>
                    <p>{player.description}</p>
                  </li>
                </div>
              ))}
            </ul>
    
            
          </main>
        </>
      )
}

export default Players;