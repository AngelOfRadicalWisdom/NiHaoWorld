
import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import {Http, Headers} from '@angular/http';
import { UserData } from '../../Models/UserData.model';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
let apiUrl = 'http://localhost:8000/api/';


/*
  Generated class for the PhpServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PhpServerProvider {
   private responseData;

  constructor(public http: Http) {
    console.log('Hello PhpServerProvider Provider');
    
  }
  signup(UserData, type) {
    return new Promise((resolve, reject) => {
  let headers = new Headers();
  headers.append('Content-Type','application/json');
  this.http.post(apiUrl + type, JSON.stringify(UserData), {headers: headers})
  .subscribe(res => {
        resolve(res.json());
      }, (err) => {
    reject(err);
    console.log("Failed Registration");
  });
    });
  }
  getRevcenters(type) {
      return new Promise(resolve => {    
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        this.http.get(apiUrl+type)
        .subscribe(data => {
          resolve(data.json()); 
          //data.json();

        },
         err => {     
            console.log(err);    
        }); 
       });
      }
      login(credentials,type){
        return new Promise((resolve, reject) => {
          let headers = new Headers();
          headers.append('Content-Type','application/json');
          this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
                resolve(res.json());
                this.responseData=credentials;
                //this.responseData.json();
              }, (err) => {
            reject(err);
            console.log("Failed Registration");
          });
            });
          }
          getUsername(){
           return this.responseData;
          }
          getLearningPath(credentials,type) {
            return new Promise(resolve => {    
              let headers = new Headers();
              headers.append('Content-Type','application/json');
              this.http.post(apiUrl+type,JSON.stringify(credentials),{headers:headers})
              .subscribe(data => {
                resolve(data.json()); 
                //data.json();
      
              },
               err => {     
                  console.log(err);    
              }); 
             });
            }

      }

