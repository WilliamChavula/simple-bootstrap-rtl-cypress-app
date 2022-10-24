import PropTypes from 'prop-types';

const GridContainer = ({ children }) => {
    return <div className="col-xs-12 col-sm-6 col-md-4 mb-2">{children}</div>;
};

GridContainer.propTypes = {
    children: PropTypes.node,
};
export default GridContainer;
