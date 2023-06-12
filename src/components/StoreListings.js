import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function StoreListings() {
  return (
    <div style={{ margin: "auto" }}>
      <h2
        style={{
          fontSize: "36px",
          lineHeight: "50px",
          marginTop: "20px",
          textAlign: "center",
          fontWeight: "normal",
        }}
      >
        Browse stores in Philadelphia
      </h2>
      <Container style={{ marginTop: "50px", textAlign: "center" }}>
        <Row
          style={{
            borderBottom: "1px solid #E8E9EB",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Row>
            <Col xs=".5">
              <Image
                style={{
                  height: "55px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                }}
                src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
                roundedCircle
              />
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image
                style={{
                  height: "50px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                }}
                src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png"
                roundedCircle
              />
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image
                style={{
                  height: "50px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                }}
                src="https://www.instacart.com/image-server/132x132/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png"
                roundedCircle
              />
            </Col>
            <Col md="6" style={{ textAlign: "left" }}>
              <h5 style={{ fontWeight: "bold" }}>Costco</h5>
              <p>Delivery</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}
