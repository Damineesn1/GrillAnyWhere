import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private _url:string = 'http://localhost:8080//grillAnywhere'
  constructor(private http:HttpClient) { }

  createUser(userObj:any,callback){
    this.http
    .post(this._url+'/oregister',userObj).subscribe(response=>{
      callback(null)
    },error=>{
      callback(error)
    })
   }
   buildAndCreateUser(user:any,callback){
   
      let userObj:any ={
        name: user.name,
        email: user.email,
        address:user.address,
        phn_no:user.phn_no,
        password:user.password
      }
      this.createUser(userObj,(err)=>{
        callback(err)
      })
   
   }
   getUser(callback){
    this.http.get(this._url+'/oregister').subscribe(data=>{
    callback(data)
    console.log(data)},error=>{

    console.log('unable to process request')

    })
  }

  findByOwner(user, callback) {
    this.http.get(this._url + '/byOwner/' + user.name).subscribe(data => {
      callback(data)
      console.log(data)
    }, error => {

      console.log('unable to process request')

    })
  }
  
}
