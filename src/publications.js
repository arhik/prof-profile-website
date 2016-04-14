import {Bibtexparser} from "./bibtexparser"
import {inject} from "aurelia-framework";

@inject(Bibtexparser)
export class Publications{
	constructor(parser){
		this.parser = parser;
		this.pubs = "";
		this.publicationslist = [];
	}

	activate(){
		this.pubs  = this.parser.getbib();
		this.pubkeys = Object.keys(this.pubs);
		console.log(this.pubs)
		for(var i in this.pubs){
			console.log(this.pubs[i])
			this.publicationslist.push(this.pubs[i])
		}
		return this.publicationslist
	}

	attached(){

	}
}