import {InMemoryDbService} from 'angular-in-memory-web-api'
import {Category} from './pages/categories/shared/category.model';
export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories =[
            {id:1, name:'Moradia', description:'Pagamentos das contas de casa'},
            {id:2, name:'Saúde', description:'Planos de saúde e remédios'},
            {id:3, name:'Lazer', description:'Cinema, parque, praia, etc.'},
            {id:4, name:'Salário', description:'Recebimento de salário'},
            {id:5, name:'Freelas', description:'Trabalhos como freelancer'},
        ];

        return {categories}
    }
}