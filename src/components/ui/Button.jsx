export const Button = ({ label = "Click Me", clickHandle }) => {
  return <button onClick={clickHandle}>{label}</button>;
};
