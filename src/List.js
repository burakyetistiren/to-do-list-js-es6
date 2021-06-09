export class List{
	constructor(){
		this.arr = new Array();
	}

	addToList(item)
	{
		this.arr.push(item);
		this.foo();
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