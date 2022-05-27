import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

/**
 * Роутинг для карты по точкам
 * @param props
 * @constructor
 */
export default function Routing(props: any) {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const routingControl = L.Routing.control({
            routeWhileDragging: true
        }).addTo(map);

        if (props.point1 && props.point1) {
            routingControl.setWaypoints([L.latLng(props.point1?.x || 45, props.point1?.y || 45),
                L.latLng(props.point2?.x || 45, props.point2?.y || 45)])
        }

        return () => {
            map.removeControl(routingControl);
        }
    }, [map, props.point1, props.point2]);

    return null;
}
