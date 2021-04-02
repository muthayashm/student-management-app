import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from './response';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAllEmployees(): Employee[] {
    return [
      {
        //Added this from employee.component.ts
        id: '101',
        name: 'Elon Musk',
        salary: 1000000,
      },
      {
        id: '102',
        name: 'Jeff Bezos',
        salary: 1999999,
      },
      {
        id: '103',
        name: 'Warren Buffet',
        salary: 29999999,
      },
      {
        id: '104',
        name: 'Jack Ma',
        salary: 49999999,
      },
      {
        id: '105',
        name: 'Bill Gates',
        salary: 178999999,
      },
    ];
  }

  getAllEmployeesFromDB(): Observable<Response> {
    const URL = 'http://localhost:8081/employees/all';
    const OPTIONS = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.get<Response>(URL, OPTIONS);
  }

  sortAscBySalary(): Observable<Response> {
    const URL = 'http://localhost:8081/employees/all?sorton=salary&order=desc';
    const OPTIONS = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.get<Response>(URL, OPTIONS);
  }

  sortAscById(): Observable<Response> {
    const URL = 'http://localhost:8081/employees/all?sorton=id&order=desc';
    const OPTIONS = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.get<Response>(URL, OPTIONS);
  }
}
