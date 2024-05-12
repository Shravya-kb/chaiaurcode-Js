
    const cars = new Array(["Saab", "Volvo", "BMW"]);

   const places= new Array(["karnataka","goa","coorg"]);

//    places.push("goa");
//    console.log(places);
    
 console.log(places.at(0));//goa

//  places.push("karnataka");
//  places.push("coorg");
//  console.log(places.concat(cars));
//  console.log(... cars,...places);
 const marvel_heros = ["thor", "Ironman", "spiderman"];
 const dc_heros = ["superman", "flash", "batman"];
 
 // marvel_heros.push(dc_heros)

//  console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]