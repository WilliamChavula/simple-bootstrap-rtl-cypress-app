import PropTypes from 'prop-types';

import Character from '../features/Character';
import Spinner from '../components/Spinner';

import withFetchRestAPI from '../helpers/withFetchRestAPI';

const CharactersList = ({ data, loading }) => {
    return loading ? (
        <Spinner />
    ) : (
        <main className="container">
            <div className="row" data-testid="character-container">
                {data &&
                    data.results.map(char => (
                        <Character key={char.id} character={char} />
                    ))}
            </div>
        </main>
    );
};

export default withFetchRestAPI(
    CharactersList,
    'https://rickandmortyapi.com/api/character'
);

CharactersList.propTypes = {
    data: PropTypes.object,
    loading: PropTypes.bool.isRequired,
};
