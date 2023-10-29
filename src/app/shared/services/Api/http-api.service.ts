import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { JWTToken } from '../../../modules/account/model/authenticate-user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

    apiURL: string = window.location.origin + '/api/';

  constructor(private httpClient: HttpClient, private router: Router) { }

  public async getHeaders() {
    let token = '';
    let headers: HttpHeaders;
    const tokenString = localStorage.getItem('jWTToken');
    if (tokenString !== 'undefined' && tokenString !== '' && tokenString !== null) {
      // const jWTToken = <JWTToken>JSON.parse(localStorage.getItem('jWTToken'));
      // if (typeof jWTToken.accessToken !== 'undefined') {
      //   token = jWTToken.accessToken.token;
      // }
    }
    if (token !== '') {
      headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    } else {
      headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    return headers;
  }

  async getasyncData(url: string) {
    const headers = await this.getHeaders();

        url = `${this.apiURL}${url}`;
        return new Promise((resolve, reject) => {
          this.httpClient.get(url, { headers: headers, observe: 'response' })
            .subscribe(
              data => {
                if (data.status === 200) {
                  resolve(data.body);
                } else {
                  this.handleError(data);
                }
              },
              error => {
                this.handleError(error);
                resolve(error);
                  reject(error);
              },
              () => {
              }
            );
        });
        // return this.httpClient.get(url);
    }

  public getData(url: string): Observable<any> {
        url = `${this.apiURL}${url}`;
        return this.httpClient.get(url);
    }

  async  postData(url: string, data: string) {
    const headers = await this.getHeaders();
    return new Promise((resolve, reject) => {
      this.httpClient.post(`${this.apiURL}${url}`, data, { headers: headers, observe: 'response' })
            .subscribe(
              data => {
                if (data.status === 200) {
                  resolve(data);
                } else {
                  this.handleError(data);
                }
              },
              error => {
                resolve(error);
                reject(error);
              },
              () => {
              }
            );
        });
    }

  async putData(url: string, data: string) {
    const headers = await this.getHeaders();
        return new Promise((resolve, reject) => {
          this.httpClient.put(`${this.apiURL}${url}`, data, { headers: headers, observe: 'response' })
                .subscribe(
                  data => {
                    if (data.status === 200) {
                      resolve(data);
                    } else {
                      this.handleError(data);
                    }
                    },
                  error => {
                    this.handleError(error);
                    resolve(error);
                    },
                    () => {
                        // console.log("The Put observable is now completed.");
                    });
        });
    }

    deleteData(url: string): Observable<{}> {
        return this.httpClient.delete(`${this.apiURL}${url}`, { responseType: 'text' })
            .pipe();
    }

  async  delete(url: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return new Promise((resolve, reject) => {
      this.httpClient.delete(`${this.apiURL}${url}`, { headers: headers})

        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          },
          () => {
            // console.log("The POST observable is now completed.");
          });
    });
  }

  async  deleteMultiple(url: string, data: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: data
    };
    return new Promise((resolve, reject) => {
      this.httpClient.delete(`${this.apiURL}${url}`, options)

        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          },
          () => {
            // console.log("The POST observable is now completed.");
          });
    });
  }

  handleError(error) {
    console.log(error);
    if (typeof error.status !== 'undefined') {
      switch (error.status) {
        case 401: {
          console.log('in');
         // this.router.navigate(['/Account/Login']);
          alert('retry login. login failed!');
          break;
        }
        case 403: {
          break;
        }
        default: {
          break;
        }
      }
    }
  }
}
