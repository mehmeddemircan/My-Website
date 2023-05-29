import { Select } from 'antd'
import React from 'react'

const MultipleSelect = ({value,onChange,children}) => {
  return (
    <Select
    bordered={false}
    mode="multiple"
    allowClear
    style={{
      width: '100%',
    }}
    placeholder="Please select"
    value={value}
    onChange={onChange}
    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
   
  >
    {children}
  </Select>
  )
}

export default MultipleSelect