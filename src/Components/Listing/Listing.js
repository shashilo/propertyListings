import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './Listing.scss';
import { states } from '../../shared/data/states';

export const Listing = ({ photos, property, listPrice, address, listDate, mlsId }) => {
    const [ isFav, setIsFav ] = useState(false);

    useEffect(() => {
        if (localStorage.getItem(mlsId)) {
            setIsFav(true);
        }
    }, [])

    // Calcalucate how many bathrooms
    const bathCalc = (full, half, threeQuarters) => {
        let bathTotal = full;
        
        if (half > 0) {
            bathTotal += half * .5;
        }
        
        if (threeQuarters > 0) {
            bathTotal += threeQuarters * .75;
        }

        return bathTotal;
    }

    // Display the pricing as comma separated
    const parsePrice = price => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }

    // Check to display property as a favorite or not
    const showFav = () => {
        if (isFav) {
            return <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3125 0.875C25.905 0.875 22.6346 2.46125 20.5 4.96792C18.3654 2.46125 15.095 0.875 11.6875 0.875C5.65585 0.875 0.916687 5.61417 0.916687 11.6458C0.916687 19.0483 7.57502 25.08 17.6604 34.245L20.5 36.8104L23.3396 34.2254C33.425 25.08 40.0834 19.0483 40.0834 11.6458C40.0834 5.61417 35.3442 0.875 29.3125 0.875Z" fill="#DB0000"/>
            </svg>
        } else {            
            return <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3125 0.875C25.905 0.875 22.6346 2.46125 20.5 4.96792C18.3654 2.46125 15.095 0.875 11.6875 0.875C5.65582 0.875 0.916656 5.61417 0.916656 11.6458C0.916656 19.0483 7.57499 25.08 17.6604 34.245L20.5 36.8104L23.3396 34.2254C33.425 25.08 40.0833 19.0483 40.0833 11.6458C40.0833 5.61417 35.3442 0.875 29.3125 0.875ZM20.6958 31.3271L20.5 31.5229L20.3042 31.3271C10.9825 22.8867 4.83332 17.3054 4.83332 11.6458C4.83332 7.72917 7.77082 4.79167 11.6875 4.79167C14.7033 4.79167 17.6408 6.73042 18.6787 9.41333H22.3408C23.3592 6.73042 26.2967 4.79167 29.3125 4.79167C33.2292 4.79167 36.1667 7.72917 36.1667 11.6458C36.1667 17.3054 30.0175 22.8867 20.6958 31.3271Z" fill="white"/>
            </svg>;
        }
    }

    // As user clicks on the heart, check to make it a favorite or remove it
    const updateFav = () => {
        if (isFav) {
            localStorage.removeItem(mlsId);
            setIsFav(false);
        } else {
            localStorage.setItem(mlsId, 'MLSID')
            setIsFav(true);
        }
    }

    return (
        <div className="listing">
            <div className="listing__image">
                <div class="listing__fav" onClick={() => updateFav()}>
                    { showFav() }
                </div>

                <img src={ photos[0] } alt="" />
            </div>
            

            <div className="listing__rooms">
                <span>{ property.bedrooms } BR</span> 
                <span>{ bathCalc(property.bathsFull, property.bathsHalf, property.bathsThreeQuarte)} BATH</span> 
                <span>{ property.area } Sq Ft</span>
            </div>
            <div className="listing__price">
                ${ parsePrice(listPrice) }
            </div>
            <div className="listing__address">
                { address.streetNumberText } { address.streetName }, { address.city }, { states[address.state] }
            </div>
            <div className="listing__date">
                Listed: { moment(listDate).format("M/DD/YY") }
            </div>
        </div>
    )
}
