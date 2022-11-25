import React, { useState } from 'react';

interface Props {
    name?: string
    value?: any
    label?: string
    error?: boolean
    helperText?: string
    handleChange?: any
    options?: any
    width?: string
    required?: boolean
    readonly?: boolean
    icon?: string
}

export const Filter: React.FC<Props> = ({
    handleChange,
    value,
    label,
    error,
    helperText,
    // options,
    width,
    name,
    required,
    readonly,
    icon,
}) => {

    let options = [
        {id: 1, value: 'Value1'},
        {id: 2, value: 'Value2'},
        {id: 3, value: 'Value3'},
    ];

    return (
        <>
            {
                value ?
                <span>Clear</span> : ''
            }
            <select id="countries"
            className="bg-[#F5F8FF] mt-2 h-[54px] border border-transparent hover:border-[1px] hover:border-[#AEB0CF]
            text-gray-900 text-sm rounded-lg focus:border-[1px] focus:border-[#AEB0CF] text-[#AEB0CF]
            focus:bg-[white] block w-full p-2.5 "
            required={required}
            value={value}
            onChange={handleChange}
            name={name}
            >
                <option className='bg-[#F5F8FF]' selected>Choose an option{label}</option>
                {
                    options.length > 0 ? (
                        options.map((item: any) => {
                            return <option className='bg-[#F5F8FF] text-[#27282D] hover:text-[#575ABC]' key={item.id} value={item.value}>{item.value}</option>
                        })
                    ) : (
                        <p className='text-white p-4 text-xl'>Not found !</p>
                    )
                }
                
            </select>
        </>
    )
}