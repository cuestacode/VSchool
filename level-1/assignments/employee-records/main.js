const employees = []
const bob = new Employee("Bob", "Instructor", "$3000/hour", "full-time")
const bill= new Employee("Bill" , "Volunteer" , "$0/hr" , "part-time")
const mike = new Employee("Mike", "Marketing" , "$1000/hour" , "contract")
const sarah = new Employee("Sarah", "Success Mentor", "$200/hour", "part-time")
employees.push(bob, bill, mike, sarah)


//bob.printEmployeeForm = employees[0]
//bill.printEmployeeForm = employees[1]
//mike.printEmployeeForm = employees[2]
//sarah.printEmployeeForm = employees[3]

function Employee(name, title, salary, status){
  this.name = name
  this.title = title
  this.salary = salary
  this.status = status
  //this.printEmployeeForm = this.printEmployeeForm
}

Employee.prototype.employeeForm = function () {
  console.log("name: " + this.name + " title: " + this.title + " salary: " + this.salary + " status: " + this.status)
  //console.log(this.printEmployeeForm)
}

bob.employeeForm ()
bill.employeeForm ()
mike.employeeForm ()
sarah.employeeForm ()

console.log(employees)