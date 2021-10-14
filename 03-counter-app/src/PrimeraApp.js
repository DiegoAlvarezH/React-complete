import React from 'react'

// componentes por clases

// componentes por funciones - functional components (hooks)

const PrimeraApp = ({saludo = 'hola mundo'}) => {
    //los booleanos no se imprimen 

    return ( 
        //fragment
        //clases
        <>
        <h1> { saludo }</h1>
        <p>mi primera aplicacion</p>
        </>
    );
    
}

export default PrimeraApp;