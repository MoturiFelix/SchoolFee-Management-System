import { Component, OnInit } from '@angular/core';
import { StudentDataService} from '../../services/student-data.service'


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(public  student_array : StudentDataService) { }

  ngOnInit(): void {
  }

}
