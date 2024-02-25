import { Col, Container, Row } from "react-bootstrap"

const Error404 = ({goBackUrl,name}) => {
    return (<>
    <Container className="my-5">
        <Row className="bg-danger-subtle p-5 ">
            <Col sm={12} md= {{offset:2,span:8}} className="p-3 text-danger">
            Oops !! The Page/resource you are looking for page doesn't exists
            <p>
                Go back to
                <a href={goBackUrl} className="btn btn-link">
                {name}</a>
            </p>
            </Col>
        </Row>
    </Container>
    
    </>)
}
export default Error404;