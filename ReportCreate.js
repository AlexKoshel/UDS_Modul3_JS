var entityFormOptions = {};
entityFormOptions["entityName"] = "cr9d3_cartransferreport";
entityFormOptions["useQuickCreateForm"] = true;
var carVin = Xrm.Page.data.entity.attributes.get("cr9d3_car").getValue();
var statusCode = Xrm.Page.data.entity.attributes.get("statuscode").getValue();

if (statusCode == 970300001) {
    var reportType = 970300001;
}

if (statusCode == 2) {
    var reportType = 970300000;
}

var formParameters = {};
formParameters["cr9d3_date"] = new Date();
formParameters["cr9d3_type"] = reportType;
formParameters["cr9d3_car"] = carVin;

Xrm.Navigation.openForm(entityFormOptions, formParameters).then(
    function (success) {
        console.log(success);
    },
    function (error) {
        console.log(error);
    });
