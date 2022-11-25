import React from 'react'

interface Props {
    name?: string;
    items: any;
    onChange: any;
    size?: any;
    checked?: boolean;
    row?: boolean;
    defaultValue?:string
    label?: string
    disabled?: boolean
}

export const RadioButton: React.FC<Props> = ({
    items,
    name,
    onChange,
    checked,
    defaultValue,
    row,
    label,
    disabled,
  }) => {
  return (
    <div className='w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-[#575abc1A]'>
        <input
            className='w-[16px] h-[16px]'
            type="radio"
            name={name}
            checked={checked}
            onChange={onChange}
            defaultValue={defaultValue}
        />
        <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">{label}</label>
    </div>
  )
}