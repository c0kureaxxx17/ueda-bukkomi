import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getAllUedaBukkomiDataJson } from '../lib/data'
import Link from 'next/link'
import { Phrease } from "../type/phrease"

export default function Home({
  allPostsData
}: {
  allPostsData: Phrease[]
}) {
  return (
    <>
      <div className="bg_pattern Crown"></div>
      <Head>
        <title>上田晋也 例えツッコミ集</title>
      </Head>
      <div className="top_title">
        <h1>上田晋也例えツッコミ集</h1>
        <p>ORE WO BUNSEKI SURUNA!!</p>
      </div>
      {allPostsData.map(value => (
        <p key={value.id} className="bukkomi_li">
          <Link href={`/phreases/${value.id}`}>
            <a>{value.bukkomi}</a>
          </Link>
        </p>
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getAllUedaBukkomiDataJson()
  return {
    props: {
      allPostsData
    }
  }
}