const url4 = "https://restcountries.com/v3.1/all";

const xhr4 = new XMLHttpRequest();
xhr4.open("GET", url4);
xhr4.send();

xhr4.onload = () => {
  const cont = JSON.parse(xhr4.response);
  const total = cont.reduce((accum,val) => {
    if(val.population){
        return accum+ val.population
    }
    return accum;
  },0)
  console.log("Total Population")
  console.log(total)
}