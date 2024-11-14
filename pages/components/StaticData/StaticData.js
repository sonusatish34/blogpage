"use client"
export default function StaticData(st){

    if(String(st).includes("maruthi"))
    {
        return "self drive car rental "
    }
    else if(String(st).includes("hyundai")) {
         return "self drive cars "
    }
    else if(String(st).includes("tata")) {
         return "car rental services "
    }
    else if(String(st).includes("mahindra")) {
         return "cars for rent "
    }
    else if(String(st).includes("honda")) {
         return "car rentals near me "
    }
    else if(String(st).includes("mg")) {
         return "car rentals near me "
    }
    else {
        return "self drive car rental ";
    }

    
}