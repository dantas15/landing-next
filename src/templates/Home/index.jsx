import P from 'prop-types';

import Head from 'next/head';
import { Base } from 'templates/Base';
import { PageNotFound } from 'templates/PageNotFound';

import { GridTwoColumns } from 'components/GridTwoColumns';
import { GridContent } from 'components/GridContent';
import { GridText } from 'components/GridText';
import { GridImage } from 'components/GridImage';
import config from 'config/webConfig';

export const Home = ({ data }) => {
  if (!data || !data.length) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      footerHtml={footerHtml}
      links={links}
      logoData={{ text, link, srcImg }}
    >
      <Head>
        <title>
          {title} | {config.siteName}
        </title>
      </Head>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns {...section} key={key} />;
        }

        if (component === 'section.section-content') {
          return <GridContent {...section} key={key} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText {...section} key={key} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage {...section} key={key} />;
        }
      })}
    </Base>
  );
};

Home.propTypes = {
  data: P.array,
};
