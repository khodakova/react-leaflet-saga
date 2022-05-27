import SelectPoint from "../selectPoint";
import React from "react";

export const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        minWidth: 50
    },
    {
        title: 'Заказчик',
        dataIndex: 'customer',
        key: 'customer',
        minWidth: 250
    },
    {
        title: 'Номер заявки',
        dataIndex: 'number',
        key: 'number',
        minWidth: 100
    },
    {
        title: 'Точка загрузки',
        key: 'point1',
        minWidth: 100,
        render: (_: any, record: any) => {
            return <SelectPoint field='point1' application={record}/>
        },
    },
    {
        title: 'Точка разгрузки',
        key: 'point2',
        minWidth: 100,
        render: (_: any, record: any) => {
            return <SelectPoint field='point2' application={record}/>
        },
    },
];