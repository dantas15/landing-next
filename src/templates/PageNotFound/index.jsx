import { GridContent } from 'components/GridContent';
import Head from 'next/head';
import config from 'config/webConfig';

export const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | {config.siteName}</title>
      </Head>
      <GridContent
        title={'404'}
        html={`<p> The page you're searcing for was not found. <a href="/">Click here to go back</a></p>`}
      />
    </>
  );
};
