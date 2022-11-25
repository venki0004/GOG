import React from 'react'

interface Props {
    defaultChecked?: boolean
    handleCheck: any
    ischecked?: boolean
    label?: string
    name: string
    // color: string
    disabled?: boolean
  }

export const CustomCheckbox: React.FC<Props> = ({
    defaultChecked,
    handleCheck,
    ischecked,
    label,
    name,
    // color,
    disabled,
  }) => {
  return (
    <div>
        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-[#575abc1A]">
          <input
            className={`w-[16px] h-[16px] rounded border-[1px] border-[#AEB0CF]
            ${ischecked ? 'bg-[#575ABC]' : 'bg-[#ffffff]'} hover:bg-[red]`}
            type="checkbox"
            name={name}
            id={label}
            checked={ischecked}
            defaultChecked={defaultChecked}
            onChange={handleCheck}
          />
        </div>
    </div>
  )
}