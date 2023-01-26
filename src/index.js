import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
var arr = ["sunny", "Mallika", "Sneha", "Apsara", "Nayana"];
var maxlen = arr.length;
function arrReverse(arr) {
  for (var i = maxlen - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
arrReverse(arr);
