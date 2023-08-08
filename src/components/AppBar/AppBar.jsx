import { Header, ContainerAppBar, Btn, DownIcon } from './AppBar.styled';
import { Container } from '../../pages/Pages.styled';
import { Logo } from '../Logo/Logo';
import { EventSearch } from '../EventSearch/EventSearch';

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <ContainerAppBar>
          <Logo />
          <EventSearch />
          <Btn type="button">
            UK <DownIcon />
          </Btn>
        </ContainerAppBar>
      </Container>
    </Header>
  );
};
