sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    'use strict';

    return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
        onInit() {
            const oViewModel = new JSONModel({
                currency: "BRL"
            });
            this.getView().setModel(oViewModel, "view");
        }
    })
});