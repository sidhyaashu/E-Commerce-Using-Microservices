import { Product } from "../models/product.model";

export interface ICatelogRepository {
    create(data:Product):Promise<Product>;
    update(data:Product):Promise<Product>;
    delete(id:any);
    find():Promise<Product[]>;
    findOne(id:number):Promise<Product>;

}