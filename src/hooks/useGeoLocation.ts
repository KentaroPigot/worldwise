import { useState } from "react";
import { LatLngTuple } from "leaflet";

type useGeolocationReturn = {
  isLoading: boolean;
  position: LatLngTuple | null;
  getPosition: () => void;
  error?: string | null;
};

export function useGeolocation(
  defaultPosition: LatLngTuple | null = null
): useGeolocationReturn {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [position, setPosition] = useState<LatLngTuple | null>(defaultPosition);
  const [error, setError] = useState<null | string>(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}
