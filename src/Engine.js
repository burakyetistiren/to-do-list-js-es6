import {List} from './List.js';
import {ListItem} from './ListItem.js';

let id = 0;
let list = new List(); //class variable 
export class Engine{
	constructor()
	{
		this.setSearchBar();
		//list = new List();

        document.getElementById("listItem").addEventListener("click", this.refreshText);
        document.getElementById("addButton").addEventListener("click", this.newItem);
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
			list.addToList(newTask);
			id++;	
		}
	}

	refreshText()
	{
		document.getElementById("listItem").value = "";
		document.getElementById("addButton").disabled = false;
	}
}
