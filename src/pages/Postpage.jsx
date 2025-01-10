import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";

const myApi = "http://localhost:3000";
const endPoint = "/posts";

function Post() {
  const { id } = useParams();
  const [Dolce, setDolce] = useState(null);
  useEffect(getData, [id]);
  function getData() {
    axios.get(myApi + endPoint + "/" + id).then((res) => {
      console.log(res);
      setDolce(res.data);
    });
  }
  return <section>{Dolce && <Card dolciItaliani={Dolce} />}</section>;
}

export default Post;
