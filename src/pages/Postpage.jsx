import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import Card from "../Components/Card";
const myApi = "http://localhost:3000";
const endPoint = "/posts";

function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [Dolce, setDolce] = useState(null);
  useEffect(getData, [id]);
  function getData() {
    axios
      .get(myApi + endPoint + "/" + id)
      .then((res) => {
        console.log(res);
        setDolce(res.data);
      })
      .catch((error) => {
        console.error("Errore nella richiesta: ", error);
        navigate("/NotFound"); // Se c'è un errore nella chiamata, navighiamo comunque a "NotFound"
      });
  }
  return <section>{Dolce && <Card dolciItaliani={Dolce} />}</section>;
}

export default Post;
