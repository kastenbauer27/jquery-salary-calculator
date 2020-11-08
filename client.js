console.log('Hi from JS!');

$(document).ready(onReady);

let employeeArray = [];
let totalMonthly = 0;
let newEmployee = {
    firstName : '',
    lastName : '',
    iD : '',
    jobTitle : '',
    annualSalary : 0
};

// make onReady function to init jquery and set up click listeners
function onReady() {
    console.log('Hi from JQ!');
    $('#submitButton').on('click', submitEmployee);
}

// function to handle click event and change values of newEmployee object and call calculator function
function submitEmployee(event) {
    console.log('Clicked Submit Button');
    event.preventDefault();
    newEmployee = {
        firstName : $('#firstName').val(),
        lastName : $('#lastName').val(),
        iD : $('#idNumber').val(),
        jobTitle : $('#jobTitle').val(),
        annualSalary : parseInt($('#annualSalary').val())
    };
    console.log('new employee is: ', newEmployee);
    employeeArray.push(newEmployee);
    calculateMonthly(newEmployee);
    appendEmployees();
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val(0);
}

// function to calculate the changing monthly cost after adding more employees
function calculateMonthly( employee ) {
    console.log('Calculating monthly cost after adding: ', employee);
    totalMonthly += (employee.annualSalary / 12);
    console.log('New monthly cost is: ', totalMonthly);
    $('.totalMonthly').append(`Total Monthly Cost: ${totalMonthly}`);
}

// append employees to table on DOM by looping through employee array
function appendEmployees() {
    for (let employee of employeeArray){

        $('.employeeInfo').append(`
        <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.iD}</td>
        <td>${employee.jobTitle}</td>
        <td>${employee.annualSalary}</td>
        </tr>
        `);
    }
    
}

