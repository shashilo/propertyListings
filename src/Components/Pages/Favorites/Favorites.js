import React from 'react'
import { useEffect, useState } from 'react';
import { getMLSListing } from '../../../shared/utilities/actionsUtilities';
import { Listing } from '../../Listing/Listing';

export const Favorites = () => {
    const [ userFavs, setUserFavs ] = useState([]);

    useEffect(() => {
        for (const key in localStorage) {
            if (localStorage.hasOwnProperty(key) && localStorage.getItem(key) === 'MLSID') {
                const listing = getMLSListing('https://api.simplyrets.com/properties', key );
                 listing.then((data) => {
                    setUserFavs(prev => [...prev, <Listing {...data } />])
                 });
            }
        }

    }, []);

    return (
        <div className="listings">
            { userFavs }
        </div>
    )
}
