import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import CarCard from './components/CarCard'
import Footer from './components/Footer'
import car1 from './assets/car.png'
import car2 from './assets/car2.png'
import car3 from './assets/car3.png'

function App() {
  const [cars] = useState([
    {
      id: 1,
      name: "Toyota Supra MK5",
      year: 2024,
      color: "Red",
      price: "₹55,00,000",
      engine: "3.0L Twin-Turbo Inline-6",
      mileage: "10 km/l",
      fuel: "Petrol",
      image: car1
    },
    {
      id: 2,
      name: "BMW M4 Competition",
      year: 2024,
      color: "Blue",
      price: "₹1,53,00,000",
      engine: "3.0L Twin-Turbo Inline-6",
      mileage: "8 km/l",
      fuel: "Petrol",
      image: car2
    },
    {
      id: 3,
      name: "Mercedes AMG GT",
      year: 2023,
      color: "Black",
      price: "₹2,45,00,000",
      engine: "4.0L V8 Biturbo",
      mileage: "7 km/l",
      fuel: "Diesel",
      image: car3
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [fuelFilter, setFuelFilter] = useState('All')
  const [viewMode, setViewMode] = useState('grid')

  const filteredCars = cars.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFuel = fuelFilter === 'All' || car.fuel === fuelFilter
    return matchesSearch && matchesFuel
  })

  useEffect(() => {
    console.log(`Search: "${searchTerm}", Fuel: "${fuelFilter}", Results: ${filteredCars.length}`)
  }, [searchTerm, fuelFilter, filteredCars.length])

  return (
    <div className="app">
      <Header />

      <div className="controls">
        <input
          type="text"
          placeholder="Search cars..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={fuelFilter}
          onChange={(e) => setFuelFilter(e.target.value)}
          className="fuel-filter"
        >
          <option value="All">All Fuels</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>

        <button
          onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
          className="toggle-btn"
        >
          {viewMode === 'grid' ? 'List View' : 'Grid View'}
        </button>
      </div>

      <p className="car-count">Showing {filteredCars.length} of {cars.length} cars</p>

      <div className={viewMode === 'grid' ? 'car-list grid' : 'car-list list'}>
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <CarCard
              key={car.id}
              name={car.name}
              year={car.year}
              color={car.color}
              price={car.price}
              engine={car.engine}
              mileage={car.mileage}
              fuel={car.fuel}
              image={car.image}
              viewMode={viewMode}
            />
          ))
        ) : (
          <p className="no-results">No cars found.</p>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default App
