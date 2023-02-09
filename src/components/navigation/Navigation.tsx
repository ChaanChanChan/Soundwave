import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Props = {}

export default function Navigation({ }: Props) {
    return (
        <Navbar className="mt-3">
            <Container fluid="sm">
                <Navbar.Brand>
                    <img
                        alt=""
                        src="/images/logo/logo.svg"
                        width="60"
                        height="60"
                        className="d-inline-block align-center"
                    />{' '}
                    <Navbar.Text className="d-inline-block align-center">
                        <Link to={'/'} className="text-white ms-3 text-decoration-none">Soundwave</Link>
                    </Navbar.Text>
                </Navbar.Brand>
                <Nav className="flex-nowrap">
                    <Nav.Link>
                        <Link to={'/discover'} className="text-decoration-none text-white">Discover</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={'/join'} className="text-decoration-none text-white">Join</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}