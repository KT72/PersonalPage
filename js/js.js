﻿@charset "utf-8";
/* CSS Document */

body{
font: 14px/1.6 "Hiragino Kaku Gothic Pro",Osaka,"メイリオ","ＭＳ Ｐゴシック","MS PGothic",Verdana,Arial,sans-serif;
margin:0;
color:#313131;
}

img{
outline:none;
border-style:none;
}

a{
    color:blue;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
}
a:visited{
    color:blue;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
}
a:hover {
    color: #F5A862;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
}

/*****HEADER*****/
header{
    display: block;
    width:60%;
    margin-left: 20%;
    overflow: hidden;
}
header h1{
    font-size:120%;
    color:#313131;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border:1px solid #313131;
    border-radius: 5px;
    letter-spacing: 3px;
    font-weight:400;
    float: left;
}
header p{
    font-size:100%;
    color:#313131;
    float: left;
}

/*****BRANDING*****/
#branding{
    display: block;
    width: 60%;
    margin-left: 20%;
    overflow: hidden;
    background-color: #313131;
    margin-bottom: 20px;
    letter-spacing: 10px;
    line-height: 300px;
}
#branding p{
    color: #fff;
    font-size: 120%;
    padding-left: 3%;
}

/*****NAV*****/
nav{
    width: 100%;
    border-top: 1px solid orange;
    border-bottom: 1px solid orange;
    margin-bottom: 5px;
    overflow: hidden;
}
nav ul{
    width: 60%;
    margin-left: 20%;
}
nav li{
    width: calc(25% - 2px);
    font-size: 110%;
    letter-spacing: 5px;
    font-weight: 400;
    line-height: 45px;
    border-left: 1px solid orange;
    color: #313131;
    cursor: pointer;
    text-align: center;
    float: left;
}
nav li:last-child{
    border-right: 1px solid orange;
}

nav li:hover{
    background-color: orange;
    transition: background-color 0.5s ease-out;
    color: #fff;
}

/*****ARTICLE*****/
article{
    display: block;
    width: 60%;
    margin-left: 20%;
    margin-bottom: 20px;
    overflow: hidden;
}
section{
    width: 41%;
    padding: 2.5%;
    margin: 1.5%;
    background-color: #f9f9f9;
    overflow: hidden;
    float: left;
}
section .date{
    font-size: 60%;
    color: orange;
    border: 1px solid orange;
    padding-top:3px;
    padding-bottom: 3px;
    padding-right: 6px;
    padding-left: 6px;
    letter-spacing: 5px;
    float: left;
}
section h1{
    width: 100%;
    font-size: 150%;
    letter-spacing: 3px;
    padding-bottom:2px;
    padding-top: 10px;
    border-bottom: 1px solid #bababa;
    margin-bottom: 15px;
    float: left;
}

section p{
    font-size: 100%;
    color: #313131;
    letter-spacing: 3px;
    line-height: 200%;
    margin-bottom: 10px;
    float: left;
}

section .btn{
    color: #fff;
    border: 1px solid orange;
    background-color: orange;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 30px;
    padding-left: 30px;
    border-radius: 5px;
    letter-spacing: 5px;
    text-decoration: none;
    overflow: hidden;
    float: right;
}
section .btn:hover{
    background-color: #fff;
    border: 1px solid orange;
    transition: background-color 0.5s ease-out;
    transition: color 0.5s ease-out;
    transition: border 0.5s ease-out;
    color: orange;
    overflow: hidden;
}

footer{
    font-size: 80%;
    width: 100%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #313131;
}
footer address{
    color: #fff;
    letter-spacing: 5px;
}
