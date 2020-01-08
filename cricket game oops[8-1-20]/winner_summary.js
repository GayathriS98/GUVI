var a = localStorage.getItem("team1_score");
var b = localStorage.getItem("team1_total");
var c = localStorage.getItem("team2_score");
var d = localStorage.getItem("team2_total");
var e = localStorage.getItem("team1_individual");
var f = localStorage.getItem("team2_individual");
var g = localStorage.getItem("ball_1");
var h = localStorage.getItem("ball_2");
var Winner = /** @class */ (function () {
    function Winner() {
    }
    Winner.prototype.compare = function (t1_p, t2_p) {
        if (t1_p > t2_p) {
            return "TEAM 1 IS THE WINNER";
        }
        else if (t2_p > t1_p) {
            return "TEAM 2 IS THE WINNER";
        }
        else {
            return "BOTH HAVE EQUAL SCORES.THIS GAME IS A TIE.";
        }
    };
    return Winner;
}());
var counter = 0;
var t1_p = parseInt(b);
var t2_p = parseInt(d);
var s1_p = a.split(',').map(function (item) {
    return parseInt(item, 10);
});
var s2_p = c.split(',').map(function (item) {
    return parseInt(item, 10);
});
var i1_p = e.split(',').map(function (item) {
    return parseInt(item, 10);
});
var i2_p = f.split(',').map(function (item) {
    return parseInt(item, 10);
});
var b1_p = g.split(',').map(function (item) {
    return parseInt(item, 10);
});
var b2_p = h.split(',').map(function (item) {
    return parseInt(item, 10);
});
var winner_ann = document.querySelector(".win");
var res = document.querySelector(".summary");
var sum1 = document.querySelector(".team1_tot");
var sum2 = document.querySelector(".team2_tot");
var summary1 = document.querySelector(".team1_score");
var summary2 = document.querySelector(".team2_score");
var ind1 = document.querySelector(".team1_ind");
var ind2 = document.querySelector(".team2_ind");
var mom = document.querySelector(".m_o_m");
var win = new Winner();
res.innerHTML = "" + win.compare(t1_p, t2_p);
var max1 = Math.max.apply(Math, i1_p);
var max2 = Math.max.apply(Math, i2_p);
var max = Math.max(max1, max2);
sum1.innerHTML = "THE TOTAL SCORE OF TEAM 1 IS " + t1_p;
sum2.innerHTML = "THE TOTAL SCORE OF TEAM 2 IS " + t2_p;
if (counter == 0) {
    summary1.innerHTML = summary1.innerHTML + " [";
    for (var i = 0; i < s1_p.length; i++) {
        if (i < (s1_p.length) - 1) {
            summary1.innerHTML = summary1.innerHTML + s1_p[i] + ",";
        }
        else if (i == (s1_p.length) - 1) {
            summary1.innerHTML = summary1.innerHTML + s1_p[i] + " ]";
        }
    }
    counter++;
}
if (counter == 1) {
    for (var i = 0; i < i1_p.length; i++) {
        ind1.innerHTML = ind1.innerHTML + "<br> PLAYER " + (i + 1) + " - " + i1_p[i] + " (" + b1_p[i] + ") ";
        if (i1_p[i] == max) {
            mom.innerHTML = mom.innerHTML + "PLAYER " + (i + 1) + " FROM TEAM 1 WITH A SCORE OF " + max + ".";
        }
    }
    counter++;
}
if (counter == 2) {
    summary2.innerHTML = summary2.innerHTML + " [";
    for (var i = 0; i < s2_p.length; i++) {
        if (i < s2_p.length - 1) {
            summary2.innerHTML = summary2.innerHTML + s2_p[i] + ",";
        }
        else if (i == (s2_p.length) - 1) {
            summary2.innerHTML = summary2.innerHTML + s2_p[i] + " ]";
        }
    }
    counter++;
}
if (counter == 3) {
    for (var i = 0; i < i2_p.length; i++) {
        ind2.innerHTML = ind2.innerHTML + "<br> PLAYER " + (i + 1) + " - " + i2_p[i] + " (" + b2_p[i] + ") ";
        if (i2_p[i] == max) {
            mom.innerHTML = mom.innerHTML + "PLAYER " + (i + 1) + " FROM TEAM 2 WITH A SCORE OF " + max + ".";
        }
    }
    counter++;
}
function winner() {
    setTimeout(function nextpage() {
        location.href = "winner.html";
    }, 3000);
}
