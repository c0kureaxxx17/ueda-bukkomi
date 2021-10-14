import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getUedaBukkomiData } from '../lib/data'

export default function Home(props) {
  // const allUedaBukkomi = await getUedaBukkomiData()
  console.log(props);
  return <div>Welcome to Next.js!</div>
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getUedaBukkomiData()
  return {
    props: {
      allPostsData
    }
  }
}