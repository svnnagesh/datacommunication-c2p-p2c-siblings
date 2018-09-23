

export class ProductService {

    constructor() {}

    private contactDetails = [
        { id: 1, name:'Nagesh', age:29, city:'Hyderabad' },
        { id: 2, name:'Ganesh', age:30, city:'Secunderabad' },
        { id: 2, name:'Rohith', age:30, city:'Warangal' },
        { id: 3, name:'Vignesh', age:29, city:'Hyderabad' }
    ]

    getContacts() {
        return this.contactDetails;
    }

}