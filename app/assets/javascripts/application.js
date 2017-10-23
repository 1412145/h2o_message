// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require posts
//= require_tree .

/*!
 * Start Bootstrap - SB Admin v4.0.0-beta (https://startbootstrap.com/template-overviews/sb-admin)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-sb-admin/blob/master/LICENSE)
 */

Chart.defaults.global.defaultFontFamily='-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',Chart.defaults.global.defaultFontColor="#292b2c";var ctx=document.getElementById("myAreaChart"),myLineChart=new Chart(ctx,{type:"line",data:{labels:["Mar 1","Mar 2","Mar 3","Mar 4","Mar 5","Mar 6","Mar 7","Mar 8","Mar 9","Mar 10","Mar 11","Mar 12","Mar 13"],datasets:[{label:"Sessions",lineTension:.3,backgroundColor:"rgba(2,117,216,0.2)",borderColor:"rgba(2,117,216,1)",pointRadius:5,pointBackgroundColor:"rgba(2,117,216,1)",pointBorderColor:"rgba(255,255,255,0.8)",pointHoverRadius:5,pointHoverBackgroundColor:"rgba(2,117,216,1)",pointHitRadius:20,pointBorderWidth:2,data:[1e4,30162,26263,18394,18287,28682,31274,33259,25849,24159,32651,31984,38451]}]},options:{scales:{xAxes:[{time:{unit:"date"},gridLines:{display:!1},ticks:{maxTicksLimit:7}}],yAxes:[{ticks:{min:0,max:4e4,maxTicksLimit:5},gridLines:{color:"rgba(0, 0, 0, .125)"}}]},legend:{display:!1}}}),ctx=document.getElementById("myBarChart"),myLineChart=new Chart(ctx,{type:"bar",data:{labels:["January","February","March","April","May","June"],datasets:[{label:"Revenue",backgroundColor:"rgba(2,117,216,1)",borderColor:"rgba(2,117,216,1)",data:[4215,5312,6251,7841,9821,14984]}]},options:{scales:{xAxes:[{time:{unit:"month"},gridLines:{display:!1},ticks:{maxTicksLimit:6}}],yAxes:[{ticks:{min:0,max:15e3,maxTicksLimit:5},gridLines:{display:!0}}]},legend:{display:!1}}}),ctx=document.getElementById("myPieChart"),myPieChart=new Chart(ctx,{type:"pie",data:{labels:["Blue","Red","Yellow","Green"],datasets:[{data:[12.21,15.58,11.25,8.32],backgroundColor:["#007bff","#dc3545","#ffc107","#28a745"]}]}});

$(document).ready(function(){$("#dataTable").DataTable()});

!function(e){"use strict";e('.navbar-sidenav [data-toggle="tooltip"]').tooltip({template:'<div class="tooltip navbar-sidenav-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'}),e("#sidenavToggler").click(function(o){o.preventDefault(),e("body").toggleClass("sidenav-toggled"),e(".navbar-sidenav .nav-link-collapse").addClass("collapsed"),e(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show")}),e(".navbar-sidenav .nav-link-collapse").click(function(o){o.preventDefault(),e("body").removeClass("sidenav-toggled")}),e("body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse").on("mousewheel DOMMouseScroll",function(e){var o=e.originalEvent,a=o.wheelDelta||-o.detail;this.scrollTop+=30*(a<0?1:-1),e.preventDefault()}),e(document).scroll(function(){e(this).scrollTop()>100?e(".scroll-to-top").fadeIn():e(".scroll-to-top").fadeOut()}),e('[data-toggle="tooltip"]').tooltip(),e(document).on("click","a.scroll-to-top",function(o){var a=e(this);e("html, body").stop().animate({scrollTop:e(a.attr("href")).offset().top},1e3,"easeInOutExpo"),o.preventDefault()})}(jQuery);

