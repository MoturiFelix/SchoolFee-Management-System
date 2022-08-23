import { Component, OnInit } from '@angular/core';
import { StudentDataService} from '../../services/student-data.service'


@Component({
  selector: 'app-with-balance',
  templateUrl: './with-balance.component.html',
  styleUrls: ['./with-balance.component.css']
})
export class WithBalanceComponent implements OnInit {

  constructor(public  student_array : StudentDataService) { }

  ngOnInit(): void {

  }

  getWIthBalance(){
   return this.student_array.students.filter(t=>t.balance)
  }

}
