$(function() {
  $(".logo").after('<button style="margin-left: 20px" type="button" class="bel_btn bel_btn-outline-secondary" id="belobot_po" data-toggle="modal" data-target="#exampleModal"><div class="spinner-grow text-info" role="status"><span class="sr-only">Loading...</span></div></button>');
  var l = {
      pairs: [{
        name: "#AA",
        full_name: "Alcoa Inc",
        active: !0
      }, {
        name: "#AAPL",
        full_name: "Apple",
        active: !0
      }, {
        name: "#AAPL_otc",
        full_name: "Apple OTC",
        active: !0
      }, {
        name: "#AA_otc",
        full_name: "Alcoa Inc OTC",
        active: !0
      }, {
        name: "#AXP",
        full_name: "American Express",
        active: !0
      }, {
        name: "#AXP_otc",
        full_name: "American Express OTC",
        active: !0
      }, {
        name: "#BA",
        full_name: "Boeing Company",
        active: !0
      }, {
        name: "#BAC_otc",
        full_name: "Bank of America OTC",
        active: !0
      }, {
        name: "#BA_otc",
        full_name: "Boeing Company OTC",
        active: !0
      }, {
        name: "#CAT",
        full_name: "Caterpillar Inc",
        active: !0
      }, {
        name: "#CAT_otc",
        full_name: "Caterpillar Inc OTC",
        active: !0
      }, {
        name: "#CHMF_otc",
        full_name: "Severstal OTC",
        active: !0
      }, {
        name: "#DIS",
        full_name: "Walt Disney",
        active: !0
      }, {
        name: "#DIS_otc",
        full_name: "Walt Disney OTC",
        active: !0
      }, {
        name: "#FB",
        full_name: "FACEBOOK INC",
        active: !0
      }, {
        name: "#FB_otc",
        full_name: "FACEBOOK INC OTC",
        active: !0
      }, {
        name: "#GAZP_otc",
        full_name: "Gazprom OTC",
        active: !0
      }, {
        name: "#GMKN_otc",
        full_name: "Nornickel OTC",
        active: !0
      }, {
        name: "#GOOG",
        full_name: "Google",
        active: !0
      }, {
        name: "#GOOG_otc",
        full_name: "Google OTC",
        active: !0
      }, {
        name: "#HD",
        full_name: "Home Depot Inc",
        active: !0
      }, {
        name: "#HD_otc",
        full_name: "Home Depot Inc OTC",
        active: !0
      }, {
        name: "#HPQ_otc",
        full_name: "HP Inc OTC",
        active: !0
      }, {
        name: "#IBM",
        full_name: "IBM",
        active: !0
      }, {
        name: "#IBM_otc",
        full_name: "IBM OTC",
        active: !0
      }, {
        name: "#INTC",
        full_name: "Intel",
        active: !0
      }, {
        name: "#INTC_otc",
        full_name: "Intel OTC",
        active: !0
      }, {
        name: "#JNJ",
        full_name: "Johnson & Johnson",
        active: !0
      }, {
        name: "#JNJ_otc",
        full_name: "Johnson & Johnson OTC",
        active: !0
      }, {
        name: "#JPM",
        full_name: "JPMorgan Chase & Co",
        active: !0
      }, {
        name: "#LKOH_otc",
        full_name: "Lukoil OTC",
        active: !0
      }, {
        name: "#MCD",
        full_name: "McDonald's",
        active: !0
      }, {
        name: "#MCD_otc",
        full_name: "McDonald's OTC",
        active: !0
      }, {
        name: "#MMM",
        full_name: "3M Company",
        active: !0
      }, {
        name: "#MMM_otc",
        full_name: "3M Company OTC",
        active: !0
      }, {
        name: "#MO",
        full_name: "Altria Group Inc",
        active: !0
      }, {
        name: "#MO_otc",
        full_name: "Altria Group Inc OTC",
        active: !0
      }, {
        name: "#MSFT",
        full_name: "Microsoft",
        active: !0
      }, {
        name: "#MSFT_otc",
        full_name: "Microsoft OTC",
        active: !0
      }, {
        name: "#PFE_otc",
        full_name: "Pfizer Inc OTC",
        active: !0
      }, {
        name: "#SBER_otc",
        full_name: "Sberbank OTC",
        active: !0
      }, {
        name: "AUDCAD",
        full_name: "AUD/CAD",
        active: !0
      }, {
        name: "AUDCAD_otc",
        full_name: "AUD/CAD OTC",
        active: !0
      }, {
        name: "AUDCHF",
        full_name: "AUD/CHF",
        active: !0
      }, {
        name: "AUDCHF_otc",
        full_name: "AUD/CHF OTC",
        active: !0
      }, {
        name: "AUDJPY",
        full_name: "AUD/JPY",
        active: !0
      }, {
        name: "AUDJPY_otc",
        full_name: "AUD/JPY OTC",
        active: !0
      }, {
        name: "AUDNZD",
        full_name: "AUD/NZD",
        active: !0
      }, {
        name: "AUDUSD",
        full_name: "AUD/USD",
        active: !0
      }, {
        name: "AUDUSD_otc",
        full_name: "AUD/USD OTC",
        active: !0
      }, {
        name: "BTCUSD",
        full_name: "Bitcoin",
        active: !0
      }, {
        name: "CADCHF",
        full_name: "CAD/CHF",
        active: !0
      }, {
        name: "CADJPY",
        full_name: "CAD/JPY",
        active: !0
      }, {
        name: "CADJPY_otc",
        full_name: "CAD/JPY OTC",
        active: !0
      }, {
        name: "CHFJPY",
        full_name: "CHF/JPY",
        active: !0
      }, {
        name: "CHFJPY_otc",
        full_name: "CHF/JPY OTC",
        active: !0
      }, {
        name: "EOSUSD",
        full_name: "EOS",
        active: !0
      }, {
        name: "ETHBTC",
        full_name: "ETH/BTC",
        active: !0
      }, {
        name: "ETHUSD",
        full_name: "Ethereum",
        active: !0
      }, {
        name: "EURAUD",
        full_name: "EUR/AUD",
        active: !0
      }, {
        name: "EURCAD",
        full_name: "EUR/CAD",
        active: !0
      }, {
        name: "EURCHF",
        full_name: "EUR/CHF",
        active: !0
      }, {
        name: "EURCHF_otc",
        full_name: "EUR/CHF OTC",
        active: !0
      }, {
        name: "EURGBP",
        full_name: "EUR/GBP",
        active: !0
      }, {
        name: "EURGBP_otc",
        full_name: "EUR/GBP OTC",
        active: !0
      }, {
        name: "EURJPY",
        full_name: "EUR/JPY",
        active: !0
      }, {
        name: "EURJPY_otc",
        full_name: "EUR/JPY OTC",
        active: !0
      }, {
        name: "EURNZD",
        full_name: "EUR/NZD",
        active: !0
      }, {
        name: "EURRUB",
        full_name: "EUR/RUB",
        active: !0
      }, {
        name: "EURRUB_otc",
        full_name: "EUR/RUB OTC",
        active: !0
      }, {
        name: "EURSGD",
        full_name: "EUR/SGD",
        active: !0
      }, {
        name: "EURUSD",
        full_name: "EUR/USD",
        active: !0
      }, {
        name: "EURUSD_otc",
        full_name: "EUR/USD OTC",
        active: !0
      }, {
        name: "GBPAUD",
        full_name: "GBP/AUD",
        active: !0
      }, {
        name: "GBPAUD_otc",
        full_name: "GBP/AUD OTC",
        active: !0
      }, {
        name: "GBPCAD",
        full_name: "GBP/CAD",
        active: !0
      }, {
        name: "GBPCHF",
        full_name: "GBP/CHF",
        active: !0
      }, {
        name: "GBPJPY",
        full_name: "GBP/JPY",
        active: !0
      }, {
        name: "GBPJPY_otc",
        full_name: "GBP/JPY OTC",
        active: !0
      }, {
        name: "GBPNZD",
        full_name: "GBP/NZD",
        active: !0
      }, {
        name: "GBPUSD",
        full_name: "GBP/USD",
        active: !0
      }, {
        name: "LTCUSD",
        full_name: "Litecoin",
        active: !0
      }, {
        name: "NZDCAD",
        full_name: "NZD/CAD",
        active: !0
      }, {
        name: "NZDCHF",
        full_name: "NZD/CHF",
        active: !0
      }, {
        name: "NZDJPY",
        full_name: "NZD/JPY",
        active: !0
      }, {
        name: "NZDJPY_otc",
        full_name: "NZD/JPY OTC",
        active: !0
      }, {
        name: "NZDUSD",
        full_name: "NZD/USD",
        active: !0
      }, {
        name: "NZDUSD_otc",
        full_name: "NZD/USD OTC",
        active: !0
      }, {
        name: "UKBrent_otc",
        full_name: "UKBrent OTC",
        active: !0
      }, {
        name: "USCrude",
        full_name: "USCrude",
        active: !0
      }, {
        name: "USCrude_otc",
        full_name: "USCrude OTC",
        active: !0
      }, {
        name: "USDCAD",
        full_name: "USD/CAD",
        active: !0
      }, {
        name: "USDCAD_otc",
        full_name: "USD/CAD OTC",
        active: !0
      }, {
        name: "USDCHF",
        full_name: "USD/CHF",
        active: !0
      }, {
        name: "USDCHF_otc",
        full_name: "USD/CHF OTC",
        active: !0
      }, {
        name: "USDJPY",
        full_name: "USD/JPY",
        active: !0
      }, {
        name: "USDJPY_otc",
        full_name: "USD/JPY OTC",
        active: !0
      }, {
        name: "USDNOK",
        full_name: "USD/NOK",
        active: !0
      }, {
        name: "USDRUB",
        full_name: "USD/RUB",
        active: !0
      }, {
        name: "USDRUB_otc",
        full_name: "USD/RUB OTC",
        active: !0
      }, {
        name: "XAGEUR",
        full_name: "XAG/EUR",
        active: !0
      }, {
        name: "XAGUSD",
        full_name: "Silver",
        active: !0
      }, {
        name: "XAGUSD_otc",
        full_name: "Silver OTC",
        active: !0
      }, {
        name: "XAUEUR",
        full_name: "XAU/EUR",
        active: !0
      }, {
        name: "XAUUSD_otc",
        full_name: "Gold OTC",
        active: !0
      }],
      time: 1,
      profit: 82,
      rules: {
        1: 2,
        2: 2,
        3: 1,
        5: 0,
        10: 0
      }
    },
    t = !0,
    e = !1,
    a = {
      0: chrome.runtime.getURL("img/close-24px.svg"),
      1: chrome.runtime.getURL("img/done-24px.svg"),
      2: chrome.runtime.getURL("img/done_all-24px.svg")
    },
    n = !1;

  function i() {
    let a = [];
    l.pairs.forEach(function(e) {
      e.active && a.push(e.name)
    }), window.postMessage({
      belobot: !0,
      profit: Number(l.profit),
      pairs: a,
      time_delay: 1e3 * l.time,
      rules: l.rules,
      on: e,
      risk_deal: t
    }, window.location.href)
  }

  function c() {
    chrome.storage.local.set(l, function() {
      i()
    })
  }
  $.ajax({
    type: "POST",
    url: "https://v3.belobot.ru/check_reg",
    data: JSON.stringify({
      user_id: $(".js-hd-uid").first().text().trim().slice(3)
    }),
    contentType: "application/json",
    dataType: "json"
  }).done(function(e) {
    (t = !e.confirm) && (n = 'You can only trade on a demo account! To trade on a live account, you must register an account using an <a href="https://v3.belobot.ru/reg/" target="_blank">affiliate link</a> and <strong>confirm your email</strong> or contact by trader.vitaly@gmail.com')
  }).fail(function() {
    n = "Server https://v3.belobot.ru is not available. Please report a bug trader.vitaly@gmail.com"
  });
  var m = function() {
      e ? $("#start_stop").text("Stop") : $("#start_stop").text("Start")
    },
    o = function() {
      window.location.href;
      e || !(t && 0 < $(".type-of-trade-label--demo").length) && t ? e ? (e = !1, i(), $("#start_stop").text("Start")) : $("#bel_mes").fadeOut("fast", function() {}).fadeIn("fast") : (e = !0, i(), $("#start_stop").text("Stop"))
    };
  var s = {
    update: function() {
      for (var e in l.rules) $("#bel_" + e).attr("src", a[l.rules[e]])
    },
    set_val: function(e) {
      e = e.id.slice(4);
      l.rules[e] < 2 ? l.rules[e]++ : l.rules[e] = 0, this.update(), c()
    }
  };
  ! function() {
    let e = [];
    for (var a in l) e.push(a);
    chrome.storage.local.get(e, function(e) {
      for (var a in e) a && (l[a] = e[a])
    })
  }(), setTimeout(function() {
    $("#belobot_po").html("Robot ready"), $("body").prepend('<small><div class="modal" tabindex="-1" role="dialog" id="exampleModal" style="color:#000"><div class="modal-dialog modal-lg" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">PocketOption BOT</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><div class="container-fluid"><div class="row"><div class="col-md-5"><div class="overflow-auto" style="max-height: 400px;"><table class="bel_table" id="bel_pairs"><tbody style="color:#000"></tbody></table></div></div><div class="col-md-7" id="info"></div></div></div></div><div class="modal-footer"><button type="button" class="bel_btn bel_btn-success" id="start_stop"></button><button type="button" class="bel_btn bel_btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>'), l.pairs.forEach(function(e, a) {
      let l = '<tr><td><input type="checkbox" id="' + a + '"';
      e.active && (l += " checked"), l += ">" + e.full_name + "</td></tr>", $("#bel_pairs tbody").append(l)
    }), n ? $("#info").append('<div class="alert alert-danger" role="alert" id="bel_mes">' + n + "</div>") : $("#info").append('<div class="alert alert-success" role="alert" id="bel_mes">Thank you for registering. Questions can be left on <a href="https://v3.belobot.ru/" target="_blank">https://v3.belobot.ru/</a></div>'), $("#info").append('<div class="container-fluid" id="settings"></div>'), $("#settings").append('<div class="row"><div class="col-sm-5">Profit from</div><div class="col-sm-5"><input id="bel_profit" type="number" class="bel_form-control bel_form-control-sm"></div><div class="col-sm">%</div></div>'), $("#settings").append('<div class="row"><div class="col-sm-5">Delay between deals</div><div class="col-sm-5"><input id="bel_delay" type="number" class="bel_form-control bel_form-control-sm"></div><div class="col-sm">sec.</div></div>'), $("#settings").append('<div class="row text-center"><div class="col-sm">1m.</div><div class="col-sm">2m.</div><div class="col-sm">3m.</div><div class="col-sm">5m.</div><div class="col-sm">10m.</div></div>'), $("#settings").append('<div class="row"><div class="col-sm"><img id="bel_1" class="bel_btn bel_btn-light bel_btn-sm" src=""></div><div class="col-sm"><img id="bel_2" class="bel_btn bel_btn-light bel_btn-sm" src=""></div><div class="col-sm"><img id="bel_3" class="bel_btn bel_btn-light bel_btn-sm" src=""></div><div class="col-sm"><img id="bel_5" class="bel_btn bel_btn-light bel_btn-sm" src=""></div><div class="col-sm"><img id="bel_10" class="bel_btn bel_btn-light bel_btn-sm" src=""></div></div>'), $("#bel_delay").val(l.time), $("#bel_profit").val(l.profit), s.update(), $("#settings .bel_btn-sm").click(function() {
      s.set_val(this)
    }), $("#start_stop").click(function() {
      o()
    }), $("#bel_pairs input").click(function(e) {
      l.pairs[this.id].active = $(this).is(":checked"), c()
    }), $("#bel_profit").change(function() {
      l.profit = this.value, c()
    }), $("#bel_delay").change(function() {
      l.time = this.value, c()
    }), m()
  }, 5e3)
});
