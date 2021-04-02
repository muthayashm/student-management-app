import {Employee} from './employee'

interface EmpResponse{
    empId : string,
    name : string,
    salary : number
}

export interface Response{
    message : EmpResponse[]
}