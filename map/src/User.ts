//Import faker module
import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
    name:string;
    location:{
        lat:number;
        lng:number;
    };

    constructor(){
        this.name=faker.name.firstName();
        this.location = {
            //parseFloat:parses a value as a string and returns the first number. 
            //字符串解析为浮点数(coz上边定义的number)
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude()),
        }
    }

    markerContent():string{
        return `User Name:${this.name}`;
    }
}
