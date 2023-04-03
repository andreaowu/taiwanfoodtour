import Head from 'next/head'
import { Card, Image, Layout, List, Typography } from 'antd';
import styles from '../styles/Home.module.css'
import SiteHeader from '../components/header';
import SiteFooter from '../components/footer';

const { Content } = Layout;
const { Text, Title } = Typography;

export default function Tourpage(props) {
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
        <Content className={[styles.content, styles.streetEats]}>
          <Title className={styles.tourTitle}>
            Street Eats Tour
          </Title>
          <Text className={styles.tourDescription}>
            Depending on what you'd like to eat, you can have a taste of:
          </Text>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={props.items}
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
        <SiteFooter />
      </Layout>
    </>
  )
}