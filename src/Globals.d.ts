export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
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

  type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
  type InputEvent = React.ChangeEvent<HTMLInputElement>;
}
