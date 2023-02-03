import Card from '../components/card/index.js'
import data from '../pages/api/jsonAnimes.json'

const Series = ({ data }) => {
  return <Card data={data} />
}

export async function getStaticProps() {
  return { props: { data } }
}

export default Series
