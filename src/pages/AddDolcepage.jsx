import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AddDolce from "../Components/AddDolce";
// Importato axios dopo l'aver installato
import axios from "axios";
// l'url dell mio api
const myApi = "http://localhost:3000";
const endPoint = "/posts";
const newPost = {
  titolo: "",
  img: "",
  tags: [],
};

function AddDolcePage() {
  const navigate = useNavigate();
  const [dolceList, setDolceList] = useState([]);
  const [formData, setFormData] = useState(newPost);
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

  // funzione per agguingere un nuovo elemento all array
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(myApi + endPoint, formData)
      .then((res) => {
        console.log(res.data);
        setDolceList([...dolceList, res.data]); //Aggiungo il nuovo dolce alla lista
        setFormData(newPost); // Resetto i dati del modulo
        navigate("/posts");
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
