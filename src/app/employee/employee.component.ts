import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  //Adding data manually
  //manipulated this on 1-4-21
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService
  ) {}

  //Added after list example
  selectedEmployee?: Employee;

  onSelect(emp: Employee): void {
    this.selectedEmployee = emp;
    console.log(`Hi this is: ${emp.name}`);
  }

  onClear(): void {
    this.selectedEmployee = null;
  }

  //added on 1-4-21 for service part
  getEmployees(): void {
    this.messageService.addMessage('Getting all employees');
    this.employees = this.employeeService.getAllEmployees();
  }

  getEmployeesFromDB(): void {
    this.messageService.addMessage('Fetching Employees from DB');
    this.employeeService.getAllEmployeesFromDB().subscribe((emp) => {
      this.employees = emp.message.map((emp) => ({
        name: emp.name,
        salary: emp.salary,
        id: emp.empId,
      }));
    });
  }

  sortBySalary() {
    this.messageService.addMessage('Sorting descending By salary');
    this.employeeService.sortAscBySalary().subscribe((emp) => {
      this.employees = emp.message.map((emp) => ({
        name: emp.name,
        salary: emp.salary,
        id: emp.empId,
      }));
    });
  }

  sortById() {
    this.messageService.addMessage('Sorting descending By ID');
    this.employeeService.sortAscById().subscribe((emp) => {
      this.employees = emp.message.map((emp) => ({
        name: emp.name,
        salary: emp.salary,
        id: emp.empId,
      }));
    });
  }

  ngOnInit(): void {
    //Added on 1-4-21
    this.messageService.addMessage('Employee Initiated');
    //this.getEmployees();

    this.getEmployeesFromDB();
  }
}
