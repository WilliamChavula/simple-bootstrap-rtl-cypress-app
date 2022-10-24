import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import GridContainer from '../containers/GridContainer';

const Character = ({ character }) => {
    const { image, name, origin } = character;

    return (
        <GridContainer>
            <Link to={`/character/${character.id}`}>
                <Card name={name} image={image} origin={origin} />
            </Link>
        </GridContainer>
    );
};

Character.propTypes = {
    character: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        origin: PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string,
        }),
    }).isRequired,
};

export default Character;
