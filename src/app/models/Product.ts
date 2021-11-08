// export class Product {
//    title!: string;
//    content!: string;
//    img!: string;
//    name!: string;
//    price!: string

//    constructor (title: string, content: string, img: string, name: string, price: string) {
//        this.title = title;
//        this.content = content;
//        this.img = img;
//        this.name = name;
//        this.price = price;
//    }

// }

export interface Item {
    id: number;
    img: string;
    name: string;
    price: string;
}

export interface Product {
    title: string;
    content: string;
    items: Item[];
}

export interface RootObject {
    products: Product[];
}