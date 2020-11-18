import { Component } from '@angular/core';
import { steps } from './model/steps';
import { StepsApiService } from './services/steps-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'capitalone';
  steps: steps[] = [];
  err_msg:String;
  constructor(public  stepsApi: StepsApiService){

  }

  ngOnInit(): void {
    this.stepsApi.getStepsDetails().subscribe(res => {
      this.steps = res.sort((a:steps,b:steps)=>{
        return a.stepNumber==b.stepNumber?0
              :a.stepNumber>b.stepNumber?1:-1
   });
   this.steps.map(step =>  step.versionContent.sort((a,b) => {return new Date(a.effectiveDate) <= new Date(b.effectiveDate)?1:-1; }).splice(1));
   console.log(this.steps);
    },
    (err) => {
      this.err_msg = 'Error while loading api';
    }
    );
  } 

}
