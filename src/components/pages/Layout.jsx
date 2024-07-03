/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
  return (
    <div className="container p-5 bg-dark text-white rounded vh-100 w-100 text-center align-items-center justify-content-center">
      {children}
    </div>
  );
};

export default Layout;
