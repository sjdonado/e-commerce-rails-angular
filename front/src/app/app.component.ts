import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Users in db';
  data: any = null;
  arrayUsers: any = null;
  constructor(private http: Http) {}
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://localhost:3000/users').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.arrayUsers = Array.of(data.json().data)[0];
      console.log(this.arrayUsers);
    });
  }
/*   listUsers() {
    this._http.get('http://localhost:3000/users').map((res: Response) => res.json()).subscribe(data => {
      console.log(this.users(data));
      console.log(data);
    });
  } */
  private users(data): Object[] {
    return Object.keys(data).map(function(index){
      return data[index];
    });
  }
}
