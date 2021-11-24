const Tour = ({ id, info, image, name, price, removeTour }) => {
  return <article className="card m-6">
    <div className="card-image">
      <figure className="image">
        <img src={image} alt={name} />
      </figure>
    </div>
    <div className="card-content">
      <div className="is-flex is-justify-content-space-between pr-4">
        <h3 className="subtitle is-4" >{name}</h3>
        <h5 className="tag">${price}</h5>
      </div>
      <p className="pt-4">{info}</p>
    </div>
    <footer className="is-flex is-justify-content-center">
      <button
      onClick={() => removeTour(id)}
      className="button is-danger is-outlined mb-5"
      >not interested</button>
    </footer>
  </article>
}

export default Tour