import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {
 
  socialList = [
 	 new SocialMediaClass("https://www.facebook.com/taha.hussain.me","facebook","./assets/facebook_icon.png"),
 	 new SocialMediaClass("https://www.linkedin.com/in/tahahussainengineering/","linkedIn","./assets/linkedin_icon.png"),
 	 new SocialMediaClass("https://www.instagram.com/tahahussain/","instagram","./assets/instagram_icon.png"),
 	 new SocialMediaClass("https://twitter.com/TahaHus57662778","twitter","./assets/twitter_icon.png"),
  ]

  constructor() { }

  ngOnInit() {
  }

}

class SocialMediaClass{
	private href : String;
	private alt : String;
	private imgSrc : String;

	constructor(href : String, alt : String, imgSrc : String){
		this.alt = alt;
		this.href = href;
		this.imgSrc = imgSrc;
	}

}