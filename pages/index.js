import Head from 'next/head'
import { Card, Image, Layout, List, Typography } from 'antd'
import styles from '../styles/Home.module.css'
import SiteHeader from '../components/header'
import SiteFooter from '../components/footer'
import Link from 'next/link'

const { Content } = Layout;
const { Text, Title } = Typography;

const tours = [
  {
    title: 'Street Eats',
    description: 'Pick from a list of street food to try!',
    href: 'streeteats',
    image: 'https://firebasestorage.googleapis.com/v0/b/taiwanfood-5318c.appspot.com/o/bread.jpeg?alt=media&token=20a72d8c-c98c-4ee4-a430-6e0f6dbb068e'
  },
  {
    title: 'Nightmarket',
    description: 'Let\'s visit a nightmarket together!',
    href: 'nightmarket',
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
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={tours}
            renderItem={(item) => (
              <Link href={item.href}>
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
              </Link>
            )}
          />
        </Content>
        <SiteFooter />
      </Layout>
    </>
  )
}
