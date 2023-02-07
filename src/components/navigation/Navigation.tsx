import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './navigation.module.css'

type Props = {}

export default function Navigation({ }: Props) {
    return (
        <Navbar expand="sm" className={styles.navigation}>
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src="/images/logo/logo.svg"
                        width="60"
                        height="60"
                        className="d-inline-block align-center"
                    />{' '}
                    <Navbar.Text className="d-inline-block align-center">
                        <Link to={'/'} className="text-white ms-3">Soundwave</Link>
                    </Navbar.Text>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link className="text-white me-5">
                        <Link to={'/discover'}>Discover</Link>
                    </Nav.Link>
                    <Nav.Link className="text-white">
                        <Link to={'/join'}>Join</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}