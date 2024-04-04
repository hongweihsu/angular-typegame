import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'typegame';
  userId: string = faker.string.uuid()
  randomText: string = faker.lorem.sentence()
  userInputText: string = ''

  onUserInput(value: string){
    // console.log(value)
    if(value.length===0){
      this.userInputText = ''
    }
    if(value){
      this.userInputText = value 
    }
  }

  compareText(randomLetter:string, userInputLetter:string){
    if(!userInputLetter){
      return "pending"
    }
    return userInputLetter === randomLetter ? "correct" : "incorrect"

  }
  

}
