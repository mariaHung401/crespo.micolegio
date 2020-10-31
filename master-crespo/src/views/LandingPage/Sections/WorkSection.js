import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/colegio/etica.png";
import image2 from "assets/img/colegio/valor.png";
import image3 from "assets/img/colegio/unidad.png";
import image4 from "assets/img/colegio/mision.png";
import image5 from "assets/img/colegio/lider.png";
import image6 from "assets/img/colegio/analitico.png";
import image7 from "assets/img/colegio/cuidado.png";
import image8 from "assets/img/colegio/hombre-palo.png";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h3 className={classes.title}>Valores</h3>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={2} className={classes.marginAuto}>
            <img
              src={image1}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRoundedCircle +
                " " +
                classes.imgFluid
              }
            />
            <h4>
              <strong>ÉTICA</strong>
            </h4>
            <h5>
              Garantía de que las acciones que emprendamos, siempre estarán regidas por los principios morales y éticos.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={2} className={classes.marginAuto}>
            <img
              src={image5}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRoundedCircle +
                " " +
                classes.imgFluid
              }
            />
            <h4>
              <strong>AUTONOMÍA Y RESPONSABILIDAD</strong>
            </h4>
            <h5>
              Para que cada educando desarrolle al máximo sus potencialidades en pro de su formación académica.            </h5>
          </GridItem>
          <GridItem xs={12} sm={2} className={classes.marginAuto}>
            <img
              src={image3}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRoundedCircle +
                " " +
                classes.imgFluid
              }
            />
            <h4>
              <strong>JUSTICIA Y EQUIDAD</strong>
            </h4>
            <h5>
              Para tratar a todos nuestros educandos por igual, respetando los derechos de cada quien.            </h5>
          </GridItem>
          <GridItem xs={12} sm={2} className={classes.marginAuto}>
            <img
              src={image6}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRoundedCircle +
                " " +
                classes.imgFluid
              }
            />
            <h4>
              <strong>TRABAJO</strong>
            </h4>
            <h5>
              En equipo y cooperación e inducirles estos valores como forma de convivencia en sociedad.
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={2} className={classes.marginAuto}>
            <img
              src={image8}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRoundedCircle +
                " " +
                classes.imgFluid
              }
            />
            <h4>
              <strong>IDENTIDAD</strong>
            </h4>
            <h5>Todos formamos aporte de una sola institución.</h5>
          </GridItem>
          <GridItem xs={12} sm={2} className={classes.marginAuto}>
            <img
              src={image2}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRoundedCircle +
                " " +
                classes.imgFluid
              }
            />
            <h4>
              <strong>VALORES</strong>
            </h4>
            <h5>
              Dedicación; porque nuestro compromiso es dedicarnos a lo mejor.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={2} className={classes.marginAuto}>
            <img
              src={image7}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRoundedCircle +
                " " +
                classes.imgFluid
              }
            />
            <h4>
              <strong>RESPETO</strong>
            </h4>
            <h5>
              Mutuo ya que somos importantes para el logro de la misión propuesta.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={2} className={classes.marginAuto}>
            <img
              src={image4}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRoundedCircle +
                " " +
                classes.imgFluid
              }
            />
            <h4>
              <strong>MERITOCRACIA</strong>
            </h4>
            <h5>
              Garantizando de esta manera que los educandos de nuestra institución sean los mejores.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
