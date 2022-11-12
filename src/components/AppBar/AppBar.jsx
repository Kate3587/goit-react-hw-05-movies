import { NavLink } from 'react-router-dom';
import { Header, HeaderList, HeaderLink} from './AppBar.styled';


const AppBar = () => {
  return (
    <>
      <Header>
        <nav>
          <HeaderList>
              <NavLink to="/" end>
                <HeaderLink>
                  Home
                </HeaderLink>
              </NavLink>
              <NavLink to="movies">
                <HeaderLink>
                  Movies
                </HeaderLink>
              </NavLink>
          </HeaderList>
        </nav>
      </Header>
    </>
  );
};

export default AppBar;