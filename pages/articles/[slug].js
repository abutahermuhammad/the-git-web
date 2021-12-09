// Core
import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
// UI
import React from 'react'
import Layout from '../../components/Shared/Layout'
import ArticleHeader from '../../components/Single/Article/ArticleHeader'
import ArticleCover from '../../components/Single/Article/ArticleCover'
import ArticleBody from '../../components/Single/Article/ArticleBody'
import ArticleFooter from '../../components/Single/Article/ArticleFooter'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
// import Date from '../../components/core/date'
import { imageBuilder } from '../../lib/sanity'


const SingleArticle = ({ article, morePosts}) => {
    // console.log('Single Post: ', article)
    // console.log('More Post: ', morePosts)

    const router = useRouter()

    if (!router?.fallBack && !article?.slug) return <ErrorPage statusCode={404} />

    return (
        <>
            <Layout>
                {router?.isFallback ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <Head>
                            <title>{ article?.title } | The Gisthive</title>
                        </Head>
                        
                        <article className="gh-single-article">
                            <ArticleHeader
                                title={article?.title}
                                author={article?.author?.name}
                                category="Sea world" 
                                date={article?.date?._createdAt}
                                excerpt={article?.excerpt}
                            />

                            <ArticleCover
                                alt={article?.title}
                                type="img"
                                src={imageBuilder(article?.image).width(1596).height(1064).url()}
                            />
                                
                            <ArticleBody body={ article?.body} />
                            
                            <ArticleFooter references={ article?.references } importantLinks={ article?.importantLinks }  />
                        </article>
                    </>      
                )}
            </Layout>
                
        </>
    )
}

export default SingleArticle


export async function getStaticProps({ params, preview = false }) {
    const data = await getPostAndMorePosts(params.slug, preview)
  
    return {
        props: {
            preview,
            article: data?.post || null,
            morePosts: data?.morePosts || null,
        },
        revalidate: 1
    }
}

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug()

    return {
        paths: allPosts?.map((post) => ({
            params: {
                slug: post.slug,
            },
        })) || [],
        fallback: true,
    }
}
