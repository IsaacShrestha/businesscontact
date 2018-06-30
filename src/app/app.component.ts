import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from './_services/firebase.service'; 

import { Business } from './_models/Business';
import { Category } from './_models/Category';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	businesses: Business[];
	categories: Category[];
  appState: string;
  activeKey: string;


  constructor(private _firebaseService: FirebaseService) {
    this.appState = "default";
  }

  ngOnInit() {
  	this._firebaseService.getBusinesses().subscribe(businesses => {
      console.log("Component business="+this.businesses);
  		this.businesses = businesses;
  	});

  	/*this._firebaseService.getCategories().subscribe(categories => {
  		this.categories = categories;
  	});*/

  }

  changeState(state, key) {
    console.log("state= "+state);
    if(key) {
      this.activeKey = key;
      console.log("Obtained key="+key);
    }
    this.appState = state;
  }
}
