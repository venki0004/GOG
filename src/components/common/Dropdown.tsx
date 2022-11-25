import React from 'react'

const Dropdown = () => {

    const emp_info = {
        emp_dbid: '',
        emp_uid: '',
    }

  return (
    <>
        <div>
            <p>Employee Information</p>
            <div>
                <p className='text-[#27282D80]'>Employee DBID: <span>{emp_info.emp_dbid}</span></p>
                <p>Employee DBID: <span>{emp_info.emp_dbid}</span></p>
            </div>
        </div>
    </>
  )
}

export default Dropdown