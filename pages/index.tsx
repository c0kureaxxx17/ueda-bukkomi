import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getAllUedaBukkomiData } from '../lib/data'
import Link from 'next/link'


// export default function Home(allPostsData) {
export default function Home({
  allPostsData
}: {
  allPostsData: {
    id: string
    bukkomi: string
  }[]
}) {
  return (
    <>
      <Head>
        <title>上田晋也 例えツッコミ集</title>
      </Head>
      <h1>上田晋也 例えツッコミ集！</h1>
      <ul>
        {allPostsData.map(value => (
          <li key={value.id}>
            <Link href={`/phreases/${value.id}`}>
              <a>{value.bukkomi}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getAllUedaBukkomiData()
  return {
    props: {
      allPostsData
    }
  }
}