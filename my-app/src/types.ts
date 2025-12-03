export interface ProductSpec {
    label: string;
    value: string;
}

export interface Product {
    id: number;
    code: string; 
    title: string;
    image: string;
    rating: number;
    reviews: number;
    price: number;
    oldPrice?: number;
    discount?: number;
    bonuses?: number;
    isEnding?: boolean;
    deliveryText?: string;
    labels?: string[]; 
    creditText?: string;
    specs?: ProductSpec[];
    brand?: string;
    category?: string;
}