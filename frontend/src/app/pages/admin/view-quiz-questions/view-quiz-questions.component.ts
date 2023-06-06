import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  qId: any;
  qTitle: any;
  questions = [
    {
      queId: '',
      content: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: '',
    }
  ];

  constructor(private _route: ActivatedRoute, private _question: QuestionsService, private _snack: MatSnackBar) { }
  //get  question
  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];

    this._question.getQuestionsOfQuiz(this.qId).subscribe((data: any) => {
      console.log(data);
      this.questions = data;
    },
      (error) => {
        console.log(error);
      });
  }

  //delete Question
  deleteQuestion(quesId: any) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are You Sure, Want to Delete this Question ?',
    }).then((result) => {
      if (result.isConfirmed) {
        this._question.deleteQuestion(quesId).subscribe((data: any) => {
          this._snack.open('Question Deleted ', '', {
            duration: 3000,
          })
        });
        this.questions = this.questions.filter((q) => q.queId != quesId);
      }
    },
      (error) => {
        Swal.fire('Error', 'Error in deleting Question', 'error');
        console.log(error);
      });
  }
}
