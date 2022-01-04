import './index.css';

const Card = ({ className, children }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
