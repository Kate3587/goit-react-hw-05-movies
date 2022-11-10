import { NavLink } from 'react-router-dom';
import { Header, HeaderList, HeaderLink} from './AppBar.styled';

const AppBar = () => {
  return (
    <>
      <Header>
        <nav>
          <HeaderList>
            <HeaderLink>
              <NavLink to="/" end>
                Home
              </NavLink>
            </HeaderLink>
            <HeaderLink>
              <NavLink to="movies">
                Movies
              </NavLink>
            </HeaderLink>
          </HeaderList>
        </nav>
      </Header>
    </>
  );
};

export default AppBar;