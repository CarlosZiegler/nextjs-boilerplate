import Head from 'next/head'

type Props = {
  title: string
}

const c = 2

export default function Home({ title = 'React Avancado' }: Props) {
  return <h1>{title}</h1>
}
