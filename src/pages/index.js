import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title} | Personal Homepage`}>
      <main>
      <header className='hero'>
        <div className="container">
          <img
            src="https://avatars.githubusercontent.com/u/9296985?v=4"
            alt="logo"
            style={{
              borderRadius: '50%',
              maxWidth: 96,
            }}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
        </div>
      </header>
      </main>
    </Layout>
  );
}

export default Home;
