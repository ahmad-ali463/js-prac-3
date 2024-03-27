
// let cities1 = ['Fiasalabad','Lahore','Karachi','Peshawar','Quetta']


// function printAllcities (){
//     for( let i = 0; i<=cities1.length;i++){
//     let city  = cities1[index]
// console.log('city',city)
// document.getElementById("ouput").innerHTML = city
//     }

// }



let cities = ['Faisalabad','Multan','Karachi', 'Lahore','Peshawar','Hasilpur']
function printAllcities(){
document.getElementById("output").innerHTML="";



for ( let index = 0; index < cities.length; index++){
 let city = cities[index]
 console.log('city', city)
 document.getElementById("output").innerHTML += index +")" + city +"<br/>"
}
}





function addCities(){
    let city = document.getElementById("inputText").value;
    if(!city){
        alert("Please add your cities")
        return;
    }
    cities.unshift(city)
    document.getElementById("output").innerHTML = '<span style = " color: blue; font-size: blue ">"'+city+'"</span>Successfully Added in the list"'


}