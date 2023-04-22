let Abstract = () => {
  return (
    <>
      <div className="abstract-wrapper">
        <label>Name of the event</label>
        <input type="text" placeholder="Eg. Blogging Challenge" />
        <label>About Event</label>
        <textarea rows="4"></textarea>
        <label>Entry fee</label>
        <input type="text" value="NA" />
        <label>Max Team size</label>
        <input type="text" placeholder="Eg. 4" />
        <label for="images" class="poster-upload-container">
          <h4>Upload Event poster</h4>
          <input type="file" id="images" accept="image/*" required />
        </label>
      </div>
    </>
  );
};
export default Abstract;
