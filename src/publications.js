import {Bibtexparser} from "./bibtexparser"
import {inject} from "aurelia-framework";

@inject(Bibtexparser)
export class Publications{
	constructor(parser){
		this.parser = parser;
		this.pubs = [
			{
				title:"Title1",
				authors:["1,2"],
				year:"xxxx",
				journal:"",
				conference:"",
				accepted:true,
				rejected:false,
				under_review:false
			}
		]

		// this.publications = "";

	}

	activate(){
		this.pubs  = this.parser.getbib();
		this.pubkeys = Object.keys(this.pubs);
		console.log(this.pubs)
		return this.publications
	}
	attached(){

		for(var i in this.pubs){
			console.log(this.pubs[i])
		}
	}
}