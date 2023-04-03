import Tourpage from '../components/tourpage';

const streetEatsItems = [
  {
    title: 'Rice ball',
    description: 'a ball of sticky rice with a variety of ingredients inside',
    image: 'https://firebasestorage.googleapis.com/v0/b/taiwanfood-5318c.appspot.com/o/bread.jpeg?alt=media&token=20a72d8c-c98c-4ee4-a430-6e0f6dbb068e'
  },
  {
    title: 'Bubble tea',
    description: 'a ball of sticky rice with a variety of ingredients inside',
    image: 'https://firebasestorage.googleapis.com/v0/b/taiwanfood-5318c.appspot.com/o/bread.jpeg?alt=media&token=20a72d8c-c98c-4ee4-a430-6e0f6dbb068e'
  },
  {
    title: 'Bread',
    description: 'a ball of sticky rice with a variety of ingredients inside',
    image: 'https://firebasestorage.googleapis.com/v0/b/taiwanfood-5318c.appspot.com/o/bread.jpeg?alt=media&token=20a72d8c-c98c-4ee4-a430-6e0f6dbb068e'
  },
  {
    title: 'Dumplings in soup',
    description: 'a ball of sticky rice with a variety of ingredients inside',
    image: 'https://firebasestorage.googleapis.com/v0/b/taiwanfood-5318c.appspot.com/o/bread.jpeg?alt=media&token=20a72d8c-c98c-4ee4-a430-6e0f6dbb068e'
  },
  {
    title: 'Red chili-oil dumplings',
    description: 'a ball of sticky rice with a variety of ingredients inside',
    image: 'https://firebasestorage.googleapis.com/v0/b/taiwanfood-5318c.appspot.com/o/bread.jpeg?alt=media&token=20a72d8c-c98c-4ee4-a430-6e0f6dbb068e'
  },
  {
    title: 'Stinky tofu',
    description: 'a ball of sticky rice with a variety of ingredients inside',
    image: 'https://firebasestorage.googleapis.com/v0/b/taiwanfood-5318c.appspot.com/o/bread.jpeg?alt=media&token=20a72d8c-c98c-4ee4-a430-6e0f6dbb068e'
  },
  {
    title: 'Green onion pancake',
    description: 'a ball of sticky rice with a variety of ingredients inside',
    image: 'https://firebasestorage.googleapis.com/v0/b/taiwanfood-5318c.appspot.com/o/bread.jpeg?alt=media&token=20a72d8c-c98c-4ee4-a430-6e0f6dbb068e'
  },
  {
    title: 'Oyster vermicelli',
    description: 'a ball of sticky rice with a variety of ingredients inside',
    image: 'https://firebasestorage.googleapis.com/v0/b/taiwanfood-5318c.appspot.com/o/bread.jpeg?alt=media&token=20a72d8c-c98c-4ee4-a430-6e0f6dbb068e'
  },
  {
    title: 'Beef noodle soup',
    description: 'a ball of sticky rice with a variety of ingredients inside',
    image: 'https://firebasestorage.googleapis.com/v0/b/taiwanfood-5318c.appspot.com/o/bread.jpeg?alt=media&token=20a72d8c-c98c-4ee4-a430-6e0f6dbb068e'
  },
  {
    title: 'Oyster pancake',
    description: 'a ball of sticky rice with a variety of ingredients inside',
    image: 'https://firebasestorage.googleapis.com/v0/b/taiwanfood-5318c.appspot.com/o/bread.jpeg?alt=media&token=20a72d8c-c98c-4ee4-a430-6e0f6dbb068e'
  },
  {
    title: 'Meat stew',
    description: 'a ball of sticky rice with a variety of ingredients inside',
    image: 'https://firebasestorage.googleapis.com/v0/b/taiwanfood-5318c.appspot.com/o/bread.jpeg?alt=media&token=20a72d8c-c98c-4ee4-a430-6e0f6dbb068e'
  },
  {
    title: 'Rice noodle soup',
    description: 'a ball of sticky rice with a variety of ingredients inside',
    image: 'https://firebasestorage.googleapis.com/v0/b/taiwanfood-5318c.appspot.com/o/bread.jpeg?alt=media&token=20a72d8c-c98c-4ee4-a430-6e0f6dbb068e'
  },
];

export default function StreetEats() {
  return (<Tourpage items={streetEatsItems} />)
}