sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("ns.HTML5Module.controller.View1", {
			onInit: function () {

            },
            pressNorthwind: function() {
                new sap.ui.model.odata.v2.ODataModel("northwind_api/")
            },
            pressHanaOdata: function() {
                new sap.ui.model.odata.v2.ODataModel("fcf7b533HanaDB/odata/catalog.xsodata")
            },
            pressHanaXsjs: function() {
                fetch("fcf7b533HanaDB/xsjs/index.xsjs")
                    .then((response) => response.text())
                    .then((data) => console.log(data))

            }
		});
	});
