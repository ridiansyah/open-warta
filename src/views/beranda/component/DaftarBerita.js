import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardImg,
  Row,
  Col,
  Button,
  Progress,
} from "reactstrap";
import Axios from "axios";
import moment from "moment";
import "moment/locale/id";
import { apiKey } from "../../../configs/common";

const initDataBerita = {
  totalResults: 1,
  articles: [
    {
      source: {
        id: null,
        name: "Loading...",
      },
      author: "Loading...",
      title: "Loading...",
      description: "Loading...",
      url: "#",
      urlToImage: "",
      publishedAt: "Loading...",
    },
  ],
};
export default function DaftarBerita(props) {
  const [dataBerita, setDataBerita] = useState(initDataBerita);
  useEffect(() => {
    Axios.get(
      "http://newsapi.org/v2/top-headlines?country=id&apiKey=" + apiKey
    ).then((res) => {
      const resBerita = {
        totalResults: res.data.totalResults,
        articles: res.data.articles.map((berita) => ({
          source: {
            id: berita?.source?.id,
            name: berita?.source.name,
          },
          author: berita?.author,
          title: berita?.title,
          description: berita?.description,
          url: berita?.url,
          urlToImage: berita?.urlToImage,
          publishedAt: berita?.publishedAt,
        })),
      };
      setDataBerita(resBerita);
    });
  }, []);
  return (
    <>
      {dataBerita.articles.map((objBerita, indexBerita) => (
        <Card
          key={indexBerita}
          body
          //   onClick={() => window.open(objBerita?.url, "_blank")}
        >
          <Row>
            <Col lg="4" md="4" sm="4">
              <img
                src={objBerita.urlToImage}
                className="img-fluid"
                alt="card image cap"
              />
            </Col>
            <Col lg="8" md="8" sm="8">
              <h4>{objBerita?.title}</h4>
              <span>
                {objBerita?.source?.name} |{" "}
                {moment(objBerita?.publishedAt).locale("id").fromNow()}
              </span>
              <p>{objBerita?.description}</p>
              <a href={objBerita?.url} target="_blank">
                Baca Selengkapnya...
              </a>
            </Col>
          </Row>
        </Card>
      ))}
    </>
  );
}
