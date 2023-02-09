import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Navigation from "../../components/navigation/navigation"
import styles from "./home.module.css"


type Props = {}

export default function Home({ }: Props) {
    return (
        <>
            <Navigation />
            <Container fluid="sm" className="vh-100 d-flex align-items-center p-4">
                <Row className="align-items-center">
                    <Col className="d-none d-lg-block">
                        <div className={styles.girl}></div>
                    </Col>
                    <Col className="text-white">
                        <h1 className="mb-4 display-1">Feel The Music</h1>
                        <p className="mb-4">Stream over 20 thousand songs with one click</p>
                        <Button className="px-3">
                            <Link to={'/join'} className="text-white text-decoration-none">
                                Join Now
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}