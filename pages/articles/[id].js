import React from 'react'
import Layout from '../../components/Shared/Layout'
import ArticleHeader from '../../components/Single/Article/ArticleHeader'
import ArticleCover from '../../components/Single/Article/ArticleCover'
import ArticleBody from '../../components/Single/Article/ArticleBody'
import ArticleFooter from '../../components/Single/Article/ArticleFooter'


const SingleArticle = () => {
    return (
        <>
            <Layout>
                <article className="gh-single-article">
                    <ArticleHeader
                        title="New pumpkin toadlet species found—and it secretly glows in the dark"
                        author="Abu Taher Muhammad"
                        category="Sea world"
                        date="12 Dec, 2021"
                        excerpt="From singing competitions to food preferences, scientists are learning whales have cultural differences once thought to be unique to humans."
                    />

                    <ArticleCover
                        alt="New pumpkin toadlet species found—and it secretly glows in the dark"
                        type="img"
                        src="/img/a1.jpg"
                    />
                        
                    <ArticleBody />
                    
                    <ArticleFooter />
                </article>
            </Layout>
                
        </>
    )
}

export default SingleArticle
