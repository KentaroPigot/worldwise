export {};

declare global {
  /**
  Global namespace
   */
  interface City {
    cityName: string;
    country: string;
    emoji: string;
    date: Date;
    notes: string;
    position: {
      lat: number;
      lng: number;
    };
    id: number;
  }

  interface Country {
    country: string;
    emoji: string;
  }

  interface User {
    name: string;
    email: string;
    password: string;
    avatar: string | null;
  }

  interface CitiesContextValue {
    cities: City[] | [];
    isLoading: boolean;
    currentCity: City | undefined;
    getCity: (id) => void;
    createCity: (newCity) => void;
    deleteCity: (id) => void;
  }

  interface CitiesContextState {
    cities: City[];
    isLoading: boolean;
    currentCity: City | undefined;
    error: string | null;
  }

  interface AuthContextValue {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
  }

  interface AuthContextState {
    user: User | null;
    isAuthenticated: boolean;
  }

  type Cities = City[];

  type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
  type InputEvent = React.ChangeEvent<HTMLInputElement>;
}
