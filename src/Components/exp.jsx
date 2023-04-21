import React , { useState} from 'react';
import { CCard, CCardBody , CCardTitle ,CCardText ,CButton} from '@coreui/react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../index.css'

import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBTypography,
    MDBContainer
  } from 'mdb-react-ui-kit';




  
const Exp = () => {
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
        <MDBCol>
          <MDBCard>
          <CCard style={{ width: '18rem' }}>
                    <CCardBody>
                        <CCardTitle>Stage Fin Licence</CCardTitle>
                        <CCardText>ChatBoot-Conversationnel</CCardText>
                        <CButton  onClick={handleShow}>Plus d'information...</CButton>
                                
                                <>
                    

                    <Modal
                        show={show}
                        onHide={handleClose}
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                        <Modal.Title>Stage Fin Licence</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                        <MDBContainer className="py-5 h-200">
                        <MDBRow className="justify-content-center align-items-center h-300">
                            <MDBCol lg="12" className="mb-4 mb-lg-0">
                            <MDBCard className="mb-4" style={{ borderRadius: '.5rem' }}>
                                <MDBRow className="g-2">
                                
                                
                                <MDBCol md="8">
                                    <MDBCardBody className="p-10">
                                    <MDBTypography tag="h6">Information</MDBTypography>
                                    <hr className="mt-0 mb-8" />
                                    <MDBRow className="pt-12">
                                        <MDBCol size="6" className="mb-3">
                                        <MDBTypography tag="h6"> Lieu</MDBTypography>
                                        <MDBCardText className="text-muted">Monark - Marrakech</MDBCardText>
                                        </MDBCol>
                                        <MDBCol size="6" className="mb-3">
                                        <MDBTypography tag="h6">Mission</MDBTypography>
                                        <MDBCardText className="text-muted">ChatBoot-Conversation</MDBCardText>
                                        </MDBCol>
                                        <MDBCol size="8" className="mb-3">
                                        <MDBTypography tag="h6">programation</MDBTypography>
                                        <MDBCardText className="text-muted">Node js,Vue Js , Nest Js
                                            ,Heroku,Ngrok,DialogFlow, Intelligence
                                            Artificielle</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBTypography tag="h6">other Informatons</MDBTypography>
                                    <hr className="mt-0 mb-4" />
                                    <MDBRow className="pt-2">
                                        <MDBCol size="12" className="mb-4">
                                        
                                        
                                        <MDBTypography tag="h6">Date Debut:</MDBTypography>
                                        <MDBCardText className="text-muted">01 Juin 2022</MDBCardText>
                                        </MDBCol>
                                        <MDBCol size="6" className="mb-3">
                                        <MDBTypography tag="h6">Date Fin:</MDBTypography>
                                        <MDBCardText className="text-muted">01 Aout 2022</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>

                                    
                                    </MDBCardBody>
                                </MDBCol>
                                </MDBRow>
                            </MDBCard>
                            </MDBCol>
                        </MDBRow>
                        </MDBContainer>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                        </Modal.Footer>
                    </Modal>
                    </>
                    </CCardBody>
                    </CCard>
            




          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            

          <CCard style={{ width: '18rem' }}>
  <CCardBody>
    <CCardTitle>Stage Fin Formation</CCardTitle>
    <CCardText>Une application au profit du doyen de faculté
de sciences et techniques</CCardText>
    <CButton  onClick={handleShow}>Plus d'information...</CButton>
             
             <>
  

   <Modal
     show={show}
     onHide={handleClose}
     keyboard={false}
   >
     <Modal.Header closeButton>
       <Modal.Title>Stage Fin Licence</Modal.Title>
     </Modal.Header>
     <Modal.Body >
     <MDBContainer className="py-5 h-200">
       <MDBRow className="justify-content-center align-items-center h-300">
         <MDBCol lg="12" className="mb-4 mb-lg-0">
           <MDBCard className="mb-4" style={{ borderRadius: '.5rem' }}>
             <MDBRow className="g-2">
            
               
               <MDBCol md="8">
                 <MDBCardBody className="p-10">
                   <MDBTypography tag="h6">Information</MDBTypography>
                   <hr className="mt-0 mb-8" />
                   <MDBRow className="pt-12">
                     <MDBCol size="6" className="mb-3">
                       <MDBTypography tag="h6"> Lieu</MDBTypography>
                       <MDBCardText className="text-muted">FST - Marrakech</MDBCardText>
                     </MDBCol>
                     <MDBCol size="6" className="mb-3">
                       <MDBTypography tag="h6">Mission</MDBTypography>
                       <MDBCardText className="text-muted">Une application au profit du doyen de faculté
de sciences et techniques</MDBCardText>
                     </MDBCol>
                     <MDBCol size="8" className="mb-3">
                       <MDBTypography tag="h6">programation</MDBTypography>
                       <MDBCardText className="text-muted">c# , c++ , guna2 , ado.net , SQL server</MDBCardText>
                     </MDBCol>
                   </MDBRow>

                   <MDBTypography tag="h6">other Informatons</MDBTypography>
                   <hr className="mt-0 mb-4" />
                   <MDBRow className="pt-2">
                     <MDBCol size="12" className="mb-4">
                       
                       
                       <MDBTypography tag="h6">Date Debut Stage:</MDBTypography>
                       <MDBCardText className="text-muted">01 Mai 2021</MDBCardText>
                     </MDBCol>
                     <MDBCol size="6" className="mb-3">
                       <MDBTypography tag="h6">Date Fin Stage:</MDBTypography>
                       <MDBCardText className="text-muted">01 Septembre 2021</MDBCardText>
                     </MDBCol>
                   </MDBRow>

                  
                 </MDBCardBody>
               </MDBCol>
             </MDBRow>
           </MDBCard>
         </MDBCol>
       </MDBRow>
     </MDBContainer>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}>
         Close
       </Button>
       <Button variant="primary">Understood</Button>
     </Modal.Footer>
   </Modal>
 </>
  </CCardBody>
</CCard>



          </MDBCard>
        </MDBCol>
        


      </MDBRow>


        );
    };
    export {Exp};