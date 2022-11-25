import React, { useState } from 'react';
import CustomButton from './components/common/Button';
import { Input } from './components/common/input/Input';
import { SelectInput } from './components/common/SelectInput';
import './index.scss';
import { ErrorBoundary } from './components/ErrorBoundry';
import Plus from './assets/icons/Plus.svg'
import {RadioButton} from './components/common/RadioButton';
import {CustomCheckbox} from './components/common/Checkbox';
import Pagination from './components/common/Pagination/Pagination';
import SearchBar from './components/common/SearchBar';
import {Filter} from './components/common/Filter'
import DatePicker from './components/common/DatePicker';
import CommonTable from './components/common/Table';
import Dropdown from './components/common/Dropdown';

const OurFallbackComponent = ({ error, componentStack, resetErrorBoundary }: any) => (
  <div>
    <h1>
      An error occurred:
      {error.message}
    </h1>
    <h1>
      An error occurred:
      {componentStack}
    </h1>
    <button type="button" onClick={resetErrorBoundary}>
      Try again
    </button>
  </div>
);

function App() {

  const [val, setVal] = useState([] as any);
  const [err, setErr] = useState(false);
  const [succ, setSucc] = useState(false);

  const change = (e: any) => {
    // console.log(x.value, '....')
    setVal(e.target.value)
  }
  const submit = () => {
    if(val === 'hello'){
      setSucc(true)
      setErr(false)
    }else{
      setErr(true)
      setSucc(false)
    }
  }

  return (
    <div className='w-full mt-2 mx-auto bg-[#AEB0CF] h-auto'>
      <ErrorBoundary FallbackComponent={OurFallbackComponent}>
        <div className='w-1/2 mt-2 mx-auto'>
          <Input
            placeholder='Text....'
            name='input'
            value={val}
            handleChange={change}
            error={err}
            success={succ}
          />
          <CustomButton icon={Plus} disabled={false} onClick={submit} variant='primary' size='md' />
          <SelectInput />
          <RadioButton items={undefined} onChange={undefined} />
          <CustomCheckbox handleCheck={undefined} name={''}  />
          <SearchBar label={''} handleChange={undefined} value={undefined} name={undefined} width={undefined} />
          <Pagination />
          <Filter />
          <Dropdown />
          <DatePicker label={''} />
          <CommonTable cols={[] as any} data={[] as any} />
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
