import { useEffect, useState } from "react";

function MapView() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setLocation({ latitude, longitude });
        },
        () => {
          setError("Location access denied.");
        }
      );
    } else {
      setError("Geolocation not supported.");
    }
  }, []);

  return (
    <div style={{ padding: "2rem", color: "#fff" }}>
      <h2>Nearby Bars</h2>
      {error && <p>{error}</p>}
      {location ? (
        <p>
          You are at: {location.latitude.toFixed(3)},{" "}
          {location.longitude.toFixed(3)}
        </p>
      ) : (
        <p>Getting your location...</p>
      )}
    </div>
  );
}

export default MapView;
