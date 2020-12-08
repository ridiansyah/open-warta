import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import DaftarBerita from "./component/DaftarBerita";
// import Cuaca from "./component/Cuaca";

export default function Beranda(props) {
  return (
    <React.Fragment>
      <Row>
        <Col lg="8" md="8" sm="12">
          <DaftarBerita />
        </Col>
        <Col lg="4" md="4" sm="0">
          {/* <Cuaca /> */}
        </Col>
      </Row>
    </React.Fragment>
  );
}
