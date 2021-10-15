import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getUedaBukkomiData, getAllUedaBukkomiData } from '../../lib/data'
import YouTube from 'react-youtube';

// export default function Phrease(){
//   return <div>test</div>
// }

export default function Phrease(props){
  const movie_id = props.phrease.movie.replace('https://youtu.be/', '')
  return (
    <>
      <Head>
        <title>{props.phrease.bukkomi}</title>
      </Head>
      <p>{props.phrease.bukkomi}</p>
      <p>{props.phrease.scene}</p>
      <p>関連動画</p>
      <YouTube videoId={movie_id} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const phreases = await getAllUedaBukkomiData();

  return {
    paths: phreases.map(phrease => ({
      params: { id: phrease.id },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id;
  const phrease = await getUedaBukkomiData(id);

  return {
    props: {
      phrease,
    },
  }
}