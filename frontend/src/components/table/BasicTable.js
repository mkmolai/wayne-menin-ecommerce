import React, {useMemo, useState} from 'react';
import {useTable, usePagination} from 'react-table';
import {COLUMNS} from '../../helpers/columns';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
//import '../style/products-page/products_page.css'
import { useEffect } from 'react';
import { productsList } from '../../actions/productActions';
import { Button } from 'react-bootstrap';

const BasicTable = ({openModal}) => {

    const dispatch = useDispatch();

    const [items, setItems] = useState([])
    const {products} = useSelector(state => state.productList);
 
    useEffect(() => {
        dispatch(productsList())
    }, [])

    useEffect(() => {
        if(products)
        {
            setItems([...products])
        }
        
    }, [products])


    const columns = useMemo(()=> COLUMNS, [])
    const data = useMemo(()=> [...items], [items])

    const tableHooks = (hooks) => {
        hooks.visibleColumns.push(columns => [
            ...columns, 
            {
                id: 'Edit',
                Header: 'Edit',
                Cell: ({row}) => (
                    <Button onClick={()=> openModal('edit', row.values)}>Edit</Button>
                    )
            },
            {
                id: 'Delete',
                Header: 'Delete',
                Cell: ({row}) => (
                    <Button onClick={()=> openModal('delete', row.values)}>Delete</Button>
                    )
            },
        ])
    }
    const instance = useTable({
        columns,
        data,
        initialState: {pageSize: 5}
    }, usePagination, tableHooks)

    const {getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, gotoPage, pageCount, setPageSize, state, prepareRow} = instance;
    //use page instead of rows

    const {pageIndex, pageSize, } = state;
    return (
        <>
       
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((item) => 
                            <tr {...item.getHeaderGroupProps()}>
                                {
                                    item.headers.map(column =>
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    )}
                            </tr>
                        )}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        })
                                    }

                                </tr>
                            )
                        })
                    }
                    
                    
                </tbody>
               
            </table>


            <div className="pagination">
                <span>
                    Page{' '} <strong>{pageIndex+1} of {pageOptions.length}</strong> {' '}
                </span>
                <span>
                    | Go to Page{' '}
                    <input 
                        type="number" 
                        defaultValue={pageIndex + 1} 
                        onChange={e => {
                            const pageNumber = e.target.value? Number(e.target.value) - 1 : 0
                            gotoPage(pageNumber)
                        }}
                        width = '50px'
                    />
                </span>
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [5, 10, 15, 25, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                show {pageSize}
                            </option>
                        ))
                    }
                </select>
                
                <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</Button>
                <Button onClick={previousPage} disabled={!canPreviousPage}>Previous</Button>
                <Button onClick={nextPage} disabled={!canNextPage}>Next</Button>
                <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</Button>
            </div>
            
        </>
    )
}

export default BasicTable
