const url2 = "https://restcountries.com/v3.1/all";

const XHR2 = new XMLHttpRequest();
XHR2.open("GET", url);
XHR2.send();

XHR2.onload = () => {
  const cont = JSON.parse(XHR.response);
  const details = []
  cont.forEach(val => {
    const {name,flag,capital} = val;
    details.push({name,flag,capital})
  });
  console.log("Name Capital and Flag of the Countries")
  console.log(details)
}