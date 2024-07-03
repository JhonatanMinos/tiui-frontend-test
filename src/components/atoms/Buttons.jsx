/* eslint-disable react/prop-types */
const Button = ({ values, handleClick, children, ...rest }) => {
  return (
    <div>
      <button
        className="btn btn-primary"
        value={values}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
