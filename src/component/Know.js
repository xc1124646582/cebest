import React, { Component } from 'react';
import $ from 'jquery';

class Know extends Component{
    constructor(){
        super();
        this.state={
        }
    };
    componentDidMount=function () {
        
        setTimeout(function () {
            $(".my-talk_window").show()
        },200)
    };
    render(){
        return(
            <div className="my-know">
                <div className="my-know-one">
                    <h2>品牌网站，不止于设计</h2>
                    <h3></h3>
                    <p>今天，任何企业都可以通过品牌网站的建设或改良，在一段时间内取得成就。但是，许多服务提供商只关注于<br/>网站设计本身，忽略了企业希望了解通过网站如何改善品牌运营以及它们所提供的业务机遇。中企高呈能够与您协作，了解您的业务状况以及适合的改善模式，持续提供网络整合营销及增值服务，让您的品牌网站更有意义。</p>
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
                </div>
                <div className="my-know-four">
                    <h2>
                        <h3>方正集团</h3>
                        <p><span>集团官网</span><span>响应式</span></p>
                    </h2>
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
