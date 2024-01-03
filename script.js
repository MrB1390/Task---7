const url = "https://restcountries.com/v3.1/all";

const XHR = new XMLHttpRequest();
XHR.open("GET", url);
XHR.send();

XHR.onload = () => {
  const cont = JSON.parse(XHR.response);
  console.log("Countries having asia as a contient");
  const filteredcont = cont.filter((val) => val.continents == "Asia");
  console.log(filteredcont);
  console.log("Name of the countries");
  const countryName = filteredcont.map((country) => country.name);
  console.log(countryName);
};
