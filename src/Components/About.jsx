import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCardFooter,
    MDBCol
  } from 'mdb-react-ui-kit';
import nm from '../images/nm.jpg';
import emsi from '../images/emsi.jpg';
import isgi from '../images/isgi.jpg';
import upm from '../images/upm.jpg';
  
const About = () => {
    return (
        <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={emsi}
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Ecole Marocaines Des Sciences D'ingenieurie</MDBCardTitle>
              <MDBCardText>
                2ème anneè Cycle D'ingénieure
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
            <small className='text-muted  '><h6 className='text-center'>2022 - 2023</h6></small>
          </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={upm}
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Universitè priveè Marrakech</MDBCardTitle>
              <MDBCardText>
              Licence En Informatique
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
            <small className='text-muted  '><h6 className='text-center'>2021 - 2022</h6></small>
          </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={isgi}
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Institut Supérieur Gestion et Informatique</MDBCardTitle>
              <MDBCardText>
              Diplôme spécialisé en Développement des systèmes d’information
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
            <small className='text-muted  '><h6 className='text-center'> 2019 - 2021 </h6></small>
          </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={nm}
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Nour ElMohmadia </MDBCardTitle>
              <MDBCardText>
              Baccalauréat sciences  Physiques
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
            <small className='text-muted  '><h6 className='text-center'>2018 - 2019</h6></small>
          </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
};
export {About};
