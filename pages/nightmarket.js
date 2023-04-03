import Tourpage from '../components/tourpage';

const nightmarkets = [
  {
    title: 'Shilin',
    description: 'most popular, biggest in Taipei, and crowded',
    image: 'https://firebasestorage.googleapis.com/v0/b/taiwanfood-5318c.appspot.com/o/bread.jpeg?alt=media&token=20a72d8c-c98c-4ee4-a430-6e0f6dbb068e'
  },
]

export default function Nightmarket() {
    return (<Tourpage items={nightmarkets} />)
}