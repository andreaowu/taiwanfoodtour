import '@/styles/globals.css'
import { useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (typeof window !== 'undefined') {
      window.onload = () => {
          document.getElementById('holderStyle').remove();
      };
  }

  return (
      <ConfigProvider theme={{ hashed: false }}>
        <style
            id="holderStyle"
            dangerouslySetInnerHTML={{
                __html: `
                *, *::before, *::after {
                    transition: none!important;
                }
                `,
            }}
        />
        <div style={{ visibility: !mounted ? 'hidden' : 'visible' }}>
            <Component {...pageProps} />
        </div>
      </ConfigProvider>
  );
}
