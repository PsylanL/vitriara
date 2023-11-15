import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId:'f4u7hyie',
    dataset:'production',
    apiVersion:'2023-11-15',
    useCdn: true,
    token: process.env.SANITY_SECRET_TOKEN
})

const builder = imageUrlBuilder(client)

function urlFor(source) {
    return builder.image(source)
}