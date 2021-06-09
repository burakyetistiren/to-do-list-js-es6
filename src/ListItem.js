import {Engine} from './Engine.js';
export class ListItem{
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