import { Injectable } from '@angular/core';
import {Student} from '../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  name='';
  balance= 0;
    
  OnAdd(){
    this.students.push({
      name:this.name,
      balance:this.balance
    })
  }

students:Student[]=[

    {
      name: 'FELIX MOTURI',
      balance: 20000,
    },

    {
      name: 'MADINA ELAI',
      balance: 5000,
    },

    {
      name: 'OKAMPO MATEMPO',
      balance: 1000,
    },

    {
      name: 'GERALD MUCHAI',
      balance: 30000,
    },

    {
      name: 'MASHASH KISHUSH',
      balance: 0,
    },

    {
      name: 'MANDEM GALDEM',
      balance: 0,
    },

    {
      name: 'STUDENT TEACHER',
      balance: 30,
    },
    
     {
      name: 'FELIX MOTURI',
      balance: 20000,
    },

  ]

  
  constructor() { }
}
