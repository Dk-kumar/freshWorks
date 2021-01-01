import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fersh-works',
  templateUrl: './fersh-works.component.html',
  styleUrls: ['./fersh-works.component.css']
})
export class FershWorksComponent implements OnInit {


  userForm: FormGroup;
  emailId: string;
  loginError: string;
  password: any;
  isLoggedIn: boolean = false;
  isAlert: boolean = false;
  isAlertExist: boolean = false;
  userArray: any = [];
  currentUser;
  constructor(private _fb: FormBuilder) {
    if (localStorage.getItem('user') !== null) {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }
  }

  ngOnInit(): void {
    this.userForm = this._fb.group({
      email_id: [],
      user_name: [],
      contact_no: [],
      password: [],
    });
  }

//Through these only one client process  can able to access
  signIn() {
    this.userArray.push(JSON.parse(localStorage.getItem('users')))
    this.userArray.filter(res => {
      this.userArray = res
    })
    let val = this.userArray.filter(res => {
      return (res.email_id.search(this.emailId) > -1) ? 1 : 0
    })
    if (val.length > 0) {
      let result = this.userArray.filter(data => data.email_id === this.emailId && data.password === this.password);
      result.filter(data => {
        this.currentUser = data
      })
      //Current data are storeed in localstorage
      localStorage.setItem('user', JSON.stringify(this.currentUser))
      if (this.emailId === result[0].email_id) {
        this.isLoggedIn = true;
      }
    }
    else {
      this.isAlert = true
      this.loginError =`Wrong emailid and password`
      console.log(this.loginError)
    }
  }
//Create i.e KEY is create to store in localstorage
  signUp() {
    let userForm = this.userForm.value
    this.userArray = JSON.parse(localStorage.getItem('users'))
    if (this.userArray == null) {
      this.userArray = []
      this.userArray.push(this.userForm.value)
      this.isLoggedIn = true
      //All data are store in localstorage in JSON Format
      localStorage.setItem('users', JSON.stringify(this.userArray))
      
      localStorage.setItem('user', JSON.stringify(this.userForm.value))

    }

    if (this.userArray !== null) {
      let result
      this.userArray.filter(res => {
        result = (res.email_id.search(userForm['email_id']) > -1) ? 0 : 1
      })
      if (result) {
        this.userArray.push(this.userForm.value)
        this.isLoggedIn = true
        localStorage.setItem('users', JSON.stringify(this.userArray))
        localStorage.setItem('user', JSON.stringify(this.userForm.value))
      }
      //If Key is exist an error message will be shown
      else{
        this.isAlertExist = true
        this.loginError = `Already existing one!!`
        console.log(this.loginError)
      }
    }

  }

}
