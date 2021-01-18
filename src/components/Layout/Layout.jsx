import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({children, loading}) => {
    return (
        <div>
            <Head></Head>
            <ContentPage loading={laoding}>
                {children && children}
            </ContentPage>
        </div>
    );
};

Layout.propTypes = {
    
};

export default Layout;