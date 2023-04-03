import Head from 'next/head'
import { Card, Image, Layout, List, Typography } from 'antd';
import styles from '../styles/Home.module.css'
import SiteHeader from '../components/header'

const { Content, Footer } = Layout;
const { Text, Title } = Typography;

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

const nightmarkets = [
  {
    title: 'Shilin',
    description: 'most popular, biggest in Taipei, and crowded',
    image: 'https://firebasestorage.googleapis.com/v0/b/taiwanfood-5318c.appspot.com/o/bread.jpeg?alt=media&token=20a72d8c-c98c-4ee4-a430-6e0f6dbb068e'
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Taiwan Free Food Tour</title>
        <meta name="description" content="Taiwan free food tour" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={{ minHeight: "100vh" }}>
        <SiteHeader />
        <Content className={[styles.content, styles.background]}>
          <Title>
            Welcome to Taiwan's Free Walking Food Tours!
          </Title>
          <Text style={{ alignSelf: 'center', padding: '0 50px' }}>
            Come explore traditional street eats with an English-speaking guide in one of the world's top 
            foodie destinations!
          </Text>
        </Content>
        <Content className={[styles.content, styles.streetEats]}>
          <Title className={styles.tourTitle}>
            Street Eats Tour
          </Title>
          <Text className={styles.tourDescription}>
            Depending on what you'd like to eat, you can have a taste of:
          </Text>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={streetEatsItems}
            renderItem={(item) => (
              <List.Item>
                <Card bodyStyle={{ padding: '12px 24px 24px' }} title={item.title}>
                  <Text>
                    {item.description}
                  </Text>
                  <Image
                    style={{ paddingTop: '8px' }}
                    preview={false}
                    src={item.image}
                  />
                </Card>
              </List.Item>
            )}
          />
        </Content>
        <Content className={[styles.content, styles.nightmarket]}>
          <Title className={styles.tourTitle}>
            Nightmarket Tour
          </Title>
          <Text className={styles.tourDescription}>
            Heard about the famous Taiwan nightmarkets but unsure what to eat there? Unsure what you're
            looking at when you go? Sign up for a tour to explore a Taiwan nightmarket - you can pick
            which one you want to go to. Below are a few suggestions, or if you don't know, just sign up
            and be surprised!
          </Text>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={nightmarkets}
            renderItem={(item) => (
              <List.Item>
                <Card bodyStyle={{ padding: '12px 24px 24px' }} title={item.title}>
                  <Text>
                    {item.description}
                  </Text>
                  <Image
                    style={{ paddingTop: '8px' }}
                    preview={false}
                    src={item.image}
                  />
                </Card>
              </List.Item>
            )}
          />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Taiwan Free Food Tour ©2023
        </Footer>
      </Layout>
    </>
  )
}
