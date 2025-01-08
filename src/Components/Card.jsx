function Card({ dolciItaliani, onDelete }) {
  return (
    <div className="card">
      <img src={dolciItaliani.img} />
      <div className="card-body">
        <h5 className="card-title">{dolciItaliani.titolo}</h5>
        <p className="card-text">{dolciItaliani.tags}</p>
        <button
          type="button"
          onClick={onDelete}
          className="btn btn-outline-dark buttons"
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
export default Card;
