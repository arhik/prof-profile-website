
import $ from "jquery";

$.fn.modal = require('semantic-ui-modal')
$.fn.dimmer = require('semantic-ui-dimmer')
$.fn.transition = require("semantic-ui-transition")
import {bindable, inject, customElement} from "aurelia-framework";
@customElement("bibliography")
export class Bibliography{
	@bindable ibib;
	constructor(){

	}
	activate(){
		// console.log(i)
	}

	showbib(){
		console.log(this.ibib)
		$(this.bibmodal).modal({blurring:true}).modal('show');
	}

	toClipboard(){
		$(this.bimodal).select();
		try {
			console.log(document.body)
    		var successful = document.execCommand('copy');
    		var msg = successful ? 'successful' : 'unsuccessful';
    		console.log('Copying text command was ' + msg);
  		} catch (err) {
    		console.log('Oops, unable to copy');
  		}
	}

}