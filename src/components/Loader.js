import { faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Loader = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faSync} />
            <p>
                Loading...
            </p>
        </div>
    );
}
 
export default Loader