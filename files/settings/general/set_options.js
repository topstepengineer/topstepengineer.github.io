
var myData = "../../myData.csv";
var myDataFrontPage = "myData.csv";
// var myData = "//wecfsc01/LMH/Test_22/1122_Aragon/_Documents/_Report/_KPIs/myData.csv";
// var myDataFrontPage = "//wecfsc01/LMH/Test_22/1122_Aragon/_Documents/_Report/_KPIs/myData.csv";
// var myDataFrontPage = "https://s3.eu-west-3.amazonaws.com/lmh.kpi.ch004/myData.csv";


var minDistance = 1500; //minimum lap distance for filter

var minLaptime = 106;
var avgLaptime = 108;
var maxLaptime = 113;

var maxSpeed = 305;

var Drv1 = 'FUO' //'c68e366a-5a8f-4f3a-bd81-84b1e9762a1b';
var Drv2 = 'APG' //'36151730-b89c-4305-84e7-445b05646872';
var Drv3 = 'CAL' //'de7faf50-914b-4b92-b263-15aeabb7dc9c';

var timeZoneOffset = 4;

var refreshTime = 900; //seconds between auto page refreshes

var divStyle = "width: 98%; height: 400px; float: right;"

// ------------------------------------------------
// channel colors----------------------------------

var colDefault = {r: 150, g: 150, b: 200 };

var colFL = {r: 0, g: 255, b: 255 };
var colFR = {r: 50, g: 50, b: 255 };
var colRL = {r: 255, g: 0, b: 255 };
var colRR = {r: 255, g: 0, b: 0 };
