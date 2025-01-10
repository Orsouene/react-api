import dolciItaliani from "../data/data";

function AddDolce({ handleSubmit, handleInput, handleTags, formData }) {
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
            <h3 className="major-mono-display-regular">Add Title</h3>
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
            <h3 className="major-mono-display-regular">Add Image</h3>
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
            <h3 className="major-mono-display-regular">Add tags </h3>
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
          <button type="submit" className="btn btn-outline-dark buttons">
            ADD
          </button>
        </div>
      </form>
    </section>
  );
}
export default AddDolce;
