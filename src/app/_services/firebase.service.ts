import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs';

import { Business } from '../_models/Business';
import { Category } from '../_models/Category';

@Injectable()
export class FirebaseService {
	businesses: Observable<any[]>;
  categories: Observable<any[]>;

  constructor(private _af: AngularFireDatabase) { }

  getBusinesses() {
  	this.businesses = this._af.list('/businesses').valueChanges();
  	return this.businesses;
  }

  /*I getCategories() {
  	this.categories = this._af.list('/categories').valueChanges();
  	return this.categories;
  }*/


}
