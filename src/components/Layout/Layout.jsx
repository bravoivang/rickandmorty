import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import ContentPage from '../ContentPage/ContentPage';
import Head from '../Head/Head';
import './layout.css'

const Layout = ({children, loading}) => {
    debugger;
    return (
        <div className="layout">
            <Head></Head>
            <p>Layout</p>
            <ContentPage loading={loading}>
                {children}
            </ContentPage>
            <Footer/>
        </div>
    );
};

Layout.propTypes = {
    
};

export default Layout;