//Import faker module
import { faker } from '@faker-js/faker';

export class Company {
    companyName:string;
    catchphrase:string;
    location:{
        lat:number;
        lng:number;
    };

    constructor(){
        this.companyName = faker.company.name();
        this.catchphrase = faker.company.catchPhrase();
        this.location = {
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude()),
        }
    }
}

