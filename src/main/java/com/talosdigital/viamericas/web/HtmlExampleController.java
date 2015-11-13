package com.talosdigital.viamericas.web;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HtmlExampleController {

	@RequestMapping(value = "api/send/html",
			method = RequestMethod.GET,
			produces = MediaType.TEXT_HTML_VALUE)
	public String sendHtml(){
		String html = "<p>"
				+ "This is a p that come to the server side"
				+ " <strong>"
				+ "with bold text</strong> </p>";
		return html;
	}
}
