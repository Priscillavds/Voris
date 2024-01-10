import Head from 'next/head'
import { graphql } from "@/gql/index";
import { GetStaticProps } from 'next';
import createApolloClient from '@/apollo-client';
import style from "@/styles/App.module.css"

interface Player {
  firstName: string,
  lastName: string
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


  let games : Games[]= data.games!.data.map(entity => ({
    name: entity.attributes?.name!,
    when: entity.attributes?.when!,
    where: entity.attributes?.where!,
    picture: entity.attributes?.image?.data?.attributes?.url!,
    result: entity.attributes?.result!,
    players: entity.attributes!.players!.data.map( player => ({
      firstName: player.attributes?.first_name!,
      lastName: player.attributes?.last_name!
    }))
  }));


  return {
    props:{
      games: games
    }
  }
}

const Games = ({games}: GamesProps) => {
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
            <ul className={style.gamesrow}>
              {games.map((game) => (
                <li key={game.name} className={style.gamescolumn}>
                  
                  <h2>{game.name}</h2>
                  <p>{game.when}</p>
                  <p>{game.where} </p>
                  <p>{game.result} </p>
                  <img src={game.picture} height="700px"/>
                  <p>Deelnemers:</p>
                    {game.players.map((player)=>(
                      <li>- {player.firstName} {player.lastName} </li>
                    ))}
                  
                </li>
              ))}
            </ul>
          </main>
        </>
      )
}
export default Games;
