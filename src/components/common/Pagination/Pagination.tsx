import React, { useState } from 'react';
import { usePagination, DOTS } from './usePagination';
import './pagination.scss';
import { uuid } from '../../../utils/helpers';

export const Pagination = (props: any) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  const [customPageNo, setcustomPageNo] = useState('');


  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  
  const handleKeyDown = (event:any) => {
    if (event.key === 'Enter') {
      onPageChange(Number(customPageNo));
    }
  }


  const lastPage = paginationRange && paginationRange[paginationRange.length - 1];


  const handleInputChange = (event: any) => {
    let {value} = event.target
    if(Number(value) === 0) return
    const re = /^[0-9\b]+$/;
      if ((value && !re.test(value)) || ( paginationRange && (Number(value) >  paginationRange[paginationRange.length - 1]))) {
        return;
      }

    setcustomPageNo(value);
  };

  return (

    <div className='flex space-x-4  justify-between'>
      <div className="hidden lg:flex space-x-2 justify-center items-center text-white pagination-goto relative">
        <p className="text-sm text-[#27282D]">Items per page:</p>
        <div className="h-[40px] w-[84px] pagination-input-sec relative px-2 lg:flex justify-center items-center rounded-md border border-[#D8D9F1]  bg-transparent hover:border-[2px]  hidden">
          <input
            type="text"
            value={customPageNo}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="h-full relative  
            w-full outline-none focus:outline-none hover:outline-none pl-1 rounded-md bg-transparent"
          />
        </div>
        <p className="text-sm text-[#27282D]">Showing 1 - 5 of {lastPage}</p>
      </div>
      <div className="hidden lg:flex space-x-2 justify-center items-center text-white pagination-goto relative">
          <p className="text-sm text-[#27282D]">Go to Page:</p>
          <div className="h-[40px] w-[84px] pagination-input-sec relative px-2 lg:flex justify-center items-center rounded-md border border-[#D8D9F1]  bg-transparent hover:border-[2px]  hidden">
            <input
              type="text"
              value={customPageNo}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="h-full relative  
              w-full outline-none focus:outline-none hover:outline-none pl-1 rounded-md bg-transparent"
            />
          </div>
        <ul
          className={`pagination-container ${className}`}
        >
          <li
            key={uuid()}
            className={`arrow-icon pagination-item ${currentPage === 1 ? 'disabled' : ''
              }`}
            onClick={onPrevious}
          >
            <div className="arrow left" />
          </li>
          {paginationRange?.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return <li key={uuid()} className="pagination-item dots">&#8230;</li>;
            }

            return (
              <li
                key={uuid()}
                className={`pagination-item ${pageNumber === currentPage ? 'selected' : ''
                  }`}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            );
          })}
          <li
            key={uuid()}
            className={`arrow-icon pagination-item ${currentPage === lastPage ? 'disabled' : ''
              }`}
            onClick={onNext}
          >
            <div className="arrow right" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
