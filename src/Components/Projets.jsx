import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import emsi from '../images/bg.webp';
import {
  MDBCardImage,
  MDBRow,
} from 'mdb-react-ui-kit';


const Pr = () => {
    return (
      
      <div className="container w-50 p-3  ">

      <MDBRow className='row-cols-1 row-cols-md-1 g-1'>
        

    <Carousel fade>
      <Carousel.Item>
      <MDBCardImage
              src={emsi}
              alt='...'
              position='top'
            />
             <div class="carousel-caption d-flex flex-column justify-content-center h-100" style={{top: -30}}>
                <h4>Bibliothèque numérique, Marrakech</h4>
                      <br/>
                <h6>Création de site web Comme espace De lecture et d’information</h6>
                <br/>
                <h6>Programmation : Asp.net, Bootstrap, Larvel ,
                    html, CSS, javascript, ajax</h6>
              </div>
        <Carousel.Caption>
          <h6>Year : 2021</h6>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <MDBCardImage
              src={emsi}
              alt='...'
              position='top'
            />

              <div class="carousel-caption d-flex flex-column justify-content-center h-100" style={{top: -30}}>
                <h4>Realisation d'une appliation mobile POKEDEX</h4>
                      <br/>
                <h6>Lister les Cartes Pokemon avec possibilite de voir les details</h6>
                <br/>
                <h6>Programmation : Flutter ,Java , Android , Volley Api ...</h6>
              </div>
        <Carousel.Caption>
          <h6>Year : 2022</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <MDBCardImage
              src={emsi}
              alt='...'
              position='top'
            />
              <div class="carousel-caption d-flex flex-column justify-content-center h-100" style={{top: -30}}>
                <h4>Chef de projet – Réalisation d’un site
                    web Pour Gestion Courrier/Chat-Boot
                      Consultation Médicale</h4>
                      <br/>
                <h6>Cahier De charge et Conception,Developement</h6>
                <br/>
                <h6>Programmation : PHP, HTML, CSS, MYSQL,
                laravel, Bootstrap, Python ,Intelligence
                Artificielle…</h6>
              </div>
        <Carousel.Caption>
          <h6>Year : 2022</h6>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </MDBRow>
    </div> 





    );};
    export {Pr};