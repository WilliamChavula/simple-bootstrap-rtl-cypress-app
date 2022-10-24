const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div
                className="spinner-border spinner-border-lg text-danger justify-content-center align-items-center"
                role="status">
                <span className="sr-only" data-testid="spinner">
                    Loading...
                </span>
            </div>
        </div>
    );
};

export default Spinner;
