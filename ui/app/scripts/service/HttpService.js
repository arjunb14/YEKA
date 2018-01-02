/**
 * Created by arjub on 25/11/17.
 */
YEKA.service("HttpService", function ($resource) {

    return {
        orders: $resource("/service/orders.php", {}, {
            get: {method: "GET", isArray: true}
        }),
        products: $resource("/service/products.php", {}, {
            get: {method: "GET", isArray: true}
        }),
        customers: $resource("/service/customers.php", {}, {
            get: {method: "GET", isArray: true}
        }),
        dc: $resource("/service/dc.php", {}, {
            get: {method: "GET", isArray: true}
        })
    }
});