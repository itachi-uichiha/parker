export interface createParkingTypes {
    name:string;
    address:string;
    mobile:number;
    location:string;
    location_details:string;
    images:[]
}

export interface updateParkingTypes {
    id: string;
    name: string;
    address: string;
    mobile: number;
    location: string;
    location_details: string;
    images: [];
}

export interface deleteParkingType {
    id:string;
}

export interface signUpTypes {
    first_name:string;
    second_name:string;
    mobile:number;
    password:string;
    email:string;
}

export interface signInTypes {
    email:string;
    password:string;
}