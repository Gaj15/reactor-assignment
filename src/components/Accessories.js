import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAvailabilities, fetchProducts } from '../services/HttpClient';
import { accessoriesLoaded, availabilitiesLoaded  } from '../redux/reducers';
import Product from './Product';
import { getAvailability } from '../utils';

const Shirts = () => {
    const [manufacturers, setManufacturers] = useState([]);
    const shirts = useSelector(state => state.products.accessories);
    const availabilities = useSelector(state => state.availabilities.contents);
    const dispatch = useDispatch();
 
    useEffect(() => {
        const fetchData = async () => {
            if (shirts.length === 0) {
                const response =  await fetchProducts('accessories');
                const uniqueManufacturers = Array.from(new Set(response.map(s => s.manufacturer)));
                setManufacturers(uniqueManufacturers);
                dispatch(accessoriesLoaded(response))
            } else {
                console.log('Jackets exist in the state');
            }
        };
        
        fetchData();
    }, [dispatch]);
    
    useEffect(() => {
        const fetchData = async () => {
            const promises = manufacturers.map(manufacturer => fetchAvailabilities(manufacturer));
            const availabilities = await Promise.all(promises);
            dispatch(availabilitiesLoaded(availabilities));
        };
        fetchData();
        
    }, [dispatch, manufacturers]);



    return <ul className="products">
        {
            shirts.map(product => <Product key={product.id} 
                product={product} 
                iconName='accessories' 
                availability={getAvailability(availabilities, product)}/>)
        }
    </ul>
};
export default Shirts;
