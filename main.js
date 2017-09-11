
var log = console.log.bind(console)
log("log success")
var Router = function Router() {
    var o = {
        actived: "myBill",
        newBill: NewBill(),
        myBill: BillList(),
    }


    var navbar = document.querySelector('#navbar')

    navbar.innerHTML =
        `
        <button class="selected" id="myBill">我的账单</button>
        <button id="newBill">新的账单</button>
        <button id="statistics">统计</button>
        <button id="else">else</button><hr>`

    navbar.addEventListener('click', function clickNav(e) {
        if (e.path[0]) {
            document.querySelector('#' + o.actived).className = ""
            document.querySelector('#' + e.path[0].id).className = "selected"
            o.actived = e.path[0].id
            log(o.actived)
            o[e.path[0].id].show()
        }
    })
    return o

}
var NewBill = function NewBill() {
    var o = {
        name: 'chi',

    }
    o.newBill = function newBill() {
        log("new bill")
        o.name = document.querySelector('#name').value
        o.type = document.querySelector('#type').value
        o.value = document.querySelector('#value').value
        log(o.name, o.type, o.value)
    }
    o.show = function show() {
        document.querySelector('#mainArea').innerHTML =
            `
        <input type="text" id="name" placeholder="名字">
        <input type="text" id="type" placeholder="类别">
        <input type="text" id="value" placeholder="金额">
        <button id="submitNewBill">提交</button>`

        document.querySelector('#submitNewBill').addEventListener('click', function () {
            o.newBill()
        })
    }
    return o
}

var BillList = function BillList() {
    var o = {

    }
    o.ul = document.querySelector('#billList')
    o.show = function show() {
        document.querySelector('#mainArea').innerHTML =
            `
            <ul id="billList">
            <li>123123</li>
            </ul>

            `
            xmlhttp.open("GET", "list.xml", true)
            xmlhttp.send()
    }
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest()
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 0) {
            x=xmlhttp.responseXML.documentElement.getElementsByTagName("bill");
            for(var i = 0; i < x.length; i++){
                log(x)
            }
        }else{
            log(xmlhttp.status)
        }
    }
    return o
}
var _main = function _main() {
    var router = Router()
}

_main()