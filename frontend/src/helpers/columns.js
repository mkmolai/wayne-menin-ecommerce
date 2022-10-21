import React, {useMemo, useState} from 'react';

export const COLUMNS = [
    {
        Header: 'ID',
        accessor: 'Id',
    },
    {
        Header: 'Name',
        accessor: 'Name',
    },
    {
        Header: 'Category',
        accessor: 'Category',
    },
    {
        Header: 'Description',
        accessor: 'Description',
    },
    {
        Header: 'Image',
        accessor: 'Image',
        Cell: ((value) => <img src={`http://localhost:9000/${value}`} />)
    },
    {
        Header: 'Price',
        accessor: 'Price',
    },
]