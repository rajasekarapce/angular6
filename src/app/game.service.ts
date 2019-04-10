import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  res: Object;
  userlist:any;
  userid:any;
 // const uri = 'http://localhost:4000';

 constructor(private http: HttpClient) { }

    addGame(name, price) {
        const obj = {
            name: name,
            price: price
        };
        this.http.post(`http://localhost:8090/learn/angular/index.php`, obj)
            .subscribe(() => console.log('Done')
        );
    }

    getGames() {
        return this.http.get(`http://localhost:8090/learn/angular/view.php`) 
        .toPromise()
        .then()
        .catch();
    }

    editGame(id) {
    	return this
            .http
            .get(`http://localhost:8090/learn/angular/edit.php?edit=${id}`)
    }

    updateGame(name, price, id) {

        const obj = {
        name: name,
        price: price
        };
        this
        .http
        .post(`http://localhost:8090/learn/angular/update.php?edit=${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    deleteGame(id) {
        const obj = {
            del: id
        };
        this.http.post(`http://localhost:8090/learn/angular/delete.php`, obj)
            .subscribe(() => console.log('Done')
        );
    }

    signUp(name: string, username: string, password: string) {
        return this.http.post(`http://localhost:8090/learn/angular/signup.php`, { name, username, password })
        .pipe(map(user => {
            if (user) {
                localStorage.setItem('signupUser', JSON.stringify(user));
            }
            return user;
        }));
    }

    getUserList(){
        return this.http.get('http://localhost:8090/learn/angular/userlist.php')
        .toPromise()
        .then()
        .catch();
    }
    
    singleuser() {
        this.userlist = JSON.parse(localStorage.getItem("currentUser"));
        this.userid = (this.userlist.id);
    	return this
            .http
            .get(`http://localhost:8090/learn/angular/edituser.php?edit=${this.userid}`)
    }

    updateuser(name, username, password) {
        this.userlist = JSON.parse(localStorage.getItem("currentUser"));
        this.userid = (this.userlist.id);

        const obj = {
         name: name,
         username: username,
         password: password
        };
        this.http
        .post(`http://localhost:8090/learn/angular/updateuser.php?edit=${this.userid}`, obj)
        .subscribe(res => console.log('Done'));
    }
    login(username: string, password: string) {
        return this.http.post<any>(`http://localhost:8090/learn/angular/login.php`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }));
    }          
}
