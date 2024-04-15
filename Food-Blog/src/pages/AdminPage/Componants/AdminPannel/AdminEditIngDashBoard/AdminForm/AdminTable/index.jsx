import React, { useEffect } from 'react';
import { Table } from 'flowbite-react';
import { fetchProducts } from '../../../../../../../api';
import { selectProducts } from '../../../../../../../reducers/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
function AdminTable() {
    const dispatch = useDispatch();
    const apiData=useSelector(selectProducts)
    
    useEffect(()=>{
        if(apiData.length===0){
        dispatch(fetchProducts());
        console.log("Hai Bro")
    }
    },[dispatch,apiData])
    return (
        <>
            <p className='text-center'>Product Details</p>
            <Table>
                <Table.Body className="divide-y">
                    {apiData.map((obj) => (
                        <Table.Row key={obj.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {obj.title}
                            </Table.Cell>
                            <Table.Cell>{obj.category}</Table.Cell>
                            <Table.Cell>{obj.price}</Table.Cell>
                            <Table.Cell><img className='h-[40px]' src={obj.image} alt="" /></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </>
    );
}

export default AdminTable;
