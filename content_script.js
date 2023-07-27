! function() {
  "use strict";
  var r = {
    up: !1,
    down: !1
  };
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      r.up = document.getElementsByClassName("btn-call")[0], r.down = document.getElementsByClassName("btn-put")[0]
    }, 5e3)
  });
  var a = window.WebSocket;

  function s(e) {
    return String.fromCharCode.apply(null, new Uint8Array(e))
  }
  window.addEventListener("message", function(e) {
    e.data.belobot && (d.profit = e.data.profit, d.pairs = e.data.pairs, d.rules = e.data.rules, d.time_delay = e.data.time_delay, d.on = e.data.on, !e.data.risk_deal && document.cookie.indexOf("belobot") < 0 && (d.on = !1))
  });
  var d = {
      profit: 82,
      pairs: ["#AXP", "#BA", "#CAT", "#DIS", "#FB", "#GOOG", "#HD", "#IBM", "#INTC", "#JNJ", "#JPM", "#MCD", "#MMM", "#MO", "#MSFT", "AUDCAD", "AUDCHF", "AUDJPY", "AUDNZD", "AUDUSD", "BTCUSD", "CADCHF", "CADJPY", "CHFJPY", "EOSUSD", "ETHBTC", "ETHUSD", "EURAUD", "EURCAD", "EURCHF", "EURGBP", "EURJPY", "EURNZD", "EURRUB", "EURSGD", "EURUSD", "GBPAUD", "GBPCAD", "GBPCHF", "GBPJPY", "GBPNZD", "GBPUSD", "LTCUSD", "NZDCAD", "NZDCHF", "NZDJPY", "NZDUSD", "USCrude", "USDCAD", "USDCHF", "USDJPY", "USDNOK", "USDRUB", "XAGEUR", "XAGUSD", "XAUEUR"],
      rules: {
        1: 2,
        2: 2,
        3: 1
      },
      time_delay: 1e3,
      next_deal_time: Date.now(),
      on: !1
    },
    n = {
      update_now: !1,
      signals: {},
      last_update: Date.now(),
      update: function(e) {
        for (var n = 0; n < e.length; n++) {
          this.signals.hasOwnProperty(e[n][0]) || (this.signals[e[n][0]] = {});
          let t = this.signals[e[n][0]];
          var a = e[n][1];
          for (let e = 0; e < a.length; e++) t[a[e][0]] = a[e][1]
        }
        this.last_update = Date.now()
      },
      check: function() {
        for (var s in t)
          if (d.on && t[s].active && d.pairs.includes(s) && t[s].profit >= d.profit) {
            let e = {},
              t = 0;
            for (var o in d.rules) 0 < d.rules[o] && (e[o] = this.signals[s][o], 2 < e[o] ? (e[o] -= 2, t++) : t--);
            let n = !0;
            for (var i in Object.keys(e).length != Math.abs(t) && (n = !1), e) e[i] < d.rules[i] && (n = !1);
            let a = "up";
            0 < t && (a = "down"), d.next_deal_time > Date.now() && (n = !1), n && (l.push({
              val: s,
              nap: a
            }), console.log("bid: " + a + ", " + s), setTimeout(function() {
              r.up.click()
            }, 500), d.next_deal_time = Date.now() + d.time_delay)
          }
      }
    },
    t = {},
    o = !1,
    l = [];

  function i(e) {
    t[e[1]] = {
      active: e[14],
      profit: e[5],
      full_name: e[2]
    }
  }
  window.WebSocket = function(e, t) {
    e = t ? new a(e, t) : new a(e);
    return e.addEventListener("open", function(e) {}), e.addEventListener("message", function(t) {
      if (t.data instanceof ArrayBuffer) {
        let e = JSON.parse(s(t.data));
        n.update_now && (n.update(e.signals), n.check(), n.update_now = !1), o && (e.forEach(function(e) {
          i(e)
        }), o = !1)
      } else if (6 < t.data.length) try {
        var e = JSON.parse(t.data.slice(4));
        "upsignals" !== e[0] && "updateSignalForecast" !== e[0] && "signals/load" !== e[0] && "signals/update" !== e[0] || (n.update_now = !0), "updateAssets" === e[0] && (o = !0)
      } catch {}
    }), e
  }, a.prototype.oldSend = a.prototype.send, a.prototype.send = function(t) {
    if ("openOrder" === t.substr(4, 9) && 0 < l.length)
      for (; 0 < l.length;) {
        var n = t.indexOf("asset") + 8;
        let e = t.slice(0, n) + l[0].val + t.slice(t.indexOf('"', n));
        "down" === l[0].nap && (e = e.replace("call", "put")), a.prototype.oldSend.apply(this, [e]), l.shift()
      } else a.prototype.oldSend.apply(this, [t]);
    "42" !== t.substr(0, 2) && "5" !== t || '42["ss"]' == t || "openOrder" == t.substr(4, 9) || this.send('42["ss"]')
  }, window.WebSocket.prototype = a.prototype;
  var u = window.XMLHttpRequest;
  window.XMLHttpRequest = function() {
    var e = new u;
    return e.addEventListener("readystatechange", function(e) {
      if (4 == this.readyState && 200 == this.status && "OK" == this.statusText) {
        let n = s(this.response);
        if ("updateAssets" == n.substr(10, 12)) {
          let e = n.split("ÿ"),
            t = JSON.parse(e[2].slice(e[2].indexOf("["), e[2].lastIndexOf("]") + 1));
          t.forEach(function(e) {
            i(e)
          })
        }
      }
    }, !1), e
  }
}();
