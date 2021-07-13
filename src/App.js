import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
  const [loading, setLoading] = useState(false);
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const response = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await response.json();
      return events;
    };

    fetchEvents()
      .then((events) => {
        setEventData(events);
        console.log(events);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Header />
      {loading ? <Loader /> : <Map eventData={eventData} />}
    </div>
  );
}

export default App;
