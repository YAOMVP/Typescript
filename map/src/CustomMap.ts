
//😊Satisfy the properities we list in here!!!
export interface Mappable {
    location :{
        lat:number;
        lng:number;
    };
    markerContent():string;
}


export class CustomMap {
    //We do not want anyone else to access the map that we create inside of here.
    private googleMap:google.maps.Map;

    constructor(divId:string){
      this.googleMap = new google.maps.Map(document.getElementById(divId)!,{
            zoom:1,
            center:{
                lat:0,
                lng:0
            }
        }   );
    }
     
    addMarker(mappable:Mappable):void{
      const marker =  new google.maps.Marker ({
            map:this.googleMap,
            position:{
                lat:mappable.location.lat,
                lng:mappable.location.lng
            }
        })
    // addCompanyMarker(company:Company):void{
    //     new google.maps.Marker({
    //         map:this.googleMap,
    //         position:{
    //             lat:company.location.lat,
    //             lng:company.location.lng
    //         } 
    //     })
    // }

        marker.addListener("click",()=>{
            const infoWindow = new google.maps.InfoWindow({
                content:mappable.markerContent()
            })
            infoWindow.open(this.googleMap,marker);
        });
        

    }
}