import React, { Component } from 'react';
import $ from 'jquery';
import conf from './../config'
import Ajax from './../Ajax';

class Know extends Component{
    constructor(){
        super();
        this.state={
            know:[],
            str:null
        }
    };
    componentDidMount=function () {
        var con=window.location.href.split("=")[1];
        if(con==1){
            $(".my-know-three").css("background","#e4e4e4");
            $(".my-know-three h2").css("color","#383838");
            $(".my-know-three h3").css("background","#262626");
            $(".my-know-three p").css("color","#7d7d7d");
        }else{
            $(".my-know-three").css("background","#333");
            $(".my-know-three h2").css("color","#fff");
            $(".my-know-three h3").css("background","#fff");
            $(".my-know-three p").css("color","#fff");
        }
        Ajax({
            // 'url':'http://127.0.0.1:8100/cebest/know',
            'url':conf.url+'/cebest/know',
            'type':'get',
            'success':function(data) {
                var opt=eval('('+data+')')
                // console.log(data);
                for (var i in opt) {
                    if (opt[i].con==con) {
                        this.state.know.push(opt[i]);
                    }
                };
                this.setState({
                    know:this.state.know,
                    str:this.state.know[0].h2
                });
            }.bind(this)
        })
        setTimeout(function () {
            $(".my-talk_window").show()
        },200)
        if(window.addEventListener){
            document.addEventListener('scroll', this.knowScroll);
        }else{
            document.attachEvent('onscroll', this.knowScroll);
        }
    };
    knowScroll(){
        var tops=(document.body.scrollTop)||(document.documentElement.scrollTop);
        if(window.screen.width>414){
            if (tops>=710){
                $(".my-know-two").css({
                    "position":"fixed",
                    "z-index":"-4",
                    "top":"90px",
                    "left":"0",
                    "right":"0",
                    "margin":"0"
                });
                $(".my-know-three").css({"margin-top":"1400px"});
            }
            if(tops<710){
                $(".my-know-two").css({
                    "position":"static",
                    "margin-top":"700px"
                });
                $(".my-know-three").css({"margin-top":"0"});
            }
            /*if(tops>=1410){
             $(".my-know-three").css({
                 "position":"fixed",
                 "z-index":"-3",
                 "top":"90px",
                 "left":"0",
                 "right":"0",
                 "margin":"0"
             });
             $(".my-know-four").css({"margin-top":"2100px"});
             }
             if(tops>=710&&tops<1410){
             $(".my-know-three").css({
                 "position":"static",
                 "margin":"0"
             });
             $(".my-know-four").css({"margin-top":"0"});
             }*/
        }else if(window.screen.width<=414){
            if (tops>=710){
                $(".my-know-two").css({
                    "position":"static",
                    "z-index":"-4",
                    "top":"90px",
                    "left":"0",
                    "right":"0",
                    "margin":"0"
                });
                $(".my-know-three").css({"margin-top":"0"});
            }
            if(tops<710){
                $(".my-know-two").css({
                    "position":"static",
                    "margin-top":"0"
                });
                $(".my-know-three").css({"margin-top":"0"});
            }
        }

    }
    componentWillUnmount(){
        if(window.addEventListener){
            document.removeEventListener('scroll', this.knowScroll);
        }else{
            document.detachEvent('onscroll', this.knowScroll);
        }
    }
    render(){
        return(
            <div className="my-know">
                <div className="my-know-one">
                    <h2>{this.state.str}</h2>
                    <h3></h3>
                    <p>今天，任何企业都可以通过品牌网站的建设或改良，在一段时间内取得成就。但是，许多服务提供商只关注于<br/>网站设计本身，忽略了企业希望了解通过网站如何改善品牌运营以及它们所提供的业务机遇。中企高呈能够与您协作，了解您的业务状况以及适合的改善模式，持续提供网络整合营销及增值服务，让您的品牌网站更有意义。</p>
                <div className="know-bank"></div>
                </div>
                <div className="my-know-two">
                    <div className="my-know-box clear">
                        <img src="images/cl_logo.png" alt=""/>
                        <div className="my-know600">
                            <h2>门户云<span>Portal Cloud</span></h2>
                            <h3></h3>
                            <p>对企业网站门户能覆盖的全部终端与网路营销渠道整合在同一平台，进行统一维护和管理。多达几十种门户类通用应用，供企业随时按需选择，同时可以针对客户需求定制化专属应用，满足企业个性化功能需求。</p>
                        </div>
                    </div>
                </div>
                <div className="my-know-three">
                    <h2>专业视角，规范流程</h2>
                    <h3></h3>
                    <p>从品牌定位出发，分析品牌特性及业务需求，<br/>从互联网角度制定品牌的全线策略，并提供全套技术支持及网站延展服务。</p>
                    <ul>
                        {
                            this.state.know.map(function (v,i) {
                                return <li key={i}>
                                <p><img src={v.img} alt=""/></p>
                                    <p>{v.tit}</p>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="my-know-four">
                    <div className="h2">
                        <h3>方正集团</h3>
                        <p><span>集团官网</span><span>响应式</span></p>
                    </div>
                </div>
                {/*help start*/}
                <div className="my-help">
                    <img src="images/join_bg.jpg" alt=""/>
                    <div className="my-help-mask">
                        <div className="my-help-join">
                            <h3>自始至终提供帮助<span></span></h3>
                            <h4>我们非常希望可以帮助到您并和您一起工作，请联系我们专业的咨询顾问！</h4>
                            <div className="my-serve-g">
                                <div className="my-serve">
                                    <p className="my-serve-p-one">+联系我们</p>
                                    <p className="my-serve-p-two">+联系我们</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*help end*/}
            </div>
        )
    }
}

export default Know;
