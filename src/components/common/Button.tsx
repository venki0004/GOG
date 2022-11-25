import React from 'react';

interface Props {
  disabled?: boolean
  children?: React.ReactNode | null
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  variant?: any
  width?: any
  size?: any
  icon?: any
  borderRadius?: any
  type?: any
}
const styles: any = {
    borderRadius: '12px', textTransform: 'none', padding: '18px 64px'
};

const CustomButton: React.FC<Props> = ({
  disabled,
  children,
  onClick,
  variant = 'primary',
  width,
  size = 'lg',
  icon,
  borderRadius,
  type = 'button',
}) => (
  <div className={`${width}`}>
    <button
        style={styles}
        className={`h-[46px] bg-[#575ABC] text-white ml-2 enabled:hover:bg-[#4043AD] ease-linear transition-all duration-150
        flex items-center justify-center
        ${disabled ? 'bg-[#EDEDED] text-[#000]' : ''}
        ${size === 'lg' ? 'w-[420px] flex items-center' : ''}
        ${variant === 'secondary' ? 'bg-[#E4E9F8] text-[#575ABC] enabled:hover:bg-[#D4DEFB]' : ''}`}
        disabled={disabled}
        onClick={onClick}
        type={type}
    > 
        <p className={`w-full ${size === 'lg' ? 'justify-center' : ''} flex font-bold text-white font-satoshiRegular text-base`}>
          <img className='mr-2' src={icon} alt='' />Text Goes Here{children}
        </p>
    </button>
  </div>
);
CustomButton.defaultProps = {
  disabled: false,
  children: null,
  variant: '',
  width: '',
  size: '',
  icon: '',
  borderRadius: '',
  onClick: function test() {},
};
export default CustomButton;
