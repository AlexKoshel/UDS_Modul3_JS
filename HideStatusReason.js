function OnFormLoad(executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.data.process.addOnStageChange(function () {
        HideStatusReasonValue(formContext)
    });
}

function HideStatusReasonValue(formContext) {
    formContext.getControl("statuscode").removeOption(2);
    formContext.getControl("statuscode").removeOption(970300002);
    formContext.getControl("statuscode").removeOption(1);
    formContext.getControl("statuscode").removeOption(970300000); 
    formContext.getControl("statuscode").removeOption(970300001);         

    var activeStage = formContext.data.process.getActiveStage();
    var stageName = activeStage.getName();

    if ((formContext.getAttribute("statuscode").getSelectedOption() != null) && (stageName != null)) {

        if (stageName == "Created") {
            formContext.getControl("statuscode").addOption({ text: "Confirmed", value: 970300000 });
            formContext.getControl("statuscode").addOption({ text: "Renting", value: 970300001 });
            formContext.getControl("statuscode").addOption({ text: "Canceled", value: 970300002 });
        }

        if (stageName == "Confirmed") {
            formContext.getControl("statuscode").addOption({ text: "Renting", value: 970300001 });
            formContext.getControl("statuscode").addOption({ text: "Canceled", value: 970300002 });
        }

        if (stageName == "Renting") {
            formContext.getControl("statuscode").addOption({ text: "Returned", value: 2 });
        }
    }
}