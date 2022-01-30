import React from "react";
import {useDispatch} from "react-redux";

import {deleteCar} from "../../store/car.slice";
import "./Car.css";

const Car = ({car}) => {
    const dispatch = useDispatch();
    return (
        <div className="Car">
            <div>ID: {car.id}</div>
            <div>Model: {car.model}</div>
            <div>Price: {car.price}</div>
            <div>Year: {car.year}</div>
            <button onClick={() => dispatch(deleteCar({id: car.id}))}>Delete</button>
            <button>Update</button>
        </div>
    );
};

export default Car;