import { Container, Section } from './Pages.styled';
import { EventMenu } from '../components/EventMenu/EventMenu';
import { EventList } from '../components/EventList/EventList';

const HomePage = () => {

  return (
    <Section>
      <Container>
        <EventMenu />
        <EventList />
      </Container>
    </Section>
  );
};

export default HomePage;
