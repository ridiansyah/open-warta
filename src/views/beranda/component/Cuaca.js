import React from "react";
import {
  Card,
  CardTitle,
  CardImg,
  CardImgOverlay,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import { CloudSnow } from "react-feather";

export default function Cuaca(props) {
  return (
    <Card className="text-white overlay-img-card">
      <CardImg src={""} alt="overlay img" />
      <CardImgOverlay className="overlay-black">
        <h5 className="font-medium-5 text-white text-center mt-5">Snowy</h5>
        <p className="text-white text-center">New York</p>
        <div className="d-flex justify-content-around mt-2">
          <div className="icon">
            <CloudSnow size="90" />
          </div>
          <div className="temprature mt-3">
            <p className="font-large-3">
              {" "}
              -6 <span className="mt-1">°</span>
            </p>
          </div>
        </div>
        <CardBody>
          <div className="d-flex justify-content-between mt-5">
            <div className="precipitation">
              <span className="font-medium-3">Precipitation</span>
            </div>
            <div className="degree">
              <span className="font-medium-3">48%</span>
            </div>
          </div>
          <div className="d-flex justify-content-between my-2">
            <div className="humidity">
              <span className="font-medium-3">Humidity</span>
            </div>
            <div className="degree">
              <span className="font-medium-3">60%</span>
            </div>
          </div>
          <div className="d-flex justify-content-between my-2">
            <div className="wind">
              <span className="font-medium-3">Wind</span>
            </div>
            <div className="degree">
              <span className="font-medium-3">23 km/h</span>
            </div>
          </div>
        </CardBody>
      </CardImgOverlay>
    </Card>
  );
}
