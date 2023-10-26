import NavBar from "./navbar";
import Footer from "./footer";
import '../../App.css';
import { Container } from 'react-bootstrap';

export default function Layout({children}) {
  return (
    <Container>
      <NavBar />
      {children}
      <Footer />
    </Container>
  );
}
