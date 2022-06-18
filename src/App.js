import Navbar from './components/Navbar.js'
import Location from './components/Location.js'
import locationsData from './data.js'
import './index.css';

//console.log(locationsData);

function App() {
  const places = locationsData.map(place => {
    console.log(place)
    return (
      <Location
        key={place.id}
        title={place.title}
        location={place.location}
        googleMapsUrl={place.googleMapsUrl}
        startDate={place.startDate}
        endDate={place.endDate}
        description={place.description}
        imageUrl={place.imageUrl}
      />
    )
  })

  return (
    <div className="container">
      <Navbar />
      {places}
    </div>
  );
}

export default App;
