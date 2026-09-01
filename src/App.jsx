import './App.css'
import carImage from './assets/car.png'

function App() {
  const carName = "Toyota Supra MK5"
  const carYear = 2024
  const carColor = "Red"
  const carPrice = "₹55,00,000"
  const carEngine = "3.0L Twin-Turbo Inline-6"
  const carMileage = "10 km/l"

  return (
    <div className="app">
      <h1>Car Details Management System</h1>

      <div className="car-card">
        <img src={carImage} alt="Car Image" className="car-image" />
        <h2>{carName}</h2>
        <table>
          <tbody>
            <tr>
              <td><strong>Year:</strong></td>
              <td>{carYear}</td>
            </tr>
            <tr>
              <td><strong>Color:</strong></td>
              <td>{carColor}</td>
            </tr>
            <tr>
              <td><strong>Price:</strong></td>
              <td>{carPrice}</td>
            </tr>
            <tr>
              <td><strong>Engine:</strong></td>
              <td>{carEngine}</td>
            </tr>
            <tr>
              <td><strong>Mileage:</strong></td>
              <td>{carMileage}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
