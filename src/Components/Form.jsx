import dolciItaliani from "../data/data";

function Form({ handleSubmit, handleInput, handleTags, formData }) {
  const allTags = [];
  dolciItaliani.forEach((dolce) => {
    // Unisci i tag, evitando duplicati (la parola "Dessert")
    dolce.tags.forEach((tag) => {
      if (!allTags.includes(tag)) {
        allTags.push(tag);
      }
    });
  });
  return (
    <section>
      <form onSubmit={handleSubmit}>
        {/* titolo */}
        <div className="mb-3">
          <label htmlFor="titolo" className="form-label">
            <h3>Il titolo dell&apos;articolo</h3>
          </label>
          <input
            type="text"
            className="form-control"
            id="titolo"
            name="titolo"
            aria-describedby="titoloHelp"
            value={formData.titolo}
            onChange={handleInput}
          />
        </div>
        {/* IMAGE */}
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            <h3>l'imagine dell&apos;articolo</h3>
          </label>
          <input
            type="text"
            className="form-control"
            id="img"
            name="img"
            aria-describedby="imgHelp"
            value={formData.img}
            onChange={handleInput}
          />
        </div>
        {/* TAGS */}
        <div className="card p-4">
          <label htmlFor="img" className="form-label">
            <h3>il Tags dell&apos;articolo</h3>
          </label>
          {allTags.map((tagItem) => (
            <div className="mb-3 form-check" key={tagItem}>
              <input
                type="checkbox"
                className="form-check-input"
                id={tagItem}
                name="tags"
                onChange={handleTags}
                value={tagItem}
                checked={formData.tags.includes(tagItem)}
              />
              <label className="form-check-label" htmlFor={tagItem}>
                {tagItem}
              </label>
            </div>
          ))}
        </div>

        <button type="submit" className="btn btn-primary buttons">
          ADD
        </button>
      </form>
    </section>
  );
}
export default Form;
