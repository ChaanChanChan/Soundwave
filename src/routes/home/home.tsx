import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Navigation from "../../components/navigation/Navigation"
import styles from "./home.module.css"


type Props = {}

export default function Home({ }: Props) {
    return (
        <>
            <Navigation />
            <section className="banner">
                <Container fluid="md" className="fixed-bottom">
                    <Row className="align-items-center">
                        <Col>
                            <div className={styles.girl}></div>
                        </Col>
                        <Col className="text-white">
                            <h1 className="mb-4">Feel The Music</h1>
                            <p className="mb-4">Stream over 20 thousand songs with one click</p>
                            <Button className="p-3">
                                <Link to={'/join'}>Join Now</Link>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}