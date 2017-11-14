sap.ui.define([
	"UI5RoutingExample/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("UI5RoutingExample.controller.App", {
		
		onInit : function () {
			//This is ONLY for being used within the tutorial.
			jQuery.sap.log.setLevel(jQuery.sap.log.Level.INFO);
			var oRouter = this.getRouter();
			oRouter.attachBypassed(function (oEvent) {
				var sHash = oEvent.getParameter("hash");
				// do something here, i.e. send logging data to the backend for analysis
				// telling what resource the user tried to access...
				jQuery.sap.log.info("Sorry, but the hash '" + sHash + "' is invalid.", "The resource was not found.");
			});
			
			oRouter.attachRouteMatched(function (oEvent) {
				var sRouteName = oEvent.getParameter("name");
				// do something, i.e. send usage statistics to backend
				// in order to improve our app and the user experience (Build-Measure-Learn cycle)
				jQuery.sap.log.info("User accessed route " + sRouteName + ", timestamp = " + new Date().getTime());
			});
		}

	});
});