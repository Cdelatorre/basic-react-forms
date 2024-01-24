const Card = ({ title, price, id, onDelete }) => {
  return (
    <div className="card mb-3" >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price}</p>
        <button onClick={() => onDelete(id)} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default Card;
