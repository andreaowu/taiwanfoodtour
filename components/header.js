import { Image, Layout, Menu } from 'antd'
import Link from 'next/link'

const { Header } = Layout;
const menuItems = [
  {
    label: (<Link href="/">Home</Link>),
    key: 'Home',
  },
  {
    label: (<Link href="streeteats">Street Eats</Link>),
    key: 'streeteats',
  },
  {
    label: (<Link href="nightmarket">Nightmarket</Link>),
    key: 'nightmarket',
  },
];

export default function SiteHeader() {
  return (
    <Header style={{ display: 'flex' }}>
      <Image
        preview={false}
        width={50}
        src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-noodles-icon-for-your-project-png-image_4854409.jpg"
      />
      <Menu
        theme="dark"
        mode="horizontal"
        items={menuItems}
        style={{ flex: 1, marginLeft: '24px' }}
      />
    </Header>
  )
}