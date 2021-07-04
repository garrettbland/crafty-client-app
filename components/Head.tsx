/**
 * Header component with meta descriptions & open graph meta tags
 */
import { default as NextHead } from 'next/head'

interface HeadProps {
    title: string
    description: string
    url: string
    image: string
}

const Head = ({ title, description, url, image }: HeadProps) => (
    <NextHead>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />
    </NextHead>
)

export default Head
