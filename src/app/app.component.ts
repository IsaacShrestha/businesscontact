import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
  	this.items = this.db.list('items').valueChanges();
  	//console.log(this.items);
  }
}
