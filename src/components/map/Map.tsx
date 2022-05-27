import React, { useEffect, useState } from 'react';
import './Map.css'
import { MapContainer, Marker, TileLayer, Tooltip, useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useSelector } from "react-redux";
import { getPoint1, getPoint2 } from "../../store/points/selectors";
import { IPoint } from "../../store/points/types";
import Routing from "../routing/Routing";

/**
 * Карта leaflet
 * @constructor
 */
const Map = () => {
    const point1 = useSelector(getPoint1);
    const point2 = useSelector(getPoint2);
    const [center, setCenter] = useState<LatLngExpression>([45, 45]);
    const [places, setPlaces] = useState<Array<IPoint>>([]);

    // перерисовка карты
    function ChangeView({center}: any) {
        const map = useMap();
        map.setView(center);
        return null;
    }

    useEffect(() => {
        if (point1 && point2) {
            setCenter([point1?.x, point1?.y]);
            setPlaces([point1, point2])
        }
    }, [point1, point2]);

    return (
        <div className="map">
            <MapContainer
                center={center}
                zoom={10}
                zoomControl={true}
                style={{height: "100%"}}
            >
                <ChangeView center={center}/>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Routing point1={point1} point2={point2}/>
                {
                    places.length > 0 &&
                    places.map((point: IPoint) => (
                        <Marker
                            key={point.name}
                            position={[point.x, point.y]}
                        >
                            <Tooltip>{point.name}</Tooltip>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    );
};

export default Map;
