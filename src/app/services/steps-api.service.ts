import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepsApiService {

  constructor(private httpClient: HttpClient) { }

  getStepsDetails(): Observable<any> {
    const url =  "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge";
    return this.httpClient.request('get', url)
}
}
