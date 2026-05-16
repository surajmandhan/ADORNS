import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * 1. Flashing Arrow Button
 */
export const FlashingArrowButton: React.FC<ButtonProps> = ({ text, onClick, className = '', type = 'button' }) => {
  return (
    <button className={`flashing-arrow-btn ${className}`} onClick={onClick} type={type}>
      <span className="flashing-arrow-btn__img">
        <svg width="256" height="38" viewBox="0 0 256 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_27_481" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="256" height="38">
            <ellipse cx="18.6903" cy="18.9999" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="26.6195" cy="18.9999" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="10.7611" cy="10.9393" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="18.6903" cy="10.9393" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="10.7611" cy="27.0607" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="18.6903" cy="27.0607" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="2.83186" cy="35.1212" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="10.7611" cy="35.1212" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="2.83186" cy="2.87879" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="10.7611" cy="2.87879" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="75.3275" cy="18.9999" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="83.2567" cy="18.9999" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="67.3983" cy="10.9393" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="75.3275" cy="10.9393" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="67.3983" cy="27.0607" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="75.3275" cy="27.0607" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="59.4691" cy="35.1212" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="67.3983" cy="35.1212" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="59.4691" cy="2.87879" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="67.3983" cy="2.87879" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="131.965" cy="18.9999" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="139.894" cy="18.9999" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="124.035" cy="10.9393" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="131.965" cy="10.9393" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="124.035" cy="27.0607" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="131.965" cy="27.0607" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="116.106" cy="35.1212" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="124.035" cy="35.1212" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="116.106" cy="2.87879" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="124.035" cy="2.87879" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="188.602" cy="18.9999" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="196.531" cy="18.9999" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="180.673" cy="10.9393" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="188.602" cy="10.9393" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="180.673" cy="27.0607" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="188.602" cy="27.0607" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="172.743" cy="35.1212" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="180.673" cy="35.1212" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="172.743" cy="2.87879" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="180.673" cy="2.87879" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="245.239" cy="18.9999" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="253.168" cy="18.9999" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="237.309" cy="10.9393" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="245.239" cy="10.9393" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="237.309" cy="27.0607" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="245.239" cy="27.0607" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="229.38" cy="35.1212" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="237.31" cy="35.1212" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="229.38" cy="2.87879" rx="2.83186" ry="2.87879" fill="#1E222A" />
            <ellipse cx="237.31" cy="2.87879" rx="2.83186" ry="2.87879" fill="#1E222A" />
          </mask>
          <g mask="url(#mask0_27_481)">
            <rect x="-604.318" y="-13.2424" width="895.434" height="81.1818" fill="url(#paint0_linear_27_481)" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_27_481" x1="-604.318" y1="27.3485" x2="291.116" y2="27.3485" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c5a021" />
              <stop offset="0.384" stopColor="#efcf5e" />
              <stop offset="0.537062" stopColor="#efcf5e" />
              <stop offset="0.674" stopColor="#c5a021" />
              <stop offset="1" stopColor="#c5a021" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="flashing-arrow-btn__text">{text}</span>
    </button>
  );
};

/**
 * 2. Rainbow Button
 */
export const RainbowButton: React.FC<ButtonProps> = ({ text, onClick, className = '', type = 'button' }) => {
  return (
    <button className={`rainbow-btn ${className}`} onClick={onClick} type={type}>
      <span className="rainbow-btn__text" data-text={text}></span>
      <span className="rainbow-btn__layers">
        <span className="rainbow-btn__layer"></span>
        <span className="rainbow-btn__layer second"></span>
        <span className="rainbow-btn__layer third"></span>
      </span>
    </button>
  );
};

/**
 * 3. Swap Button
 */
export const SwapButton: React.FC<ButtonProps> = ({ text, onClick, className = '', type = 'button' }) => {
  return (
    <button className={`swap-btn ${className}`} onClick={onClick} type={type}>
      <span className="swap-btn__text">{text}</span>
    </button>
  );
};

/**
 * 4. Envelop Button
 */
export const EnvelopButton: React.FC<ButtonProps> = ({ text, onClick, className = '', type = 'button' }) => {
  return (
    <button className={`envelop-btn ${className}`} onClick={onClick} type={type}>
      <span className="envelop-btn__text">
        <span className="envelop-btn__text-inner">
          {text}
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.125 16L9.125 9L2.125 2" stroke="currentColor" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="envelop-btn__text-inner">
          {text}
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.125 16L9.125 9L2.125 2" stroke="currentColor" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
    </button>
  );
};

/**
 * 5. Flicker Button
 */
export const FlickerButton: React.FC<ButtonProps> = ({ text, onClick, className = '', type = 'button' }) => {
  return (
    <button className={`flicker-btn ${className}`} onClick={onClick} type={type}>
      <span className="flicker-btn__text">{text}</span>
      <span className="flicker-btn__icon"></span>
      <span className="flicker-btn__filler"></span>
    </button>
  );
};

/**
 * 6. Stars Button
 */
export const StarsButton: React.FC<ButtonProps> = ({ text, onClick, className = '', type = 'button' }) => {
  return (
    <button className={`stars-btn ${className}`} onClick={onClick} type={type}>
      <span className="stars-btn__inner">
        <span className="stars-btn__text">{text}</span>
      </span>
      <span className="stars-btn__stars">
        <i></i><i></i><i></i><i></i>
      </span>
    </button>
  );
};
