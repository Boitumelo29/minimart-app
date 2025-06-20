
const BASE_URL = 'https://fakestoreapi.com';

export const fetchAllProducts = async() => {
    try{
        const response = await fetch(`${BASE_URL}/products`);

        if(!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        return await response.json();
    }catch(error){
        console.error('Failed to fetch all products:', error);
        throw error;
    }
};