import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import './ApplicationTable.css';
import { useDispatch, useSelector } from "react-redux";
import {
    getApplicationsSelector,
    getErrorSelector,
    getPendingSelector,
    getSelectedApplication
} from "../../store/application/selectors";
import { fetchApplicationRequest, setSelectedApplication } from "../../store/application/actions";
import { fetchPointsRequest, setPoint1, setPoint2 } from "../../store/points/actions";
import { getPointsSelector } from "../../store/points/selectors";
import { IApplication } from "../../store/application/types";
import { columns } from "./columns";
import Spinner from "../spinner/Spinner";

/**
 * Таблица с заявками
 * @constructor
 */
const ApplicationTable = () => {
    const selectedApplication = useSelector(getSelectedApplication);
    const dispatch = useDispatch();
    const pending = useSelector(getPendingSelector);
    const applications = useSelector(getApplicationsSelector);
    const error = useSelector(getErrorSelector);
    const points = useSelector(getPointsSelector);

    useEffect(() => {
        dispatch(fetchPointsRequest());
        dispatch(fetchApplicationRequest())
    }, []);

    useEffect(() => {
        const newPoint1 = points.find(item => item.id === selectedApplication?.point1);
        if (newPoint1)
            dispatch(setPoint1({ point: newPoint1 }));
        const newPoint2 = points.find(item => item.id === selectedApplication?.point2);
        if (newPoint2)
            dispatch(setPoint2({ point: newPoint2 }));
    }, [selectedApplication]);

    const handleClick = (application: IApplication) => {
        if (application.id !== selectedApplication?.id) {
            dispatch(setSelectedApplication({ selectedApplication: application }));
            const point1 = points.find(item => item.id === application.point1);
            if (point1)
                dispatch(setPoint1({ point: point1 }));
            const point2 = points.find(item => item.id === application.point2);
            if (point2)
                dispatch(setPoint2({ point: point2 }))
        }
    };

    if (pending) {
        return <div className='table'><Spinner/></div>
    }

    if (error) {
        return <div>error</div>
    }

    return (
        <Table
            rowKey='id'
            className='table'
            columns={ columns }
            dataSource={ applications }
            rowClassName={ (record) => record.id === selectedApplication?.id ? 'table__item_active' : '' }
            onRow={ (record,) => {
                return {
                    onClick: () => {
                        handleClick(record)
                    },
                };
            } }
            scroll={ { x: 500 } }
        />
    );
};

export default ApplicationTable;
