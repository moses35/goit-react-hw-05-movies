import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

const GalleryItem = ({ item }) => {
  const location = useLocation();

  return (
    <>
      <li>
        <NavLink to={'/movies/' + item.id} state={{ from: location }}>
          {item.title || item.name}
        </NavLink>
      </li>
    </>
  );
};
export default GalleryItem;

GalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};
