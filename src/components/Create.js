const Create = () => {
  return (
    <div className="create">
      <h2>Add new Blog!</h2>
      <form action="">
        <label htmlFor="">
          Title
          <input type="text" required />
        </label>

        {/** Body */}
        <label htmlFor="">
          Body
          <textarea name="" id="" cols="30" rows="10" required></textarea>
        </label>
        <select name="" id="">
          <option value="">Yulianny Betancourt</option>
          <option value="">Constribuidor(a)</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
export default Create;
