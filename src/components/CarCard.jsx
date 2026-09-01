function CarCard({ name, year, color, price, engine, mileage, image }) {
  return (
    <div className="car-card">
      <img src={image} alt={name} className="car-image" />
      <h2>{name}</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>Year:</strong></td>
            <td>{year}</td>
          </tr>
          <tr>
            <td><strong>Color:</strong></td>
            <td>{color}</td>
          </tr>
          <tr>
            <td><strong>Price:</strong></td>
            <td>{price}</td>
          </tr>
          <tr>
            <td><strong>Engine:</strong></td>
            <td>{engine}</td>
          </tr>
          <tr>
            <td><strong>Mileage:</strong></td>
            <td>{mileage}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CarCard
