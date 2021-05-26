var UDSEdu = window.UDSEdu || {};
(
    function () {     

        this.reservedPickupOnChange = function (executionContext) {
            var formContext = executionContext.getFormContext();           
            var reservedPickupDate = formContext.getAttribute("cr9d3_reserved_pickup").getValue();
            var currentDay = new Date();

            var reservedPickupDateFeildControl = formContext.getControl("cr9d3_reserved_pickup");
            if (reservedPickupDate < currentDay) {
                reservedPickupDateFeildControl.setNotification(" Please enter the correct date");
            }
            else {
                reservedPickupDateFeildControl.clearNotification();
            }
        }

        this.statusCodeOnChange = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var statusCode = formContext.getAttribute("statuscode").getValue();
            var isPaid = formContext.getAttribute("cr9d3_paid").getValue();
            var statusCodeFieldControl = formContext.getControl("statuscode");

            if ((statusCode == 970300001) && (!isPaid)) {
                statusCodeFieldControl.setNotification("Car rent is not yet paid. Car cannot be rented");
            }
            else {
                statusCodeFieldControl.clearNotification();
            }
        }
    }
).call(UDSEdu);