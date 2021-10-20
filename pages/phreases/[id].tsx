import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getUedaBukkomiDataJson, getAllUedaBukkomiDataJson } from '../../lib/data'
import YouTube from 'react-youtube';
import { Phrease } from "../../type/phrease"
import Link from 'next/link'

export default function PhreaseDisplay(phreaseData: Phrease){
  const movie_id = phreaseData.movie.replace('https://youtu.be/', '')
  return (
    <>
      <div className="bg_pattern Crown"></div>
      <Head>
        <title>{phreaseData.bukkomi}</title>
      </Head>
      <div className="bukkomi_detail">
        <h2 className="bukkomi_detail_title" data-en="Bukkomi">例えツッコミ</h2>
        <p>{phreaseData.bukkomi}</p>
        <h2 className="bukkomi_detail_title" data-en="Scene">いつ使うか</h2>
        <p>{phreaseData.scene}</p>
        <h2 className="bukkomi_detail_title" data-en="Movie">関連動画</h2>
        <YouTube videoId={movie_id} />
      </div>
      <Link href="/">
        <a>戻る</a>
      </Link>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const phreases = await getAllUedaBukkomiDataJson();

  return {
    paths: phreases.map(phrease => ({
      params: { id: phrease.id },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context)=> {
  const id = context.params.id;
  const phreaseData = await getUedaBukkomiDataJson(id as string);

  return {
    props: phreaseData
  }
}