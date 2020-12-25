import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
  
const PageNotFound = () => {
  
  return (
    <div>
      <img
        src='http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png'
        alt='Page non trouvée'
      />
      <h1>Hey, cette page n'existe pas !</h1>
      <Link to={`${routes.home}`} className='btn btn-primary'>
        Retourner à l'accueil
      </Link>
    </div>
  );
}
  
export default PageNotFound;