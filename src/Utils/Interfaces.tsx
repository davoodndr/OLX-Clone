export interface Signup{
  name:string;
  email:string;
  password: string;
}

export interface Login{
  email:string;
  password: string;
}

export interface Product{
  id?: string;
  price: number;
  title: string;
  category: string;
  detail?: string;
  place: string;
  state: string;
  date: string;
  img: string;
}
