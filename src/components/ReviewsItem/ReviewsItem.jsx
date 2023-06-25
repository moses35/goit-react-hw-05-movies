import PropTypes from 'prop-types';
import { Content } from 'components/ReviewsItem/ReviewsItem.styled';

const ReviewsItem = ({ item }) => {
  return (
    <>
      <li>
        <p>{item.author || 'Not found'}</p>
        <Content>{item.content || 'Not found'}</Content>
      </li>
    </>
  );
};
export default ReviewsItem;

ReviewsItem.propTypes = {
  item: PropTypes.object.isRequired,
};
