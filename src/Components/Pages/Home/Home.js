import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getListings } from '../../../shared/utilities/actionsUtilities';
import { Listing } from '../../Listing/Listing';

export const Home = () => {
    const [ listings, setlistings ] = useState([]);

    useEffect(() => {
        const listings = getListings('https://api.simplyrets.com/properties?status=Active');
        listings.then((data) => {
            setlistings(data);
        });
    }, []);

    return (
        <div className="listings">
            { listings.map((values, index) => {
                return <Listing key={index} {...values} />
            })}
        </div>
    )
}
