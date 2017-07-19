import React, { Component } from 'react';
import $ from 'jquery';

class Contact extends Component {
    componentDidMount () {
        var BMap = window.BMap
        var map = new BMap.Map("allmap",{enableMapClick:false});//关闭底图可点功能
        var point = new BMap.Point(116.5085,39.789);
        map.centerAndZoom(point,18);

        map.enableScrollWheelZoom(true);
        map.setMapStyle({style:'googlelite'});

        //创建小狐狸
        var pt = new BMap.Point(116.5054,39.7887);
        var myIcon = new BMap.Icon("images/map_ico1.png", new BMap.Size(20,27));
        //var marker2 = new BMap.Marker(pt);  // 创建标注
        var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
        //map.addOverlay(marker2);              // 将标注添加到地图中

        var opts = {width : 150};

        var sContent ='<dl style="overflow:hidden;padding:0px 0 0px 40px;"><dt style="float:left;"><img src="images/map_logo.png" alt="" height="73px"></dt><dd style="float:left;padding-top:20px;padding-left:15px;"><h3 style="font-size:16px;line-height:1;">中企高呈</h3><p style="color:#7d7d7d;font-size:12px;padding-top:5px;">CE ULTIMATE</p></dd></dl>';

        //var marker = new BMap.Marker(pt);
        var infoWindow = new BMap.InfoWindow(sContent,opts);  // 创建信息窗口对象
        map.addOverlay(marker2);
        marker2.openInfoWindow(infoWindow);
        marker2.addEventListener("click", function(){
            this.openInfoWindow(infoWindow);
        });
        setTimeout(function(){
            $('.BMap_bubble_content').parent('div').next('img').eq(0).addClass('Bmap_close');
        },100);
    }
    render() {
        return (
            <div className="my-contact">
                <div id='allmap'></div>
                <div className="my-contact-us">
                    <div className="my-contact-us-n">
                        <h2>联系我们</h2>
                        <h3></h3>
                        <h4>Contact Us</h4>
                        <h5>
                            <span>地址：北京市经济技术开发区地盛西路1号 数码庄园B1座</span>
                            <span>ADD：Building B1,No.1,Disheng West Road Beijing Economic-Technological Development Area</span>
                        </h5>
                        <br/>
                        <p>客户服务热线：010-87127888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网址（Web）：www.cebest.com</p>
                        <p>免费咨询热线：400-068-0808&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客户服务邮箱：cebest@300.cn</p>
                        <p>媒介合作邮箱：media@300.cn</p>
                    </div>
                    <img src="images/case_con01_bg2.png" alt=""/>
                </div>
            </div>
        )
    }
}
export default Contact
