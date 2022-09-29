const Operation = ({ value, operatorAction, classes }) => {
  /** TODO: What happens when a user clicks an Operation, what do we want to pass to our parent? */
  return (
    <div
      onClick={()=>operatorAction()}
      className={`operator-key ${classes}`}
    >
      {value}
    </div>
  );
};

export default Operation;
