import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Shared/Layout'
import Hero from '../components/Pages/Home/Hero/Hero'
import FeaturedPosts from '../components/Pages/Home/FeaturedPosts/FeaturedPosts'
import Banner from '../components/Pages/Home/Banner/Banner'
import Cookie from '../components/Shared/Cookie/Cookie'
import ReviewAndAnalysis from '../components/Pages/Home/ReviewAndAnalysis/ReviewAndAnalysis'
import ResearchArticles from '../components/Pages/Home/ResearchArticles/ResearchArticles'
import EditorsPick from '../components/Pages/Home/EditorsPick/EditorsPick'
// API 
import { getAllPostsWithSlug } from '../lib/api'


export default function Home({ allPosts, preview }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout className="landing">
        <Hero />
        <FeaturedPosts />
        <Banner />
        <ReviewAndAnalysis />
        <EditorsPick />
        <ResearchArticles data={allPosts}/>
      </Layout>
    </>
  )
}


// 
export async function getStaticProps({ preview = false }) {
  const options = 10;
  const allPosts = await getAllPostsWithSlug(options)

  return {
    props: { allPosts, preview },
    revalidate: 1
  }
}