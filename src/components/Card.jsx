import PropTypes from 'prop-types';

const Card = ({ image, name, origin }) => {
    return (
        <div className="card" data-testid='card'>
            <img src={image} alt={name} width="300" className="card-img-top" />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p>Origin: {origin && origin.name}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    origin: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }),
};

export default Card;
