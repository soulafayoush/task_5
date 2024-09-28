const Header = ({ text, subText }) => {
  return (
    <div className="header-container">
      <h1 className="header-title">
        {text}
      </h1>
      <span className="header-subtext">{subText}</span>
    </div>
  );
};

export default Header;
