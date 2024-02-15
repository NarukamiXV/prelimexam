import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>10 things that requires Zero talent.</h1>
        <ul>
            <li>Eagerness to learn</li>
            <li>Hardwork</li>
            <li>Effort</li>
            <li>Responbile</li>
            <li>Work Ethic</li>
            <li>Etiquette</li>
            <li>Passion</li>
            <li>Attitude</li>
            <li>Personality</li>
            <li>Dedication</li>
        </ul>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}