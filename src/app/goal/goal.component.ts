import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  styles:['h1{color:red}']
})
export class GoalComponent implements OnInit {

  goals:Goal[]=[
    new Goal(1, 'Watch the Originals','Find the second season', new Date(2022, 3, 14)),
    new Goal(2, 'Finish Angular week one content', 'After this i have to be able to create my first angular page', new Date(2023,5,17)),
    new Goal(3, 'Travel to the upcountry', 'Find A Heifer to buy', new Date(2022,7,12)),
    new Goal (4,'Buy new laptop', 'To enable honing my coding and academic writing skills', new Date(2022,11,17))
  ];
  toggleDetails(index:number){
    this.goals[index].showDescription=!this.goals[index].showDescription;
  };
  addNewGoal(goal: any){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate= new Date(goal.completeDate)
    this.goals.push(goal);
  }
  deleteGoal(isComplete: any,index: number){
    if(isComplete){
      let toDelete = confirm (`Are you sure you want to delte ${this.goals[index].name}?`)
      if(toDelete){
      this.goals.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
