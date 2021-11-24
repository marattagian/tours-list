import Tour from "./tour"

const Tours = ({ tours }) => {
  return(
    <section className="p-6">
      <div className="is-flex is-justify-content-center">
        <h2 className="title is-1">Ours Tours</h2>
        <div className="underline"></div>
      </div>
      <div className="container">
        {
          tours.map((tour) => {
            return <Tour key={tour.id} {...tour} />
          })
        }
      </div>
    </section>
  )
}

export default Tours