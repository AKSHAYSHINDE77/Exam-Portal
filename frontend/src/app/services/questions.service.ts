import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  baseUrl = "http://localhost:8080";

  constructor(private _http:HttpClient) { }

  // get questions
  public getQuestionsOfQuiz(qid:any)
  {
    return this._http.get(this.baseUrl+"/question/quiz/all/"+`${qid}`);
  }

  //get questions for quiz
  public getQuestionsOfQuizForTest(qid:any)
  {
    return this._http.get(this.baseUrl+"/question/quiz/"+`${qid}`);
  }

  // add questions
  public addQuestions(question:any)
  {
    return this._http.post(this.baseUrl+"/question/",question);
  }

  //delete Question
  public deleteQuestion(questionId:any)
  {
    return this._http.delete(this.baseUrl+"/question/"+`${questionId}`,questionId);
  }

  //eval Quiz
  public evalQuiz(questions:any)
  {
    return this._http.post(this.baseUrl+"/question/eval-quiz/",questions);
  }
}
