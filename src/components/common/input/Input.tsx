import { useState } from "react"
import InputNormal from '../../../assets/icons/InputNormal.svg'
import InputError1 from '../../../assets/icons/InputError1.svg'
import InputError2 from '../../../assets/icons/InputError2.svg'
import InputSuccess1 from '../../../assets/icons/InputSuccess1.svg'
import InputSuccess2 from '../../../assets/icons/InputSuccess2.svg'

interface Props {
  name?: string
  value?: any
  type?: string
  disabled?: boolean
  handleChange?: any
  width?: any
  icon?: any
  label?: any
  error?: boolean
  helperText?: any
  success?: boolean
  placeholder?: any
}

export const Input: React.FC<Props> = ({
  type,
  value,
  disabled,
  handleChange,
  name,
  width,
  icon,
  label,
  error,
  helperText,
  success,
  placeholder,
}) => {

  const onPaste = (e: any) => {
    var ranges = [
      '(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])', // U+1F680 to U+1F6FF
    ]

    if (e.clipboardData.getData('text/plain').match(ranges.join('|'))) {
      e.preventDefault()
      return false
    }
  }

  const onkeydownEvent = (e: any, handleChange: any) => {
    var ranges = [
      '(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])', // U+1F680 to U+1F6FF
    ]
    if (e.target.value && e.target.value.match(ranges.join('|'))) {
      e.preventDefault()
      return false
    }
    handleChange(e)
  }

  return (
    <>
      <div className='relative flex w-full flex-wrap items-stretch mb-3'>
        <span className="z-10 h-full flex items-center leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent
          rounded text-base w-8 pl-3 py-3">
          <img src={
            error ? InputError1 : success ? InputSuccess1 : InputNormal
          } alt="" />
        </span>

        <input
          className={`bg-[#F5F8FF] focus:bg-[#FFFFFF] border border-transparent h-[54px] focus:border-borderFocus
          ${error ? 'input-error border-[#EF4949] text-error placeholder-error' : ''}
          ${success ? 'input-success border-[#3AC430] text-success placeholder-success' : ''} hover:border-[#AEB0CF]
          px-3 py-3 placeholder-[#AEB0CF] relative
          rounded-xl text-sm outline-none pl-10 w-full`}
          placeholder={placeholder}
          autoComplete='off'
          width={width}
          type={type}
          name={name}
          onPaste={onPaste}
          onChange={(e) => onkeydownEvent(e, handleChange)}
          disabled={disabled}
          value={value}
        />
        
        {
          error ? (
            <span className="z-10 h-full flex items-center right-3 leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent
            rounded text-base w-8 pl-3 py-3">
              <img src={InputError2} alt="" />
            </span>
          ) : success ? (
            <span className="z-10 flex items-center h-full right-3 leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent
            rounded text-base w-8 pl-3 py-3">
              <img src={InputSuccess2} alt="" />
            </span>
          ) : ''
        }
      </div>
    </>
  )
}