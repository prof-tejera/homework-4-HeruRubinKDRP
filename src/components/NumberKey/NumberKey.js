const NumberKey = ({ value, onClick, classes }) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? */
  return (
    <div onClick={()=>onClick()}
      className={`number-key ${classes}`}
    >
      {value}
    </div>
  );
};

export default NumberKey;
