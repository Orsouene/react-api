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
function AddDolcePage() {
  const [dolceList, setDolceList] = useState([]);
  const [formData, setFormData] = useState(newPost);

  // l'url dell mio api
  const myApi = "http://localhost:3000";
  const endPoint = "/posts";

  // usato l'hook useEffect per  mostrare nell'app front-end una sola volta al caricamento della pagina le dati recuperati dal backend
  useEffect(getData, []);
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
  // funzione per agguingere un nuovo elemento all array
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(myApi + endPoint, formData)
      .then((res) => {
        console.log(res.data);
        setDolceList([...dolceList, res.data]);
        setFormData(newPost);
      })
      .catch((error) => console.error("Invalid req : " + error));
  }

  function handleInput(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  }
  function handleTags(e) {
    setFormData((formData) => {
      let { tags, ...others } = formData;
      let newTags = [...tags];
      if (newTags.includes(e.target.value)) {
        newTags = newTags.filter((el) => el !== e.target.value);
      } else {
        newTags.push(e.target.value);
      }
      return {
        tags: newTags,
        ...others,
      };
    });
  }

  return (
    <main className="container-fluid">
      <AddDolce
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        handleTags={handleTags}
        formData={formData}
      />
    </main>
  );
}
export default AddDolcePage;
