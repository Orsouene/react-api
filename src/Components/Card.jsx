import { Link } from "react-router-dom";

function Card({ dolciItaliani, onDelete }) {
  return (
    <div className="card">
      <img src={dolciItaliani.img} />
      <div className="card-body">
        <h5 className="card-title major-mono-display-regular ">
          {dolciItaliani.titolo}
        </h5>
        <p className="card-text major-mono-display-regular">
          {dolciItaliani.tags.join(",")}
        </p>

        <div className="d-flex gap-2">
          <Link
            className="btn btn-outline-dark buttons major-mono-display-regular"
            to={`/posts/${dolciItaliani.id}`}
          >
            Get Details
          </Link>
          <Link
            className="btn btn-outline-dark buttons major-mono-display-regular"
            to={"/posts/create"}
          >
            Create yours
          </Link>
          <button
            type="button"
            onClick={onDelete}
            className="btn btn-outline-dark buttons major-mono-display-regular"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
