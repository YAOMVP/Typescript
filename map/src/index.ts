 import { User } from "./User";
 import { Company } from "./Company";
 import { CustomMap } from "./CustomMap";

const user = new User();

const company = new Company();

const cutomMap = new CustomMap("map");
// customMap.googleMap  (Can not use coz we define it is private)

cutomMap.addMarker(user);
cutomMap.addMarker(company);