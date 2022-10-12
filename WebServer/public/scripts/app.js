
//ajax call
var fetchProducts = () => {
    let url = "http://localhost:11000/api/products";
    $.ajax({
        dataType: "json",
        type: "GET",
        url: url,
        success: (data) => {
            for (var i = 0; i < data.length; i++) {
                const row = document.createElement("tr");
                row.innerHTML = `
                 <td> ${data[i].id} </td>
                 <td> ${data[i].title} </td>
                 <td> ${data[i].description} </td>
                 <td> ${data[i].imageurl} </td>
                 <td> ${data[i].quantity} </td>
                 <td> ${data[i].price} </td>
                 <td> ${data[i].categoryid} </td>
                 <td> ${data[i].sellerid} </td>
                 <td> ${data[i].createdat} </td>
                 <td> ${data[i].modifiedat} </td>
                 <td> <button type="button" onclick="addToCart(${data[i]})">ADD TO CART!</button></td>`;
                document.getElementById("cart").appendChild(row);
                fetchProducts();
            }
        }
    });
}

var addToCart = (i) => {
    console.log(i);
    let cart = new Array();
    cart = JSON.parse(localStorage.getItem("products"))
    cart.push(i);
    localStorage.setItem('products', JSON.stringify(cart));
}
var fetchAccounts = () => {
    let url = "http://localhost:11000/api/accounts";

    $.ajax({
        dataType: "json",
        type: "GET",
        url: url,
        success: (data) => {
            console.log(data);
            let Data = JSON.stringify(data);
            let productList = document.getElementById("accountsList");
            for (var i = 0; i < data.length; i++) {
                const node = document.createElement("li");
                const textnode = document.createTextNode(data[i].id + " , " + data[i].accountnumber + " , " + data[i].balance
                    + " , " + data[i].userid + " , " + data[i].createdat + " , " + data[i].modifiedat);
                node.appendChild(textnode);
                productList.appendChild(node);
            }
        }
    });
}
var fetchCategories = () => {
    let url = "http://localhost:11000/api/categories";


    $.ajax({
        dataType: "json",
        type: "GET",
        url: url,
        success: (data) => {
            console.log(data);
            let Data = JSON.stringify(data);
            let categoriesList = document.getElementById("categoriesList");
            for (var i = 0; i < data.length; i++) {
                const node = document.createElement("li");
                const textnode = document.createTextNode(data[i].id + " , " + data[i].name + " , " + data[i].createdat + " , " + data[i].modifiedat);
                node.appendChild(textnode);
                categoriesList.appendChild(node);
            }
        }
    });
}
var fetchCustomers = () => {
    let url = "http://localhost:11000/api/customers";
    $.ajax({
        dataType: "json",
        type: "GET",
        url: url,
        success: (data) => {
            console.log(data);
            let customersList = document.getElementById("customersList");
            for (var i = 0; i < data.length; i++) {
                const node = document.createElement("li");
                const textnode = document.createTextNode(data[i].id + " , " + data[i].userid + " , " + data[i].firstname + " , " + data[i].lastname
                    + " , " + data[i].contactno + " , " + data[i].location + " , " + data[i].createdat + " , " + data[i].modifiedat);
                node.appendChild(textnode);
                customersList.appendChild(node);
            }
        }
    });
}
var fetchDeliveries = () => {
    let url = "http://localhost:11000/api/deliveries";
    $.ajax({
        dataType: "json",
        type: "GET",
        url: url,
        success: (data) => {
            console.log(data);
            let deliveriesList = document.getElementById("deliveriesList");
            for (var i = 0; i < data.length; i++) {
                const node = document.createElement("li");
                const textnode = document.createTextNode(data[i].id + " , " + data[i].orderid + " , " + data[i].vendorid
                    + " , " + data[i].location + " , " + data[i].createdat + " , " + data[i].modifiedat);
                node.appendChild(textnode);
                deliveriesList.appendChild(node);
            }
        }
    });
}
var fetchFeedbacks = () => {
    let url = "http://localhost:11000/api/feedbacks";
    $.ajax({
        dataType: "json",
        type: "GET",
        url: url,
        success: (data) => {
            console.log(data);
            let Data = JSON.stringify(data);
            let feedbacksList = document.getElementById("feedbacksList");
            for (var i = 0; i < data.length; i++) {
                const node = document.createElement("li");
                const textnode = document.createTextNode(data[i].id + " , " + data[i].imageurl + " , " + data[i].productid
                    + " , " + data[i].customerid + " , " + data[i].description + " , " + data[i].createdat + " , " + data[i].modifiedat);
                node.appendChild(textnode);
                feedbacksList.appendChild(node);
            }
        }
    });
}
var fetchOrderDetails = () => {
    let url = "http://localhost:11000/api/orderDetails";
    $.ajax({
        dataType: "json",
        type: "GET",
        url: url,
        success: (data) => {
            console.log(data);
            let Data = JSON.stringify(data);
            let orderDetailsList = document.getElementById("orderDetailsList");
            for (var i = 0; i < data.length; i++) {
                const node = document.createElement("li");
                const textnode = document.createTextNode(data[i].id + " , " + data[i].quantity + " , " + data[i].price
                    + " , " + data[i].orderid + " , " + data[i].productid + " , " + data[i].createdat + " , " + data[i].modifiedat);
                node.appendChild(textnode);
                orderDetailsList.appendChild(node);
            }
        }
    });
}
var fetchOrders = () => {
    let url = "http://localhost:11000/api/orders";
    $.ajax({
        dataType: "json",
        type: "GET",
        url: url,
        success: (data) => {
            console.log(data);
            let ordersList = document.getElementById("ordersList");
            for (var i = 0; i < data.length; i++) {
                const node = document.createElement("li");
                const textnode = document.createTextNode(data[i].id + " , " + data[i].status + " , " + data[i].customerid
                    + " , " + data[i].createdat + " , " + data[i].modifiedat);
                node.appendChild(textnode);
                ordersList.appendChild(node);
            }
        }
    });
}
var fetchPayments = () => {
    let url = "http://localhost:11000/api/payments";
    $.ajax({
        dataType: "json",
        type: "GET",
        url: url,
        success: (data) => {
            console.log(data);
            let paymentsList = document.getElementById("paymentsList");
            for (var i = 0; i < data.length; i++) {
                const node = document.createElement("li");
                const textnode = document.createTextNode(data[i].id + " , " + data[i].totalamount + " , " + data[i].discountpercentage
                    + " , " + data[i].payableamount + " , " + data[i].orderid + " , " + data[i].modeofpayment + " , " + data[i].createdat + " , " + data[i].modifiedat);
                node.appendChild(textnode);
                paymentsList.appendChild(node);
            }
        }
    });
}
var fetchSellers = () => {
    let url = "http://localhost:11000/api/sellers";
    $.ajax({
        dataType: "json",
        type: "GET",
        url: url,
        success: (data) => {
            console.log(data);
            let sellersList = document.getElementById("sellersList");
            for (var i = 0; i < data.length; i++) {
                const node = document.createElement("li");
                const textnode = document.createTextNode(data[i].id + " , " + data[i].userid + " , " + data[i].name
                    + " , " + data[i].contactno + " , " + data[i].location + + " , " + data[i].createdat + " , " + data[i].modifiedat);
                node.appendChild(textnode);
                sellersList.appendChild(node);
            }
        }
    });
}
var fetchStaffs = () => {
    let url = "http://localhost:11000/api/staffs";
    $.ajax({
        dataType: "json",
        type: "GET",
        url: url,
        success: (data) => {
            console.log(data);
            let staffsList = document.getElementById("staffsList");
            for (var i = 0; i < data.length; i++) {
                const node = document.createElement("li");
                const textnode = document.createTextNode(data[i].id + " , " + data[i].userid + " , " + data[i].firstname
                    + " , " + data[i].lastname + " , " + data[i].contactno + " , " + data[i].empid + " , " + data[i].createdat + " , " + data[i].modifiedat);
                node.appendChild(textnode);
                staffsList.appendChild(node);
            }
        }
    });
}
var fetchTransactions = () => {
    let url = "http://localhost:11000/api/transactions";
    $.ajax({
        dataType: "json",
        type: "GET",
        url: url,
        success: (data) => {
            console.log(data);
            let listTransactions = document.getElementById("listTransactions");
            for (var i = 0; i < data.length; i++) {
                const node = document.createElement("li");
                const textnode = document.createTextNode(data[i].id + " , " + data[i].fromaccount + " , " + data[i].toaccount
                    + " , " + data[i].amount + " , " + data[i].createdat);
                node.appendChild(textnode);
                listTransactions.appendChild(node);
            }
        }
    });
}
var fetchVendors = () => {
    let url = "http://localhost:11000/api/vendors";
    $.ajax({
        dataType: "json",
        type: "GET",
        url: url,
        success: (data) => {
            console.log(data);
            let listVendors = document.getElementById("listVendors");
            for (var i = 0; i < data.length; i++) {
                const node = document.createElement("li");
                const textnode = document.createTextNode(data[i].id + " , " + data[i].userid + " , " + data[i].name
                    + " , " + data[i].contactno + " , " + data[i].createdat + " , " + data[i].modifiedat);
                node.appendChild(textnode);
                listVendors.appendChild(node);
            }
        }
    });
}
function onregister() {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let usertype = document.getElementById('usertype').value;
    let credentials = {};
    credentials.email = email;
    credentials.password = password;
    credentials.usertype = usertype;
    let loginUrl = "//localhost:11000/api/users";
    $.ajax({
        type: "POST",
        url: loginUrl,
        data: credentials,
        success: (data, status) => {
            console.log(data);
            console.log(status);
        }
    });
}
function fundTransactions() {
    let fromaccount = document.getElementById('fromaccount').value;
    let toaccount = document.getElementById('toaccount').value;
    let amount = document.getElementById('amount').value;
    let credentials = {};
    credentials.fromaccount = fromaccount;
    credentials.toaccount = toaccount;
    credentials.amount = amount;
    let loginUrl = "//localhost:11000/api/fundtransactions";
    //  console.log(credentials)
    $.ajax({
        type: "POST",
        url: loginUrl,
        data: credentials,
        success: (data, status) => {
            console.log(data);
            console.log(status);
        }
    });
}
var fetchOrders = () => {
    let url = "//localhost:11000/api/orders";
    $.ajax({
        dataType: "json",
        url: url,
        success: (data) => {
            console.log(data);
            let result = JSON.stringify(data);
            let ordersList = document.getElementById("listOrders");
            for (var i = 0; i < result.length; i++) {
                const node = document.createElement("li");
                const textnode = document.createTextNode(result[i].status + " , " + result[i].customerid + " , " + result[i].createdat + " , " + result[i].modifiedat);
                node.appendChild(textnode);
                ordersList.appendChild(node);
            }
        }
    });
}
//without ajax call help of inner html
var fetchProductDetails = () => {
    let apiError;
    let result;
    fetch("//localhost:11000/api/products/:2", {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(async response => {
            if (response.ok) {
                apiError = false;
                result = await response.json();
                console.log(result);
                let strData = JSON.stringify(result)
                let id = document.getElementById("id");
                id.innerHTML = strData;
            }
            else {
                apiError = true;
            }
        })
        .catch(() => (apiError = true));
}
var onLogin = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let credentials = {};
    credentials.email = email;
    credentials.password = password;
    let loginUrl = "//localhost:11000/api/login";
    //console.log(credentials)
    $.ajax({
        url: loginUrl,
        type: "post",
        data: credentials,
        success: (data, status) => {
            console.log(data);
            console.log(status);
            localStorage.setItem("receivedtoken", data);//store in browser local storage 
        }
    });
}
// verifyjwttoken = (req, res, next) => {
//     const token = req.headers["authorization"];
//     if (!token) return res.status(401).json("Unauthorize user");
//     try {
//       const decoded = jwt.verify(token, config.jwtSecretKey);
//       req.user = decoded;
//       console.log("Validation Successful");
//       next();
//     } catch (e) {
//       res.status(400).json("Token not valid");
//     }
//   };