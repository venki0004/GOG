import React, { useEffect, useState } from 'react'
import { uuid } from '../../utils/helpers';
import { CustomCheckbox } from './Checkbox';
import Ellipse from '../../assets/icons/Ellipse.svg'

interface Props {
    cols: any[],
    data: any[]
  }

  const CommonTable: React.FC<Props> = ({
    data,
    cols,
  }) => {

    const [checkedAll, setCheckedAll] = useState(false);
    const [checked, setChecked] = useState({
        nr1: false,
        nr2: false
    } as any);

    const toggleCheck = (inputName: any) => {
        setChecked((prevState: any) => {
          const newState: any = { ...prevState };
          newState[inputName] = !prevState[inputName];
          return newState;
        });
      };

    const selectAll = (value: any) => {
        setCheckedAll(value);
        setChecked((prevState: any) => {
          const newState = { ...prevState };
          for (const inputName in newState) {
            newState[inputName] = value;
          }
          return newState;
        });
      };

    useEffect(() => {
        let allChecked = true;
        for (const inputName in checked) {
          if (checked[inputName] === false) {
            allChecked = false;
          }
        }
        if (allChecked) {
          setCheckedAll(true);
        } else {
          setCheckedAll(false);
        }
      }, [checked]);

    return (
        <div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border-separate space-y-2">
                                <thead className="m-2">
                                    <tr className='rounded-xl'>
                                        {
                                            cols.map((element: any) => (
                                            <th key={uuid()} scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                {/* <CustomCheckbox
                                                    handleCheck={(event: any) => selectAll(event.target.checked)}
                                                    name={''}
                                                    ischecked={checkedAll}
                                                /> */}
                                                {element.header}
                                            </th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item: any) => (
                                            <tr key={uuid()} className="border-b">
                                              {
                                                      cols.map((col: any) => (
                                                        <td key={uuid()} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                            {/* <CustomCheckbox
                                                                handleCheck={() => toggleCheck("nr1")}
                                                                name='nr1'
                                                                ischecked={checked["nr1"]}
                                                            /> */}
                                                            {item[col.key]}
                                                        </td>
                                                      ))
                                                  }
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonTable