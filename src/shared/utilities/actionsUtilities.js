const defaultHeaders = () => {
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic c2ltcGx5cmV0czpzaW1wbHlyZXRz',
    };
    
    return new Headers(headers);
};

// Get a list of properties
export const getListings = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: defaultHeaders(),
        });
        
        const listings = await response.json();
        return listings;
    } catch(error) {
        throw new Error(error);
    }
};

// Get a individual property
export const getMLSListing = async (url, mlsid) => {
    try {
        const response = await fetch(`${url}/${mlsid}`, {
            method: 'GET',
            headers: defaultHeaders(),
        });
        
        const listing = await response.json();
        return listing;
    } catch(error) {
        throw new Error(error);
    }
};