import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPendingSelector, getPointsSelector } from "../../store/points/selectors";
import { Select } from 'antd';
import { setPoint1, setPoint2 } from "../../store/points/actions";
import { IApplication } from "../../store/application/types";
import { changeApplication } from "../../store/application/actions";

const {Option} = Select;

interface SelectPointProps {
    field: 'point1' | 'point2'
    application: IApplication
}

/**
 * Выбор точек
 * @param field - какая точка выбрана
 * @param application - заявка
 * @constructor
 */
const SelectPoint: React.FC<SelectPointProps> = ({field, application}) => {
    const pending = useSelector(getPendingSelector);
    const points = useSelector(getPointsSelector);
    const dispatch = useDispatch();

    const handleChange = (pointId: number) => {
        const point = points.find(item => item.id === pointId);
        if (point) {
            if (field === 'point1') {
                dispatch(setPoint1({point: point}));
                dispatch(changeApplication({
                    changedApplication: {
                        ...application,
                        point1: point.id
                    }
                }))
            } else {
                dispatch(setPoint2({point: point}));
                dispatch(changeApplication({
                    changedApplication: {
                        ...application,
                        point2: point.id
                    }
                }))
            }
        }
    };

    return (
        <Select
            defaultValue={application[field]}
            style={{
                width: 120,
            }}
            loading={pending}
            onChange={handleChange}
        >
            {
                points.length > 0
                && points.map(item =>
                    <Option key={item.id} value={item.id}>{item.name}</Option>
                )
            }
        </Select>
    );
};

export default SelectPoint;
