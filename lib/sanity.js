import {
  groq,
  createClient,
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from 'next-sanity'

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
}

// Sanity Image Builder
export const imageBuilder = source => createImageUrlBuilder(config).image(source)

// Sanity preview Subscription
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// Sanity Client
export const client = createClient(config)

// Sanity Preview Client
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Sanity Client
export const getClient = (usePreview) => (usePreview ? previewClient : client)


export default client