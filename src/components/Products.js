import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { fetchAvailabilities, fetchProducts } from '../services/HttpClient';
import { availabilitiesLoaded } from '../redux/reducers';
import Product from './Product';
import { Table } from 'react-bootstrap';
import { getAvailability } from '../utils';


const Products = ({ resourcePath, productSelector, eventDispatcher }) => {
    const [manufacturers, setManufacturers] = useState([]);

    const products = useSelector(productSelector);
    const availabilities = useSelector(state => state.availabilities.contents);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            if (products.flat().length === 0) {
                const response = await fetchProducts(resourcePath);
                const uniqueManufacturers = Array.from(new Set(response.map(s => s.manufacturer)));
                setManufacturers(uniqueManufacturers);
                dispatch(eventDispatcher(response))
            } else {
                console.log('Resource exist in the state');
            }
        };

        fetchData();
    }, [dispatch, products, resourcePath, eventDispatcher]);

    useEffect(() => {
        const fetchData = async () => {
           
           const notFetchedManufacturers = manufacturers.filter(manufacturer => {
                const manufacturerAvailability = availabilities.find(availability =>
                    availability.manufacturer === manufacturer);
                return !manufacturerAvailability;
            });

            const availabilitiesPromises = notFetchedManufacturers.map(fetchAvailabilities)
            const availabilitiesResult = await Promise.all(availabilitiesPromises);
            dispatch(availabilitiesLoaded(availabilitiesResult));
        };
        fetchData();

    }, [dispatch, manufacturers, availabilities]);

    if (products.flat().length === 0) {
        const style = { position: "fixed", top: "50%", left: "50%" };
        return <Spinner animation="border" style={style} />
    }

    return <div className="row justify-content-center">
        <div className="col-auto">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Manufacturer</th>
                        <th>Color</th>
                        <th>Type</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(productItems => {
                        return productItems.map(product => <Product key={product.id}
                            product={product}
                            availability={getAvailability(availabilities, product)} />)
                    })}
                </tbody>
            </Table>
        </div>
    </div>
};
export default Products;
