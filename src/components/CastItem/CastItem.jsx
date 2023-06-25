import PropTypes from 'prop-types';
import notFound from 'images/notFound.png';
import { Img } from 'components/App/App.styled';
import { Name, Li, Text } from 'components/CastItem/CastItem.styled';

const CastItem = ({ item }) => {
  return (
    <>
      <Li>
        <Img
          src={
            item.profile_path !== null
              ? 'https://image.tmdb.org/t/p/w500' + item.profile_path
              : notFound
          }
          alt={item.name}
        />
        <Name>{item.name || 'Not found'}</Name>
        <Text>character: {item.character || 'Not found'}</Text>
      </Li>
    </>
  );
};
export default CastItem;

CastItem.propTypes = {
  item: PropTypes.object.isRequired,
};
