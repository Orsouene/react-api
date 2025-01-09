import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  return <h1>Sono nel post con l'id : {id} </h1>;
}

export default Post;
