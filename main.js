
var log = console.log.bind(console)
log("log success")
var Router = function () {
    var o = {
        actived: "myBill",
        newBill: Bill(),
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
            o['newBill'].show()
        }
    })
    return o

}
var Bill = function Bill() {
    var o = {
        name: 'chi'

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
    
}
var _main = function _main() {
    var router = Router()
}

_main()