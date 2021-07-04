import Link from 'next/link'
import siteconfig from '../siteconfig.json'
import Head from '@/components/Head'

const Home = () => {
    return (
        <>
            <Head
                title={siteconfig.title}
                description={`Next JS Starter Kit by ${siteconfig.author}`}
                image="https://avatars.githubusercontent.com/u/19270385?v=4"
                url="https://nextkit.netlify.app/"
            />
            <div className="max-w-2xl mx-auto p-8 prose">
                <small>
                    <Link prefetch={false} href="https://github.com/garrettbland/next-kit">
                        <a>https://github.com/garrettbland/next-kit</a>
                    </Link>
                </small>
                <h1 className="pt-3">{siteconfig.title}</h1>
                <p>
                    Next Kit is a{' '}
                    <Link href="https://nextjs.org/" prefetch={false}>
                        Next.js
                    </Link>{' '}
                    website starter kit with some popular technologies and an opinionated setup. Its
                    purpose is to give you a head start for your website projects so you can dive
                    into development quicker.
                </p>
                <Link prefetch={false} href="https://github.com/garrettbland/next-kit/generate">
                    <a
                        className="inline-block bg-gray-900 hover:bg-gray-700 rounded-xl py-3 px-6 text-lg transition-all focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        style={{ color: 'white', textDecoration: 'none' }}
                    >
                        Use this template
                    </a>
                </Link>

                <div className="h-px w-full bg-blueGray-200 my-8"></div>
                <h2>Purpose</h2>
                <p>
                    Any new site setup takes a bit of work to get fully up and going. This is a
                    template that lets you fire up a Next.js site up quickly with all the goodies
                    setup out of the box.
                </p>
                <h2>Features</h2>
                <ul>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>PostCSS & Autoprefixer</li>
                    <li>Typescript</li>
                    <li>Typography plugin for Tailwind</li>
                    <li>Prettier</li>
                    <li>SEO Optimized Head Component</li>
                </ul>
                <h2>Getting Started</h2>
                <p>
                    Getting started is easy, just{' '}
                    <Link href="https://github.com/garrettbland/next-kit/generate" prefetch={false}>
                        <a>click here</a>
                    </Link>{' '}
                    to use this template. You will be taken to github to create a new repo using
                    this template. If you would rather look at the code and use the setup in your
                    existing environment,{' '}
                    <Link href="https://github.com/garrettbland/next-kit" prefetch={false}>
                        <a>click here</a>
                    </Link>{' '}
                    to look at the public repo.
                </p>
                <div className="h-px w-full bg-blueGray-200 my-8" />
                <h3>Opinionated Typescript Config</h3>
                <p>
                    My <code>.tsconfig</code> file utilizes the <code>paths</code> option to easily
                    import components where needed. For example, importing the <code>Button</code>{' '}
                    component on this page.
                </p>
                <pre>
                    <code>
                        <span className="text-orange-500">import</span> Head{' '}
                        <span className="text-orange-500">from </span>
                        '@/components/Head'
                    </code>
                </pre>
                <p>
                    This makes it easier when you get into larger projects and have nested
                    components.
                </p>
                <div className="h-px w-full bg-blueGray-200 my-8" />
                <h3>SEO Optimized Head Component</h3>
                <p>
                    Included with Next Kit is a <code>Head</code> component that follows (what I
                    think) are the best practices for on page SEO. It has some nice presents like
                    your title & description, as well as some basic open graph meta tags.
                </p>
                <div className="h-px w-full bg-blueGray-200 my-8" />
                <h3>Bonus Stuff</h3>
                <p>
                    Next.js comes with optional server side routing and API routes. These can be
                    utilized on places like{' '}
                    <Link href="https://www.netlify.com/" prefetch={false}>
                        <a>Netlify</a>
                    </Link>{' '}
                    (like this site) or{' '}
                    <Link href="https://vercel.com/" prefetch={false}>
                        <a>Vercel</a>
                    </Link>{' '}
                    to name a few. Netlify for example will now detect when you are using Next.js,
                    and will automatically setup serverless functions for your SSR routes.
                </p>
            </div>
        </>
    )
}

export default Home
