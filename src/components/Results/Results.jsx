import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './results.css';

const Results = props => {
    const renderCard = (a) => {
        return (
            <Card>
                Card
            </Card>
        )
    }
    return (
        <div className="results">
            Results
            <div>
                {["","",""].map( a => (renderCard(a)))}
            </div>
        </div>
    );
};

Results.propTypes = {
    
};

export default Results;