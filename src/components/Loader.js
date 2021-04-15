import { faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Loader = () => {
    return (
        <div className="loader">
                <FontAwesomeIcon className="loader__item" icon={faSync} spin />
                <p>Loading...</p>
        </div>
    );
}
 
export default Loader