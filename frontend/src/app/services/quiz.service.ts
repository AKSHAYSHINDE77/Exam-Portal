import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl = "http://localhost:8080";
  constructor(private _http: HttpClient) { }

  //get all quiz
  public quizzes() {
    return this._http.get(this.baseUrl+"/quiz/")
  }

  //add quiz
  public addQuiz(quiz:any)
  {
    return this._http.post(this.baseUrl+"/quiz/",quiz);
  }

  //delete quiz
  public deleteQuiz(qId:any)
  {
    return this._http.delete(this.baseUrl+"/quiz/"+`${qId}`,qId);
  }

  //get single quiz
  public getQuiz(qId:any)
  {
    return this._http.get(this.baseUrl+"/quiz/"+`${qId}`,qId);
  }

  //update quiz
  public updateQuiz(quiz:any)
  {
    return this._http.put(this.baseUrl+"/quiz/",quiz);
  } 

  //get quizzes of category
  public getQuizzesOfCategory(cid:any)
  {
    return this._http.get(this.baseUrl+"/quiz/category/"+`${cid}`);
  }

  //get active qiuzzes
  public getActiveQuizzes()
  {
    return this._http.get(this.baseUrl+"/quiz/active");
  }

  //get active quizzes of category
  public getActiveQuizzesOfCategory(cid:any)
  {
    return this._http.get(this.baseUrl+"/quiz/category/active/"+`${cid}`);
  }
}
