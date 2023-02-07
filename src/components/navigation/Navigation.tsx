import { Container, Nav, Navbar } from 'react-bootstrap'
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
                        width="50"
                        height="50"
                        className="d-inline-block align-center"
                    />{' '}
                    <Navbar.Text className="d-inline-block align-center text-white">
                        Soundwave
                    </Navbar.Text>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link className="text-white text-xl">
                        Discover
                    </Nav.Link>
                    <Nav.Link className="text-white">
                        Join
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}