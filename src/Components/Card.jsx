function Card({ dolciItaliani, onDelete }) {
  return (
    <div className="card">
      <img src={dolciItaliani.img} />
      <div className="card-body">
        <h5 className="card-title">{dolciItaliani.titolo}</h5>
        <p className="card-text">{dolciItaliani.tags.join(" , ")}</p>

        <button onClick={onDelete}>DELETE</button>
      </div>
    </div>
  );
}
export default Card;
