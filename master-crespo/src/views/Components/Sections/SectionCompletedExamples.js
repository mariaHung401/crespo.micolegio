import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Carousel from "react-slick";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import image1 from "assets/img/colegio/image1.png";
import image2 from "assets/img/colegio/image2.png";
import image3 from "assets/img/colegio/image3.png";
import image4 from "assets/img/colegio/image4.png";
import image5 from "assets/img/colegio/image5.png";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <h3 className={classes.title}>
              <strong>Objetivos específicos</strong>
            </h3>
          </GridItem>
          <GridItem xs={12} sm={5} md={4}>
            <Carousel {...settings}>
              <div>
                <img src={image1} className="slick-image" />
              </div>
            </Carousel>
          </GridItem>
          <GridItem xs={12} sm={7} md={5}>
            <div>
              <h5>
                Desarrollar un proceso de Enseñanza-Aprendizaje íntegro acorde a los niveles y etapas interacciónales, aplicando estrategias metodológicas que le permitan el ejercicio de una formación biopsicosocial del educando. Ampliando el desarrollo integral, su formación cultural, científica, humanista, deportiva, recreativa y artística que los capacite para la vida social, el trabajo productivo y la prosecución de sus estudios y que estos principios contribuyan a su formación como ciudadanos conscientes de sus derechos y deberes, libres, críticos, responsables y justos, aptos para vivir en una sociedad democrática.
              </h5>
            </div>
          </GridItem>
          <GridItem xs={12} sm={5} md={4}>
            <Carousel {...settings}>
              <div>
                <img src={image2} className="slick-image" />
              </div>
            </Carousel>
          </GridItem>
          <GridItem xs={12} sm={7} md={5}>
            <div>
              <h5>
                Brindar a toda la comunidad en general un ambiente, donde prevalece la comunicación, la fraternidad, la sencillez y la paz.
              </h5>
            </div>
          </GridItem>
          <GridItem xs={12} sm={5} md={4}>
            <Carousel {...settings}>
              <div>
                <img src={image3} className="slick-image" />
              </div>
            </Carousel>
          </GridItem>
          <GridItem xs={12} sm={7} md={5}>
            <div>
              <h5>
                Proporcionar al estudiante un trato como ser integral, donde no solo se impartan conocimientos a nivel académico sino que también se respetan sus momentos de ocio y recreación, proporcionándoles momentos de alegría y esparcimiento.
              </h5>
            </div>
          </GridItem>
          <GridItem xs={12} sm={5} md={4}>
            <Carousel {...settings}>
              <div>
                <img src={image4} className="slick-image" />
              </div>
            </Carousel>
          </GridItem>
          <GridItem xs={12} sm={7} md={5}>
            <div>
              <h5>
                Ser una referencia de vanguardia en cuanto a responsabilidad, disciplina y respeto entre los integrantes de la comunidad.
              </h5>
            </div>
          </GridItem>
          <GridItem xs={12} sm={5} md={4}>
            <Carousel {...settings}>
              <div>
                <img src={image5} className="slick-image" />
              </div>
            </Carousel>
          </GridItem>
          <GridItem xs={12} sm={7} md={5}>
            <div>
              <h5>
                Propiciar eventos donde los estudiantes tienen la oportunidad de demostrar sus conocimientos, habilidades y destrezas a sus padres y representantes a través de diferentes actividades.
              </h5>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
