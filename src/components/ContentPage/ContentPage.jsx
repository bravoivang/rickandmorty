import React from 'react';
import PropTypes from 'prop-types';
import './contentPage.css';

const ContentPage = ({children}) => {
    return (
        <div className="contentPage">
            Content Page
            {children}
        </div>
    );
};

ContentPage.propTypes = {
    
};

export default ContentPage;