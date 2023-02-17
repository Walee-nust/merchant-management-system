export interface Product {
    _id: string;
    name: string;
    type: string;
    categoryId: string[];
    price: number;
    image: string;
}