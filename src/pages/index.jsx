import P from 'prop-types';
import config from 'config/webConfig';
import { mapData } from 'api/map-data';
import { Home } from 'templates/Home';

const Index = ({ data = null }) => {
  return <Home data={data} />;
};

export const getStaticProps = async () => {
  const raw = await fetch(config.url + config.defaultSlug);
  const json = await raw.json();
  const data = mapData(json);

  return {
    props: { data },
  };
};

export default Index;

Index.propTypes = {
  data: P.array,
};
