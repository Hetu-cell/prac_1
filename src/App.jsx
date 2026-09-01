import './App.css'
import Header from './components/Header'
import CarCard from './components/CarCard'
import Footer from './components/Footer'
import car1 from './assets/car.png'
import car2 from './assets/car2.png'
import car3 from './assets/car3.png'

function App() {
  return (
    <div className="app">
      <Header />

      <div className="car-list">
        <CarCard
          name="Toyota Supra MK5"
          year={2024}
          color="Red"
          price="₹55,00,000"
          engine="3.0L Twin-Turbo Inline-6"
          mileage="10 km/l"
          image={car1}
        />
        <CarCard
          name="BMW M4 Competition"
          year={2024}
          color="Blue"
          price="₹1,53,00,000"
          engine="3.0L Twin-Turbo Inline-6"
          mileage="8 km/l"
          image={car2}
        />
        <CarCard
          name="Mercedes AMG GT"
          year={2023}
          color="Black"
          price="₹2,45,00,000"
          engine="4.0L V8 Biturbo"
          mileage="7 km/l"
          image={car3}
        />
      </div>

      <Footer />
    </div>
  )
}

export default App
