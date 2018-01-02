/*
 * Copyright (C) ThermoFisher Scientific Inc.- All Rights Reserved
 * Unauthorized use or copying of this file, via any medium is strictly prohibited and will be subject to legal action.
 * Proprietary and confidential
 */

'use strict';

YEKA.config(function ($provide) {
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
});

YEKA.run(function ($httpBackend, $rootScope) {
    $httpBackend.whenGET(/\.html$/).passThrough();
    $httpBackend.whenGET(/views\/.*/).passThrough();


    $httpBackend.whenGET("/service/orders.php").respond(function (method, url) {
        var response = [{
            orderId: 129056,
            customerName: "Arjun B",
            dcs: [123, 345, 768],
            invoiceStatus: "Pending"
        }, {
            orderId: 213245,
            customerName: "Selva Meenal",
            dcs: [985],
            invoiceStatus: "Done"
        }, {
            orderId: 2451412,
            customerName: "Saravanan",
            dcs: [808, 408],
            invoiceStatus: "Pending"
        }, {
            orderId: 3123144,
            customerName: "Muthu",
            dcs: [456],
            invoiceStatus: "Done"
        }];
        return [200, response];
    });

    $httpBackend.whenGET("/service/products.php").respond(function (method, url) {
        var response = [{
            productId: 129056,
            productName: "Top Lid"
        }, {
            productId: 213245,
            productName: "Side cover"
        }, {
            productId: 2451412,
            productName: "Nuts"
        }, {
            productId: 3123144,
            productName: "Middle ring"
        }];
        return [200, response];
    });
    
    $httpBackend.whenGET("/service/customers.php").respond(function (method, url) {
        var response = [{
            customerId: 129056,
            customerName: "Selvaraj"
        }, {
            customerId: 213245,
            customerName: "Murugan"
        }, {
            customerId: 2451412,
            customerName: "SKC Enterprises"
        }, {
            customerId: 3123144,
            customerName: "Joseph Antony"
        }];
        return [200, response];
    });

    $httpBackend.whenGET("/service/dc.php").respond(function (method, url) {
        var response = [{
            chalanId: 129056,
            customerName: "Selvaraj",
            productName: "Top lid"
        }, {
            chalanId: 213245,
            customerName: "Murugan",
            productName: "Bottom cover"
        }, {
            chalanId: 2451412,
            customerName: "SKC Enterprises",
            productName: "Middle Ring 45mm dia"
        }, {
            chalanId: 3123144,
            customerName: "Joseph Antony",
            productName: "Top Cover"
        }];
        return [200, response];
    });


});