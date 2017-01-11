let closeForm = () => {
    history.back();
};

Template.addEditEmployeeForm.helpers({
    formType(type) {
        let employeeForm = Session.get('employeeForm');
        if (employeeForm) {
            return employeeForm.type === type;
        }
    },
    formLabel() {
        let employeeForm = Session.get('employeeForm');

        if (employeeForm) {
            return {
                button: employeeForm.type === 'edit' ? 'Edit' : 'Add',
                label: employeeForm.type === 'edit' ? 'Edit' : 'Add an'
            };
        }
    },
    selected(v1, v2) {
        return v1 === v2;
    },
    employee() {
        let employeeForm = Session.get('employeeForm');

        if (employeeForm) {
            return employeeForm.type === 'edit' ? Employees.findOne(employeeForm.empid) : {};
        }
    }
});

Template.addEditEmployeeForm.events({
    'submit form' (event, template) {
        event.preventDefault();

        let employeeForm = Session.get('employeeForm'),
            submitType = employeeForm.type === 'edit' ? 'editEmployee' : 'addEmployee',
            employeeItem = {
                fullName: template.find('[name="fullName"]').value,
                phone: template.find('[name="phone"]').value,
                email: template.find('[name="email"]').value,
                dob: template.find('[name="dob"]').value,
                address: template.find('[name="address"]').value,
                city: template.find('[name="city"]').value,
                state: template.find('[name="state"]').value,
                zipCode: template.find('[name="zipCode"]').value,
                erName: template.find('[name="erName"]').value,
                erRelation: template.find('[name="erRelation"]').value,
                erPhone: template.find('[name="erPhone"]').value,
                jobTitle: template.find('[name="jobTitle"]').value,
                beginDate: template.find('[name="beginDate"]').value,
                department: template.find('[name="department"]').value,
                employeeType: template.find('[name="employeeType"]').value,
                scheduleType: template.find('[name="scheduleType"]').value,
                payrollFrequency: template.find('[name="payrollFrequency"]').value,
                payrateType: template.find('[name="payrateType"]').value,
                payrate: template.find('[name="payrate"]').value,
                overtime: template.find('[name="overtime"]').value,
            };
        console.log(employeeItem);
        if (submitType === 'editEmployee') {
            employeeItem._id = employeeForm.employee;
        }

        Meteor.call(submitType, employeeItem, (error) => {
            if (error) {
                Bert.alert(error.reason, 'danger');
            } else {
                Bert.alert(`Employee ${ `employeeForm`.type }ed!`, 'success');
                closeForm();
            }
        });
    },
    'click .delete-event' (event, template) {
        let employeeForm = Session.get('employeeForm');
        if (confirm('Are you sure? This is permanent.')) {
            Meteor.call('removeEmployee', employeeForm.event, (error) => {
                if (error) {
                    Bert.alert(error.reason, 'danger');
                } else {
                    Bert.alert('Employee deleted!', 'success');
                    closeForm();
                }
            });
        }
    }
});
