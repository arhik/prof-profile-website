import {Bibtexparser} from "./bibtexparser"
import {inject, bindable} from "aurelia-framework";

import $ from "jquery";

@inject(Bibtexparser)
export class Publications{
	@bindable bibmodal;
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

	bibshow(){
		console.log(this.bibmodal);
		$('.ui.modal').modal('show');
	}
}