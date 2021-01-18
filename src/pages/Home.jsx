import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout/Layout';
import Search from '../components/Search/Search';
import Results from '../components/Results/Results';
import { getCharacter } from '../services/searchServices';

const Home = props => {

    useEffect( () => {
        console.log("useEffect")
        getCharacter();
    },[]);

    return (
        <div>
            Hola Home! 
            <Layout loading>
                <Search/>
                <Results/>
            </Layout>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;