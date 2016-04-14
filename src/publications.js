import $ from "jquery";

// var transitioncss = require("../node_modules/semantic-ui/dist/components/transition.css")
// var transition = require("../node_modules/semantic-ui/dist/components/transition.js")
// var dimmer = require("../node_modules/semantic-ui/dist/components/dimmer.js")
// var dimmercss = require("../node_modules/semantic-ui/dist/components/dimmer.css")
// $.fn.modal = require("../node_modules/semantic-ui/dist/components/modal.js")
// var modalcss = require("../node_modules/semantic-ui/dist/components/modal.min.css")
// import '../node_modules/semantic-ui/dist/semantic.css';
// import '../node_modules/semantic-ui/dist/components/dimmer';
// import '../node_modules/semantic-ui/dist/components/transition';
// import '../node_modules/semantic-ui/dist/components/dropdown';
// import '../node_modules/semantic-ui/dist/components/modal';
// import '../node_modules/semantic-ui/dist/components/rating';
// import '../node_modules/semantic-ui/dist/components/tab';
// import '../node_modules/semantic-ui/dist/components/popup';
// import '../node_modules/semantic-ui/dist/components/sticky';
// import {semantiUI} from "semantic-ui";

// import 'semantic-ui-popup/popup.css'
$.fn.modal = require('semantic-ui-modal')
$.fn.dimmer = require('semantic-ui-dimmer')
$.fn.transition = require("semantic-ui-transition")
import {Bibtexparser} from "./bibtexparser"
import {inject, bindable} from "aurelia-framework";

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
		console.log(this.pubs)
		for(var i in this.pubs){
			console.log(this.pubs[i])
			this.publicationslist.push(this.pubs[i])
		}
		return this.publicationslist
	}

	attached(){
		// return $('.ui.modal').modal('show');
	}

	bibshow(){
		// console.log(temp);
		console.log($(this.bibmodal))
		$(this.bibmodal).modal({blurring:true}).modal('show');
		// $(this.bibmodal).modal('show');
	}
}