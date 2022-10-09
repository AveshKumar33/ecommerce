


//ajax call
var fetchData = () => {
    console.log("wesrdghijofcgvhj");
    let url = "http://localhost:11000/api/products";


    $.ajax({
        dataType: "json",
        url: url,
        success: (data) => {
            console.log(data);
            let strData = JSON.stringify(data);
            let para1 = document.getElementById("para");
            para1.innerHTML = strData;

            //DOM tree Manipulation Code at Client Side
            //let productList=document.getElementById("productList");
            //  for(var i=0;i<data.length;i++){
            //      const node = document.createElement("li");
            //      const textnode = document.createTextNode(data[i].title);
            //      node.appendChild(textnode);
            //      productList.appendChild(node);
            //  }  
        }
    });
}//without ajax call
var fetchProductDetails = () => {
    let apiError;
    let result;
    fetch("//localhost:11000/api/products/2", {
        //NEW - add a content-Type header
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
    console.log('jjjjjjjjjjjjjjjjjj')
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
            localStorage.setItem("receivedtoken", data);//bro cache mem
        }
    });
}

var fetchOrders = () => {
    let apiError;
    let result;
    token = localStorage.getItem("receivedtoken");
    fetch("//localhost:11000/api/orders", {
        //NEW - add a content-Type header
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    })
        .then(async response => {
            if (response.ok) {
                apiError = false;
                result = await response.json();
                console.log(result);
                // DOM tree Manipulation Code at Client Side by using id
                let ordersList = document.getElementById("listOrders");
                for (var i = 0; i < result.length; i++) {
                    const node = document.createElement("li");
                    const textnode = document.createTextNode(result[i].orderId + " " + result[i].date + " " + result[i].status);
                    node.appendChild(textnode);
                    ordersList.appendChild(node);
                }
            }
            else {
                apiError = true;
            }
        })
        .catch(() => (apiError = true));
}


var register = () => {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let usertype = document.getElementById('usertype').value;
    let credentials = {};
    credentials.email = email;
    credentials.password = password;
    credentials.usertype = usertype;
    let loginUrl = "//localhost:11000/api/users";
    //console.log(credentials)
    $.ajax({
        url: loginUrl,
        type: "post",
        data: credentials,
        success: (data, status) => {
            console.log(data);
            console.log(status);
            localStorage.setItem("receivedtoken", data);//bro cache mem
        }
    });
}