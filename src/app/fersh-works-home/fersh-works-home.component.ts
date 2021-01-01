import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fersh-works-home',
  templateUrl: './fersh-works-home.component.html',
  styleUrls: ['./fersh-works-home.component.css']
})
export class FershWorksHomeComponent implements OnInit {
  isSignOut:boolean = false;
  usersArray: any = [];
  currentUser;

  constructor() { }

  ngOnInit(): void {
    this.usersArray.push(JSON.parse(localStorage.getItem('users')))
    this.currentUser = JSON.parse(localStorage.getItem('user'))
    this.usersArray.filter(data => {
      this.usersArray = data
    })
  }
//To delete the existing key in datastore
  deleteUser(index){
    let val = this.usersArray[index]
    if(this.currentUser.user_name !== val.user_name){
      let arr = this.usersArray.splice(index,1)
      localStorage.setItem('users', JSON.stringify(this.usersArray))
    }
    else{
      alert(`You can't delete current user`)
    }
  }

  signOut(){
    localStorage.removeItem('user')
    this.isSignOut = true
  }

}
