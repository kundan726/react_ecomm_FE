import React from 'react'
import { ORDER_LIST, ORDERLIST_TABLE_HEAD } from '../constants/constants'
export default function OrderList() {
    const getStatusBgClass = (status) => {
        switch (status) {
          case 'Delivered':
            return 'bg-green-500';
          case 'Canceled':
            return 'bg-gray-500';
          case 'Pending':
            return 'bg-orange-500';
          case 'Shipped':
            return 'bg-blue-500';
          case 'Completed':
                return 'bg-green-500';
          default:
            return 'bg-gray-500'; // Default background color for unknown status
        }
      };
      
  return (
    <div className='overflow-x-auto'>
        <table className='min-w-full border-collapse border border-gray-300 rounded-2xl '>
            <thead className='p-4'>
                <tr>
                    {ORDERLIST_TABLE_HEAD.map((thead)=>(
                        <th className='border p-4'>{thead}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    ORDER_LIST.map((order)=>(
                        <tr className='' key={order?.orderId}>
                            <td className='border p-4 text-center'>{order?.orderId}</td>
                            <td className='border p-4'>{order?.productName}</td>
                            <td className='border p-4'>{order?.customerName}</td>
                            <td className={`border rounded-lg p-4 text-white text-center ${getStatusBgClass(order?.orderStatus)}`}>{order?.orderStatus}</td>
                            <td className='border p-4 text-center'>{order?.orderDateTime}</td>
                            <td className='border p-4 text-center'>{order?.totalAmount}</td>
                            <td className={`border rounded-lg p-4 text-white text-center ${getStatusBgClass(order?.paymentStatus)}`}>{order?.paymentStatus}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
