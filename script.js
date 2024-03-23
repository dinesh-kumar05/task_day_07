
var request = new XMLHttpRequest();

request.open (`GET`,`https://restcountries.com/v3.1/all`,true);

request.send();

request.onload = function(){
    var data =JSON.parse(request.response);
    console.log(data);


// a.Get all the countries from the Asia continent /region using the Filter function

    var task1 = data.filter((element)=>{

        return element.region === "Asia";

    })
    console.log(task1)



// b.Get all the countries with a population of less than 2 lakhs using Filter function

var task2 = data.filter((element1)=>{

   element1 = element1.population < 200000;

   return element1

})
console.log(task2)

// c.Print the following details name, capital, flag using forEach function


data.forEach((country) => {
    console.log("Name:", country.name.common);
    console.log("Capital:", country.capital);
    console.log("Flag:", country.flags.svg);
});

// d.Print the total population of countries using reduce function

var task4 = data.reduce((acc,curr)=>
  acc + curr.population,0
)
console.log(task4)

// e.Print the country which uses US Dollars as currency.


  var task5 = data.filter((country)=>{
    return country.currencies && country.currencies.USD;
})
console.log(task5)
}

