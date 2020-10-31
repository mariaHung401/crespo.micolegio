import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h3 className={classes.title}>Filosofía Institucional</h3>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <h4 className={classes.cardTitle}>
              Misión
              <br />
            </h4>
            <h5>
              Ofrecer a nuestros estudiantes la educación respectiva a sus condiciones,basándose en las áreas del ser, saber, hacer y convivir, de acuerdo a los programas establecidos por el Ministerio del Poder Popular para la Educación a través de una forma innovadora que permita aprovechar al máximo el potencial de nuestros jóvenes, promoviendo una educación integral y adaptada a las necesidades actuales, mediante la  disposición de personal altamente calificado, tanto en el nivel académico como en los valores éticos y morales, considerando las expectativas de los demandantes, aunado a un amplio sentido de respeto, solidaridad y  responsabilidad social con el fin de contribuir con el desarrollo del estudiante, dotándoles de herramientas para enfrentar los retos y capacitándolo para crear mejores paradigmas en las sociedad actual.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <h4 className={classes.cardTitle}>
              Visión
              <br />
            </h4>
            <h5>
              Convertirse en una institución líder del sector, por ser vanguardista en calidad, experimentando a la vez un crecimiento sostenido de la institución. Consolidar una mayor participación en el mercado actual e incursionar en otros nuevos, mediante la creación y establecimiento de políticas efectivas, siguiendo el camino de la excelencia como ente importante en la sociedad.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
