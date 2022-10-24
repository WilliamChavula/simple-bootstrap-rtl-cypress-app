import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavBar = ({ brandTitle }) => {
    return (
        <header className="mb-4">
            <nav className="navbar sticky-top navbar-dark bg-dark">
                <div className="container">
                    <NavLink to="/">
                        <h1 className="navbar-brand" data-testid="page-title">
                            {brandTitle}
                        </h1>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

NavBar.propTypes = {
    brandTitle: PropTypes.string,
};

export default NavBar;
