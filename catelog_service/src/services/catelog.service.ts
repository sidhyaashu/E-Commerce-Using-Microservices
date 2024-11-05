import { ICatelogRepository } from "../interface/catelogRepository.interface";

export class CatelogService {
    private _repository:ICatelogRepository;

    constructor(repository: ICatelogRepository){
        this._repository = repository;

    }

    createProduct(input:any){}
    updateProduct(input:any){}
    getProducts(limit:number,offset:number){}
    getProduct(id:number){}
    deleteProduct(id:number){}

}