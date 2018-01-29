const { PaytureInPay } = require("payture-official/apiLib/InPay");

const inpay = new PaytureInPay("https://secure.payture.com", {
  Key: "",
  Password: ""
});

const data = {
  OrderId: "ORD00000000000000005",
  Amount: 100,
  IP: "127.0.0.1",
  SessionType: "Pay",
  Url: "http://dashboard.ucavtor.ru",
  Language: "RU",
  Total: 10,
  Product: "курс промышленая безопасность"
};

const callbackFunc = function(error, response, body, responseObject) {
  console.info(responseObject);
};

// inpay.init(data, callbackFunc);

inpay.payStatus('ORD00000000000000005', callbackFunc);
