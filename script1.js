const url1 = "https://restcountries.com/v3.1/all";

const XHR1 = new XMLHttpRequest();
XHR1.open("GET", url1);
XHR1.send();
XHR1.onload = () => {
  const population = JSON.parse(XHR1.response);
  console.log("Population less than 2 lakhs");
  const filteredPop = population.filter((les) => les.population < 200000);
  console.log(filteredPop);
};
