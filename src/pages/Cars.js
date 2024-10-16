import {React, useState, useEffect} from "react";
import Api from '../Api';

function Cars() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        Api.getFromApi().then((response) => {
            setCars(response.data)
        })
    }, []);
    return (
        <div className="cars">
            {cars.map((car) => (
                <div className="car" key={car.id}>
                    <p>Make: {car.make}</p>
                    <p>Model: {car.model}</p>
                    <p>Year: {car.year}</p>
                    <p>Price: {car.price}$</p>
                </div>
            ))}
        </div>
    );
}

export default Cars;