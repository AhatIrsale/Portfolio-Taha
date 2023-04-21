import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
const Cer = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
    return (
      <div className="container  ">
          <br/>
        <div class="d-grid gap-2">

  <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='btn btn-light btn-lg btn-block'
      >
        Emises En Avril 2021
      </Button>
      <Collapse in={open}>
        <div  ClassName='p-3 mb-2 bg-success text-white'>
            CERTIFICAT - cours PHP
        </div>
      </Collapse>
    </>




    <>
      <Button
        onClick={() => setOpen1(!open1)}
        aria-controls="example-collapse-text"
        aria-expanded={open1}
        className='btn btn-light btn-lg btn-block'
      >
        Emises En Janvier 2023  Université de Hong Kong(ST), Virgine .
      </Button>
      <Collapse in={open1}>
        <div id="example-collapse-text">
        CERTIFICAT - BOOTSTRAP
        <hr/>
        CERTIFICAT - REACT
        <hr/>
        CERTIFICAT - NODE-MONGODB
        <hr/>
        CERTIFICAT - DEV-OPS

        </div>
      </Collapse>
    </>



    <>
      <Button
        onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-text"
        aria-expanded={open2}
        className='btn btn-light btn-lg btn-block'
      >
        Emises En Février 2023 (Academy LearnQuest) - (IBM)
      </Button>
      <Collapse in={open2}>
        <div id="example-collapse-text">
        CERTIFICAT- Spring
        <hr/>
        CERTIFICAT - PY Data Science-AI
        </div>
      </Collapse>
    </>
  </div>

  <br/>

  


    </div>
    


    
  

    );

};
export {Cer};