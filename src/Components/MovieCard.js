import React from "react";
import './MovieCard.css'
import { FaStar } from 'react-icons/fa';




const MovieCard = ({ name, title, img, rating, genres, network, summary }) => {
    let innerRaiting
    if (rating) {
        innerRaiting = rating
    } else {
        innerRaiting = '-'
    }
    let innerImage
    if (img) {
        innerImage = img

    } else {
        innerImage = 'https://cdn.pixabay.com/photo/2014/04/03/11/07/clapperboard-311792_960_720.png'
    }
    let innerGenre
    if (genres) {
        innerGenre = genres.join(' ')
    } else {
        innerGenre = 'No Info'
    }
    let innerNetwork
    if (network) {
        innerNetwork = network
    }
    else { innerNetwork = 'No Info' }
    let innersummary;
    if (summary !== null) {

        innersummary = summary.replace(/<[^>]*>?/gm, '');

    } else {
        innersummary = "No description"
    }



    return (
        <div className="Card shadow-3 grow">
            <img src={`${innerImage}`} alt='film' />
            <h1>{name}</h1>
            <p>Genres: {innerGenre}</p>
            <p>Rating: {innerRaiting}<FaStar className="star" /></p>
            <div className="backCard">
                <p>Network: {innerNetwork}</p>
                <p className="summ">{innersummary}   </p>
            </div>

        </div>
    )


}

export default MovieCard;