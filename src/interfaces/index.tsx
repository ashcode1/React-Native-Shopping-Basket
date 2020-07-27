// Product line item
export interface Item {
  id: number;
  name: string;
  img: string;
  colour: string;
  price: number;
  quantity: number;
  addOnPress?: () => void;
  subtractOnPress?: () => void;
  removeAllOnPress?: () => void;
}

// Colour filter picker item
export interface SelectedColor {
  label: string;
  value: string;
}
