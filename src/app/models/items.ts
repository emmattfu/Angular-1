import { Review } from "./Review"

export interface Items {
  id?: number;
  isOpen?: boolean;
  name: string;
  price: string;
  info: string;
  review: Review[];
}
