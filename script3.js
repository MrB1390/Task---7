const url3 = "https://restcountries.com/v3.1/all";

const XHR3 = new XMLHttpRequest();
XHR3.open("GET", url3);
XHR3.send();

XHR3.onload = () => {
  const cont = JSON.parse(XHR3.response);
  console.log("USD using currencies");
  const filtered = cont.filter((country) => country.currencies && country.currencies.USD);
  console.log(filtered);
}
