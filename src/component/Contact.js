import React, { Component } from 'react';
import $ from 'jquery';

class Contact extends Component {
    constructor(){
        super();
        this.state={
            contact:[]
        }
    };
    componentDidMount () {
        $.ajax({
            type:"get",
            url:"http://192.168.43.25:8100/cebest/contact",
            success:function(data){
                this.setState({
                    contact:data[0]
                })
            }.bind(this)
        })
        var po_cun,pr_zoom;
        $(window).resize(function(){
            if(window.screen.width>414){
                //地图坐标
                po_cun=39.789;
                pr_zoom=18;
            }else{
                po_cun=39.7892;
                pr_zoom=12;
            }
        }).resize();
        var BMap = window.BMap
        var map = new BMap.Map("allmap",{enableMapClick:false});//关闭底图可点功能
        var point = new BMap.Point(116.5085,po_cun);
        map.centerAndZoom(point,pr_zoom);

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
        
        setTimeout(function () {
            $(".my-talk_window").show()
        },200)
    };
    render() {
        return (
            <div className="my-contact">
                <div id='allmap'></div>
                <div className="my-contact-us">
                    <div className="my-contact-us-n">
                        <h2>{this.state.contact.tit}</h2>
                        <h3></h3>
                        <h4>{this.state.contact.titEn}</h4>
                        <h5>
                            <span>{this.state.contact.address}</span>
                            <span>{this.state.contact.addressEn}</span>
                        </h5>
                        <br/>
                        <p><span>{this.state.contact.hotlineOne}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>{this.state.contact.web}</span></p>
                        <p><span>{this.state.contact.hotlineTwo}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>{this.state.contact.emailOne}</span></p>
                        <p><span>{this.state.contact.emailTwo}</span></p>
                    </div>
                    <img draggable="false" src="images/case_con01_bg2.png" alt=""/>
                </div>
            </div>
        )
    };
}
export default Contact
