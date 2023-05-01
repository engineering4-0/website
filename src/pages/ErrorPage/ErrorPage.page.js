import React from 'react';
import "./ErrorPage.css";
import { Button } from '@carbon/react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  
  const navigate = useNavigate();

  return (
    <section className='error-page-container'>
        <h1 className="fluid-display-02">Oops,</h1>
        <h1 className='fluid-display-02'>Page Not Found!</h1>
        <Button onClick={() => navigate('/')}>Visit Home Page</Button>
    </section>
  )
};

export default ErrorPage;
