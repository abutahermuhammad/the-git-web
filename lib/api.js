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
  category
  ,
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

// All Post for Home
export async function getAllPostsWithSlug(preview = false, limit = 10) {
  const data = await client.fetch(`*[_type == "post" && approved == true && removed == false && report.status == false ] | order(publishedAt desc) {
    _id,
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
    image
    }`)
  
  return data
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`)
  return getUniquePosts(results)
}


// More Post
export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview)
  const [post, morePosts] = await Promise.all([
    curClient.fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
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
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}
