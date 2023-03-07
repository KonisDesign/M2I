import React from 'react';
import CareScale from '../CareScaleComponents/CareScale';
import './FormationCard.css';

const FormationCard = ({cours, index, AddToCart}) => {
    return (
        <div>
            <div className="card formation" key={index}>
                <div className="card-title strong">
                    {cours.name}
                </div>
                <div>
                    <img className='img' src={cours.logo} alt="Logo du cours"/>
                </div>
                <div className="category">
                    <span>Catégorie : <b>{cours.category}</b></span>
                </div>
                <div className="difficulty">
                    <span className="diff-label">Difficulté :</span>
                    <CareScale scaleValue={cours.difficulte}/>
                </div>
                <div className="price">
                    <span>Prix : <b>{cours.price}</b></span>
                </div>
                <button className='btn btn-secondary' onClick={() => AddToCart(cours.name, cours.price)}>Ajouter au panier</button>
            </div>
        </div>
    );
};

export default FormationCard;