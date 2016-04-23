import $ from "jquery";

$.fn.modal = require('semantic-ui-modal')
$.fn.dimmer = require('semantic-ui-dimmer')
$.fn.transition = require("semantic-ui-transition")

import Clipboard from "clipboard";

import {bindable, inject, customElement} from "aurelia-framework";

@customElement("bibliography")
export class Bibliography{
	@bindable ibib;
	@bindable bibclip;
	constructor(){

	}

	activate(){

	}

	attached(){
		this.clipboard = new Clipboard(this.bibclip);
		console.log(this.clipboard)
		this.clipboard.on('success', function(e) {
		    console.info('Action:', e.action);
		    console.info('Text:', e.text);
		    console.info('Trigger:', e.trigger);
		    e.clearSelection();
		});

		this.clipboard.on('error', function(e) {
		    console.error('Action:', e.action);
		    console.error('Trigger:', e.trigger);
		});
	}

	grabbib(){
		console.log("triggered")
	}

	detached(){
		this.clipboard.destroy();
	}

	showbib(){
		$(this.bibmodal).modal({blurring:true}).modal('show');
	}
}