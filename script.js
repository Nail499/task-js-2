function yanacaq(distance,time) {
    let speed = distance/time;
    
    if(speed>=0 && speed<=60){
        litr = 6;
    }else if(speed>60 && speed<=90){
        litr = 9;
    }else if(speed>90 && speed<=120){
        litr = 8;
    }else{
        litr = 10;
    }
   let gasoline = (distance*litr)/100;
   return `${distance} km yolu ${time} saat müddətinə getmək üçün, sizin ortalama sürətiniz ${speed} km saat olmalıdır. Sizə lazım olacaq yanacaq miqdarı ${Math.ceil(gasoline)} litr, ortalama yanacaq sərfiyyatı isə ${litr} l/100 km olacaq`;
    
}
console.log(yanacaq(130,2));