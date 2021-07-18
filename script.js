const dateEle = document.getElementById("dateEle");
const celebELe = document.getElementById("celebEle");
const checkBtn = document.getElementById("checkBtn");

let date, inupdate, day, month, year, newDate;
const today = new Date().toLocaleDateString();

inupdate = today.split("/");
day = inupdate[0];
month = inupdate[1];
year = inupdate[2];
newDate = `${year}-${month}-${day}`;

dateEle.addEventListener("input", (e) => {
	date = e.target.value;
}, false);


const checkHandler = () => {
	if (date === newDate) {
		celebELe.textContent = "Happy Birthday 🍰 Dear...";
	} else {
		celebELe.textContent = "It's not your 😕 birthday...";
	}
};


checkBtn.addEventListener("click", (e) => {
	e.preventDefault();

	if (dateEle.checkValidity()) {
		checkHandler();
	} else {
		celebELe.textContent = "Field required! 🤖";
	}

})