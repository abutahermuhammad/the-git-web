import client, { previewClient } from './sanity'

// Client
const getClient = (preview) => (preview ? previewClient : client)

// Unique Posts
const getUniquePosts = (posts) => {
  const slugs = new Set()
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false
    } else {
      slugs.add(post.slug)
      return true
    }
  })
}


// Params 
const query = type => `*[_type == "${type}" && approved == true && removed == false && report.status == false ]`



const postFields = `
  _id,
  approved,
  removed,
  featured,
  offensive,
  'date': {
    _createdAt,
    _updatedAt,
    '_publishedAt': publishedAt
  },
  title,
  'slug': slug.current ,
  excerpt,
  category,
  'author': author->{
    _id,
    name,
    'img': image.asset->url
  },
  image,
  body,
  tags,
  importantLinks,
  references
`

// Post by Slug
export async function getPreviewPostBySlug(slug) {
  // Fields
  const params = `
    {
      _id,
      approved,
      removed,
      featured,
      offensive,
      'date': {
        _createdAt,
        _updatedAt,
        '_publishedAt': publishedAt
      },
      title,
      'slug': slug.current ,
      excerpt,
      category,
      'author': author->{
        _id,
        name,
        'img': image.asset->url
      },
      image,
      body,
      tags,
      importantLinks,
      references
    }
  `
  
  const data = await getClient(true).fetch(
    `*[_type == "post" && approved == true && removed == false && report.status == false ] | order(publishedAt desc){
      ${params}
    }`,
    { slug }
  )
  return data[0]
}


// Featured Content
export async function getFeaturedPosts(preview = false, limit = [0, 5]) {
  const filter = `*[_type in ["post","news"] && approved == true && removed == false && report.status == false ]`
  const order = `order(publishedAt desc)`
  const slice = `[${limit[0]}...${limit[1]}]`

  const data = await client.fetch(`${filter} | ${order} {
    _id,
    _type,
    title,
    'slug': slug.current ,
    excerpt,
    'category': category[0]->{
      _id,
      title
    },
    'topic': topic[0]->{
      title
    },
    image
    }`)
  
  return data
}


// Editor's Pick Content
export async function getEditorPickPosts(preview = false, limit = [0, 5]) {
  const filter = `*[_type in ["post","news"] && approved == true && removed == false && report.status == false ]`
  const order = `order(publishedAt desc)`
  const slice = `[${limit[0]}...${limit[1]}]`

  const data = await client.fetch(`${filter} | ${order} {
    _id,
    _type,
    title,
    'slug': slug.current ,
    excerpt,
    'category': category[0]->{
      _id,
      title
    },
    'topic': topic[0]->{
      title
    },
    image
    }`)
  
  return data
}


// All Post for Home
export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`)
  return getUniquePosts(results)
}


// Post by slug
export async function getAllPostsWithSlug(preview = false, limit = 10) {
  const filter = []
  const order = ``
  const slice = []

  const data = await client.fetch(`
  *[_type in ["post","news"] && approved == true && removed == false && report.status == false ] | order(publishedAt desc) {
    _id,
    _type,
    'date': {
      _updatedAt,
      '_publishedAt': publishedAt
    },
    title,
    'slug': slug.current ,
    excerpt,
    'author': author->{
      _id,
      name,
      'img': image.asset->url
    },
    'category': category->{
      _id,
      title
    },
    topic,
    'topicc': topic->{
      title
    },
    image
  }`)
  
  return data
}


// More Post
export async function getPostAndMorePosts(slug, preview) {
  const ourClient = getClient(preview)
  const [post, morePosts] = await Promise.all([
    ourClient.fetch(
        `*[_type in ["post", "news"] && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields},
        'comments': *[ _type == "comment" && post._ref == ^._id && approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    ourClient.fetch(
      `*[_type in ["post", "news"] && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields},
        body,
      }[0...2]`,
      { slug }
    ),
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}




/****************************
 * Organized
 ***************************/

/**
 * Slider
 * @param {Array} limit 
 * @returns 
 */
export const getSliderContent = async (limit = [0, 5]) => {
  const filter = `*[_type in ["post","news"] && approved == true && removed == false && report.status == false ]`
  const order = `order(publishedAt desc)`
  const slice = `[${limit[0]}...${limit[1]}]`
  const query = `{
    _id,
    _type,
    title,
    excerpt,
    'slug': slug.current,
    'category': category[0]->{
      _id,
      title
    },
    'topic': topic[0]->{
      title
    },
    image
    }`
  
  const data = await client.fetch(`${filter} | ${order} ${query} ${slice}`)

  return data
}

/**
 * Recommended
 * @param {*} limit 
 * @returns 
 */
export const getRecommendedPosts = async (limit = [0, 8]) => {
  const filter = `*[_type in ["post","news"] && approved == true && removed == false && report.status == false ]`
  const order = `order(publishedAt desc)`
  const slice = `[${limit[0]}...${limit[1]}]`
  const query = `{
    _id,
    _type,
    title,
    'slug': slug.current,
    'category': category[0]->{
      _id,
      title
    },
    'topic': topic[0]->{
      title
    },
    image
    }`
  
  const data = await client.fetch(`${filter} | ${order} ${query} ${slice}`)

  return data
}


/**
 * Trendign
 * @param {*} limit 
 * @returns 
 */
export const getTrendingPosts = async (limit = [0, 4]) => {
  const filter = `*[_type in ["post","news"] && approved == true && removed == false && report.status == false ]`
  const order = `order(publishedAt desc)`
  const slice = `[${limit[0]}...${limit[1]}]`
  const query = `{
    _id,
    _type,
    title,
    excerpt,
    'slug': slug.current,
    'category': category[0]->{
      _id,
      title
    },
    'topic': topic[0]->{
      title
    },
    image
    }`
  
  const data = await client.fetch(`${filter} | ${order} ${query} ${slice}`)

  return data
}


/**
 * Trendign
 * @param {*} limit 
 * @returns 
 */
export const getLatestPosts = async (limit = [0, 10]) => {
  const filter = `*[_type in ["post","news"] && approved == true && removed == false && report.status == false ]`
  const order = `order(publishedAt desc)`
  const slice = `[${limit[0]}...${limit[1]}]`
  const query = `{
    _id,
    _type,
    'date': {
      _createdAt,
      _updatedAt,
      '_publishedAt': publishedAt
    },
    'author': author->{
      _id,
      name,
      'img': image.asset->url
    },
    title,
    excerpt,
    'slug': slug.current,
    'category': category[0]->{
      _id,
      title
    },
    'topic': topic[0]->{
      title
    },
    image
    }`
  
  const data = await client.fetch(`${filter} | ${order} ${query} ${slice}`)

  return data
}
