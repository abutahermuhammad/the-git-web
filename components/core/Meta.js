import Head from 'next/head'


const Meta = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

                <meta name="theme-color" content="#000000" />
                <meta name="title" content="https://www.gisthive.org" />
                <meta name="Keywords" content="gisthive, journal, science journal, research paper" />
                <meta name="description" content="The Gisthive is a free online open platform for people like us. Where you can find and read new blog articles, scientific writing & journals, etc..." />
                <meta name="author" content="https://www.gisthive.org" />

                <meta name="robots" content="index, follow" />
                <meta name="p:domain_verify" content="95da148ad623abba4f68660886224843" />
                <meta name="viewport" content="width=device-wdth, initial-scale=1.0" />
                    
                <meta name="language" content="English, Bangla" />

                {/* Google JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "WebSite",
                        "name": "The Gisthive",
                        "url": "https://gisthive.org",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://gisthive.org/search?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    }) }}
                />

                {/* Open Graph */}
                <meta property="og:title" content="The Gisthive" />
                <meta property="og:site_name" content="The Gisthive" />
                <meta property="og:url" content="https://gisthive.org" />
                <meta property="og:description" content="The Gisthive is a free online open platform for people like us. Where you can find and read new blog articles, scientific writing & journals, etc..." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://gisthive.org/branding/og.png" />
            </Head>            
        </>
    )
}

export default Meta
