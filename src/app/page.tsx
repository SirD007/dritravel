import { fetchVIACEP } from '../utils/fetchCEP'


export default async function Home() {
  const myCEPInfo = await fetchVIACEP('13397062')
  const myCEPInfo2 = await fetchVIACEP('13397062')
  return (<div>{JSON.stringify(myCEPInfo)}</div>)
}
