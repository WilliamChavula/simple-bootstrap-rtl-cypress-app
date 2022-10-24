// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Spinner from '../components/Spinner';
import useFetchRestAPI from '../helpers/useFetchRestAPI';

const CharacterDetail = () => {
    const { id } = useParams();
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    const { data, loading } = useFetchRestAPI(url);

    return loading ? (
        <Spinner />
    ) : (
        data && (
            <div className="container d-flex justify-content-center">
                <figure className="figure">
                    <img
                        src={data.image}
                        className="figure-img img-fluid rounded"
                        alt={data.name}
                        width="400"
                    />
                    <figcaption className="figure-caption" data-testid='figcaption'>
                        Name: {data.name}
                    </figcaption>
                    <figcaption className="figure-caption" data-testid='figcaption'>
                        Gender: {data.gender}
                    </figcaption>
                    <figcaption className="figure-caption" data-testid='figcaption'>
                        Species: {data.species}
                    </figcaption>
                    <figcaption className="figure-caption" data-testid='figcaption'>
                        Status: {data.status}
                    </figcaption>
                    <figcaption className="figure-caption" data-testid='figcaption'>
                        Location {data.location.name}
                    </figcaption>
                </figure>
            </div>
        )
    );
};

CharacterDetail.propTypes = {};

export default CharacterDetail;
