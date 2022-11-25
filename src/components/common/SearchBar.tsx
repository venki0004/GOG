import React from 'react'

interface Props {
    label: string,
    handleChange: any,
    value: any,
    name: any,
    width: any
  }

const SearchBar = ({ handleChange, value, name, label, width }: Props) => {

  return (
    <div>
        <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
                <div className="input-group relative flex flex-row items-stretch w-full mb-4">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search"
                        className="w-4 absolute top-3.5 left-3 z-10 focus:hidden" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#AEB0CF" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                    <input type="search" className="h-[44px] bg-[#F5F8FF] form-control relative flex-auto min-w-0 block w-full px-9 py-1.5
                    text-base font-normal text-[#27282D] bg-clip-padding
                    rounded transition ease-in-out m-0 focus:outline-none"
                    placeholder=""
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    name={name}
                    value={value}
                    onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar