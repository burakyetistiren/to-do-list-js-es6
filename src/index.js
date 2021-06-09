let id = 0; // changed

class ListItem{
	constructor(description = "", id){ // changed
			this.description = description; // changed
			this.id = id;
		const en = new Engine(); // changed
		en.setSearchBar(); 

	}
	setDescription(desc){
		this.description = desc;
	}

	setId(id){
		this.id = id;
	}

	getDescription(){
		return this.description;
	}
	getId()
	{
		return this.id;
	}
}

class List{
	constructor(){
		this.arr = new Array();
	}

	addToList(item)
	{
		this.arr.push(item);
		//this.foo();
		this.renderList(item);
	}

	removeFromList(item)
	{
		for(let i = 0; i < this.arr.length; i++) // changed
		{
			if(item.getId() == this.arr[i].getId())
			{
				this.arr.splice(i, 1);
			}
		}
		this.foo();
		this.renderList(item);
	}

	listenerFunc(li, item)
	{
		const answer = window.confirm("Have you completed this activity?"); // changed
		if (answer) {
			this.removeFromList(item);
			document.getElementById("toDoList").removeChild(li);
			const en = new Engine(); // changed
			en.setSearchBar();  
		}
		else {}
	}

	renderList(){
		document.getElementById("toDoList").innerHTML = "";

		for(let i = 0; i < this.arr.length; i++) // changed 
		{
			let li = document.createElement("LI"); // changed

			li.addEventListener("click", this.listenerFunc.bind(li, this.arr[i], this));

			let textNode = document.createTextNode(this.arr[i].getDescription()); // changed
			li.appendChild(textNode);
			document.getElementById("toDoList").appendChild(li);
		}
	}

	foo(){
		for(let i = 0; i < this.arr.length; i++) // changed
		{
			console.log(this.arr[i].getDescription());
		}
	}

}

class Engine{
	constructor()
	{
		this.setSearchBar();
		this.list = new List();
	}

	setSearchBar()
	{
		document.getElementById("listItem").value = "Enter a task";
		document.getElementById("addButton").disabled = true;
	}

	newItem()
	{
		let newTask = new ListItem(document.getElementById("listItem").value + " id: " + id, id);
		//console.log("desc:" + newTask.getDescription());
		if(newTask.getDescription() === "0"){
			alert("You must write a task!");
		}
		else
		{
			this.list.addToList(newTask);
			id++;	
		}
	}

	refreshText()
	{
		document.getElementById("listItem").value = "";
		document.getElementById("addButton").disabled = false;
	}
}

const en = new Engine(); // changed