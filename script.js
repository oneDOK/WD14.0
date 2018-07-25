let btn1 = document.getElementById("btn1"),
		btn2 = document.getElementById("btn2"),
		main = document.getElementById("main"),
		myList = document.getElementById("list"),
		ul = document.getElementsByTagName("ul"),
		story = myList.getElementsByClassName("item"),
		popup = document.getElementsByClassName("popup")[0],
		close = document.querySelector(".close");

console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);

function addItem(){
	let newLi = document.createElement("li");
	newLi.innerHTML = "Новая задача";
	newLi.className = "item";
	myList.appendChild(newLi);
	popup.style.display = "none";
}

function delItem(){
	myList.removeChild(story[0]);

	if (story.length == 0) {
		popup.style.display = "block";
	}
}

function closePopup() {
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);