/*
 * 简易封装原生localstorage
 */

(function() {
    window.ms = {
        set: set,
        get: get
    }

    function set(key, val) {
        localStorage.setItem(key, JSON.stringify(val))
    }

    function get(key) {
        var json = localStorage.getItem(key)
        if (json) {
            return JSON.parse(json)
        }
    }
})()

// ms.set('女朋友', '欢欢')
// let temp = ms.get('女朋友')
// console.log('temp:' + temp)