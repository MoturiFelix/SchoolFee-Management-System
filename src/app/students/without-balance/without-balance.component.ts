import { Component, OnInit } from '@angular/core';
import { StudentDataService} from '../../services/student-data.service'


@Component({
  selector: 'app-without-balance',
  templateUrl: './without-balance.component.html',
  styleUrls: ['./without-balance.component.css']
})
export class WithoutBalanceComponent implements OnInit {
  constructor(public  student_array : StudentDataService) { }

  ngOnInit(): void {

  }

  getWIthOutBalance(){
   return this.student_array.students.filter(t=>!t.balance)
  }

}
