import { HeaderElement, Nav, Link } from 'components/Header/Header.styled';

const Header = () => {
  return (
    <HeaderElement>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </HeaderElement>
  );
};
export default Header;
