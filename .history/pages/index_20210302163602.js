import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Blog website</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      <h1>Welcome to Next sfsdfsd</h1>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=6')
}