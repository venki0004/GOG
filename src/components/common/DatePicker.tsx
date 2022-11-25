import React from 'react'
import Calendar from '../../assets/icons/Calendar.svg'

interface Props {
    label: string
    onChange?: any
    inputFormat?: string
    value?: any
    error?: any
    name?: any
    readonly?:any
  }

const DatePicker: React.FC<Props> = ({
    label,
    onChange,
    inputFormat = 'yyyy/MM/dd',
    value = null,
    error,
    readonly
  }) => {

    const today = new Date();

  return (
    <div>
        <div className="flex items-center justify-center">
            <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                <input type="text"
                  className="h-[54px] form-control block w-full px-10 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding 
                  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none"
                  placeholder="DD-MM-YYYY"
                  data-mdb-toggle="datepicker"
                  value={value}
                  onChange={onChange}
                  readOnly={readonly}
                />
                <button className="datepicker-toggle-button absolute top-4 left-3" data-mdb-toggle="datepicker">
                  <img className="datepicker-toggle-icon" src={Calendar} alt='' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default DatePicker