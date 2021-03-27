type Props = {
  title: string
}

export default function Home({ title = 'React Avancado' }: Props) {
  return <h1>{title}</h1>
}
