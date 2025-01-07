import { useState, useEffect } from "react";
import dolciItaliani from "../data/data";
import Card from "./Card";
import Form from "./Form";
// Importato axios dopo l'aver installato
import axios from "axios";
function Main() {
  const [dolceList, setDolceList] = useState([]);
  const [formData, setFormData] = useState({
    titolo: "",
    img: "",
    tags: [],
  });
  // l'url dell mio api
  const myApi = "http://localhost:3000/posts";
  // Una funzione per fare la chiamata axios
  function getData() {
    axios
      .get(myApi)
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
      .delete(myApi + "/" + id)
      .then((res) => {
        console.log(res.data);
        setDolceList(dolceList.filter((element) => element.id !== id));
      })
      .catch((error) => console.error("Invalid req : " + error));
  }
  // funzione per agguingere un nuovo elemento all array
  function handleSubmit(e) {
    e.preventDefault();
    const nuovoDolce = {
      id: crypto.randomUUID(),
      ...formData,
    };
    setDolceList([...dolceList, nuovoDolce]);
    setFormData({
      titolo: "",
      img: "",
      tags: [],
    });
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
      <Form
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        handleTags={handleTags}
        formData={formData}
      />
    </main>
  );
}
export default Main;
