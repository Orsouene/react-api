import { Link } from "react-router-dom";

function Card({ dolciItaliani, onDelete }) {
  return (
    <div className="card">
      <img src={dolciItaliani.img} />
      <div className="card-body">
        <h5 className="card-title">{dolciItaliani.titolo}</h5>
        <p className="card-text">{dolciItaliani.tags.join(" , ")}</p>

        <div className="d-flex gap-2">
          <Link
            className="btn btn-outline-dark buttons"
            to={`/posts/${dolciItaliani.id}`}
          >
            Get Post
          </Link>
          <button
            type="button"
            onClick={onDelete}
            className="btn btn-outline-dark buttons"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
