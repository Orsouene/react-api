import { useState, useEffect } from "react";
// import dolciItaliani from "../data/data";
import Card from "../Components/Card";
import AddDolce from "../Components/AddDolce";
// Importato axios dopo l'aver installato
import axios from "axios";
const newPost = {
  titolo: "",
  img: "",
  tags: [],
};
function Posts() {
  const [dolceList, setDolceList] = useState([]);

  // l'url dell mio api
  const myApi = "http://localhost:3000";
  const endPoint = "/posts";
  // Una funzione per fare la chiamata axios
  function getData() {
    axios
      .get(myApi + endPoint)
      .then((res) => {
        console.log(res.data);
        setDolceList(res.data);
      })
      .catch((error) => console.error("Invalid req : " + error));
  }
  // usato l'hook useEffect per  mostrare nell'app front-end una sola volta al caricamento della pagina le dati recuperati dal backend

  useEffect(() => {
    getData();
  }, []);

  // funzione per eliminare un elemento dall array
  function deleteItem(id) {
    axios
      .delete(myApi + endPoint + "/" + id)
      .then((res) => {
        console.log(res.data);
        setDolceList(dolceList.filter((element) => element.id !== id));
      })
      .catch((error) => console.error("Invalid req : " + error));
  }
  return (
    <main className="container-fluid">
      <div className="box">
        {dolceList.map((dolceElement) => (
          <div className="gap-5" key={dolceElement.id}>
            <Card
              dolciItaliani={dolceElement}
              onDelete={() => deleteItem(dolceElement.id)}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
export default Posts;
