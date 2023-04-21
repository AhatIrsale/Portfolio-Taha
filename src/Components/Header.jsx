import {React} from 'react';
import './contact.css';
import taha from '../images/taha.jpg'
import { MDBCol, } from 'mdb-react-ui-kit';
const Header = () => {
    return (
      <header className="text-center text-lg-start text-white gradient-custom" style={{backgroundColor : '#45526e'}}>
          
    
    <div className="container p-4 pb-0">
      
      <section className="">
        
        <div className="row">
                    <MDBCol   className='mb-4'>
                    <img alt="" src={taha} width="200"height="200"
                    className=" mx-auto d-block align-top rounded-circle" rounded  />
                </MDBCol>
                <div className='text-center '>
                <h1>Elasri Mohamed Taha</h1>
                  <h2>Etudiant 4eme annee</h2>
                   </div>
                 </div>
      </section>

      <hr className="my-3"/>
       </div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav mx-auto ">
          <li class="nav-item"><a class="nav-link link-primary" href="/home">Accueil</a></li>
          <li class="nav-item"><a class="nav-link link-primary" href="/about">Formations</a></li>
          <li class="nav-item"><a class="nav-link link-primary" href="/exp">Expériences</a></li>
          <li class="nav-item"><a class="nav-link link-primary" href="/cer">Certificats</a></li>
          <li class="nav-item"><a class="nav-link link-primary" href="/pr">Projets</a></li>
          <li class="nav-item"><a class="nav-link link-primary" href="/ct">Contact</a></li>
          </ul></nav>
      
  </header>
    );
  };

  export {Header};