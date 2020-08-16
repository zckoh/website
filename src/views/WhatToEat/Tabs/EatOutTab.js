import React from "react";
import GoogleMap from '../../../components/GoogleMap.js';
import '../../../assets/css/map.css';

const EatOutTab = () => {
    return (
        <div>
            <h3>
                Eating Out!
            </h3>
            <GoogleMap
                id="myMap"
                options={{
                center: { lat: 52.1942, lng: 0.1374 },
                zoom: 14
                }}
            />
        </div>
    );
}

export default EatOutTab;