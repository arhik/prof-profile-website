// import $ from "jquery";

// $.fn.modal = require('semantic-ui-modal')
// $.fn.dimmer = require('semantic-ui-dimmer')
// $.fn.transition = require("semantic-ui-transition")
import {Bibtexparser} from "./bibtexparser"
import {inject, bindable, customElement} from "aurelia-framework";

@customElement('publications')
@inject(Bibtexparser)
export class Publications{
	// @bindable bibmodal;
	constructor(parser){
		this.parser = parser;
		this.pubs = "";
		this.publicationslist = [];
	}

	activate(){
		this.pubs  = this.parser.getbib();
		this.pubkeys = Object.keys(this.pubs);
		console.log(this.pubkeys)
		for(var i in this.pubs){
			// console.log(this.pubs[i])
			this.pubs[i].key = i;
			this.publicationslist.push(this.pubs[i])
		}
		return this.publicationslist
	}

	attached(){
		this.pubs  = this.parser.getbib();
		this.pubkeys = Object.keys(this.pubs);
		console.log(this.pubkeys)
		for(var i in this.pubs){
			// console.log(this.pubs[i])
			this.pubs[i].key = i;
			this.publicationslist.push(this.pubs[i])
		}
		return this.publicationslist
		// return $('.ui.modal').modal('show');
	}

	bibshow(){
		// console.log($('.ui.modal'))
		$(".ui.modal").modal({blurring:true}).modal('show');
	}
}