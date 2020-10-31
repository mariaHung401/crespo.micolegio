import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>Reseña Histórica del Plantel</h3>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h5>
            <strong>La U.E.P.Gral “Joaquín Crespo”</strong>, ubicada en el Sector Panamericano Calle 76 Nº 73-133, nace como escuela casera el  08 de junio de 1961  por iniciativa de la maestra Aspacia Bermúdez de Urdaneta (La Mae), atendiendo a su vocación y en su emprendedora lucha. Comienza un arduo trabajo cuyo servicio se extiende durante muchos años en la comunidad del Sector. Desde 1961 a 1986  fue reconocido en otros colegios tanto públicos como privados,  ya que luego de exámenes de admisión en las otras instituciones los alumnos lograban ser ubicados en 2do y 3er grado.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={5}>
          <h5>
            A partir de 1986 ya por la necesidad y el crecimiento de la población la maestra Aspacia en conjunto con sus dos hijas Luz Mary y Luz Marina,  graduadas en educación, se plantearon la necesidad de inscribir el colegio ante el Ministerio de Educación. Para no ser una escuelita sino lograr alcanzar el sueño de convertirse en una gran institución educativa que albergara estudiantes de todas las  etapas de Educación Inicial y Básica. 
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={5}>
          <h5>
            Siguiendo el objetivo, se comenzó a formalizar el permiso en principio con el nombre de “Rayito de Luz”. Luego de hacer  todo el proceso para llevar a cabo la inscripción, al momento de  entregar carpetas en la Zona educativa, se conoció que ya había una institución en Maracaibo con ese nombre y además existía una resolución que obligaba a que los nuevos nombre e instituciones  debían ser de  un Prócer venezolano. Atendiendo a la lista de  epónimos dispuestos y por la prisa se escogió Joaquín Crespo y se apertura  hasta tercer grado.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
          <h5>
            Actualmente con  32  años la Unidad Educativa Joaquín Crespo ha crecido y avanzado a pasos agigantados,  hoy día recibe alumnos desde Educación Inicial hasta  Educación Media General. Se perfila como una institución responsable, colaboradora  y con un pensum reconocido en la Zona Educativa Zulia, Municipio Escolar No.- 6  y la  comunidad en general. Quienes han formado parte de esta gran familia donde quiera que vayan ponen el alto los aprendizajes obtenidos en esta gran casa de estudios.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
