import { useState, useEffect } from "react";
import dolciItaliani from "../data/data";
import Card from "./Card";
import Form from "./Form";
import axios from "axios";
function Main() {
  const [dolceList, setDolceList] = useState(dolciItaliani);
  const [formData, setFormData] = useState({
    titolo: "",
    img: "",
    tags: [],
  });
  const myApi = "http://localhost:3000/posts";
  function getData() {
    axios.get(myApi).then((res) => {
      console.log(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);
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
  // funzione per eliminare un elemento dall array
  function deleteItem(id) {
    setDolceList(dolceList.filter((element) => element.id !== id));
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
