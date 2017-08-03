import React, { Component } from 'react';
import $ from 'jquery';
import conf from './../config'

class We extends Component {
    constructor(){
        super()
        this.state={
            data:{
                data_one:[],
                data_two:[],
                data_three:[],
                data_four:[],
                data_five:[],
                data_six:[]
            },
            arr:[]
        }
    }
    componentDidMount(){
        $.ajax({
            url:conf.url+"/cebest/we",
            // url:"http://127.0.0.1:8100/cebest/we",
            type:"get",
            success:function (data) {
                // console.log(data)
                this.setState({
                    data:{
                        data_one:data[0],
                        data_two:data[1],
                        data_three:data[2],
                        data_four:data[3],
                        data_five:data[4],
                        data_six:data[5]
                    }
                })
            }.bind(this)
        })
        $.ajax({
            url:conf.url+"/cebest/we_n",
            // url:"http://127.0.0.1:8100/cebest/we_n",
            type:"get",
            success:function (data) {
                // console.log(data)
                this.setState({
                    arr:data
                })
            }.bind(this)
        })
    	document.getElementById("weasr").onmousemove=function(ev){
          var divl=document.getElementById("wn1l").offsetLeft+100;
          var divt=document.getElementById("wn1l").offsetTop+100;
          var lo=ev.clientX
          var to=ev.clientY
          var lal=0;
          var lat=0;
          if(to>divt){
          	lat=to-divt;
          }else if(to<divt){
          	lat=-(divt-to)
          }
          if(lo>divl){
          	lal=lo-divl;
          }else if(lo<divl){
          	lal=-(divl-lo)
          }
          var atl=lal/24
          var att=lat/24
            if(att>40){
          	att=40
          }else if(att<-40){
          	att=-40
          }
          if(atl>40){
          	atl=40
          }else  if(atl<-40){
          	atl=-40
          }
          document.getElementById("wn1l").style.left=-atl+"px "
          document.getElementById("wn1l").style.top=-att+"px "
		 		}
        setTimeout(function () {
            $(".my-talk_window").show()
        },200)
    }
    render() {
        return (
            <div className="my-we">
                <div className="my-ce-ultimate" id="weasr">
                    <div className="my-we-box clear" >
                        <img className="left aa" src="images/ly_logo37.png" id="wn1l" alt=""/>
                        <div className="my-ce-ultimate-txt left">
                            <img src="images/ly_logo38.png" alt=""/>
                            <h2>{this.state.data.data_one.titEn}</h2>
                            <p>{this.state.data.data_one.con}</p>
                        </div>
                    </div>
                </div>
                <div className="my-num">
                    <ul className="clear">
                        {
                            this.state.arr.map(function (v,i) {
                                return <li key={i} id={`wnli${v.id}`}>
                                    <h2>{v.title}</h2>
                                    <p>
                                        <span>{v.con1}</span>
                                        <span>{v.con2}</span>
                                    </p>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="my-future">
                    <div className="my-future-box clear">
                        <div className="my-future-l left">
                            <h2>{this.state.data.data_two.tit}</h2>
                            <img src="images/ly_img08.png" alt=""/>
                            <p>{this.state.data.data_two.con}</p>
                        </div>
                        <div className="my-future-r right">
                            <img className="my-future-img-top" src="images//ly_img10.png" id="wn3img" alt=""/>
                            <img className="my-future-img-left" src="images//ly_img11.png" alt=""/>
                            <img className="my-future-img-right" src="images//ly_img12.png" alt=""/>
                        </div>
                    </div>
                </div>
                
                
                <div className="us-cloud">
            <div className="w1200 cleargap">
                <div className="ibox head-box">
                    <div className="head-cn fnt_30 wow-cloud fadeInDown"  data-wow-duration="0.5s">{this.state.data.data_three.tit}</div>
                    <div className="bt-line wow-cloud fadeInDown" data-wow-duration="1s"><img src="images/ly_img07.png" alt=""/></div>
                    <div className="head-en fnt_48 wow-cloud fadeInDown" data-wow-duration="1.5s">{this.state.data.data_three.titEn}</div>
                    <div className="head-txt fnt_16 wow-cloud fadeInDown" data-wow-duration="2s">{this.state.data.data_three.con}</div>
                </div>
                <div className="ibox verti-box"></div>
                <div className="fl us-cloud-box prz">
                    <div className="pra cloud-img1" data-center-center="transform:translateY(0px);" data-top="transform:translateY(-20px);"></div>
                    <div className="pra cloud-img2" data-center-center="transform:translateY(0px);" data-top="transform:translateY(-30px);"></div>
                    <div className="pra cloud-img3" data-center-center="transform:translateY(0px);" data-top="transform:translateY(-50px);"></div>
                    <div className="pra cloud-img4" data-center-center="transform:translateY(0px);" data-top="transform:translateY(-60px);"></div>
                </div>
            </div>
        </div>
                
                
                
                
                        <div className="us-design mds-we-con7">
            <div className="w1200 prz">
                {/* we-conhead*/}
                <div className="mds-we-conhead">
                <h2>{this.state.data.data_four.tit}</h2>
                <p>{this.state.data.data_four.titEn}</p>
                <p><img src="images/ly_img08.png" alt=""/></p>
                <p>{this.state.data.data_four.con}</p>
                </div>
                <div className="us-char pra">
                    <div className="us-brain" id="wn4tou"></div>
                    <div className="us-charGr1 us-charBox">
                        <span className="pra char-line" id="tou1lin"></span>
                        <span className="pra char-txt"  id="tou1text" data-center-center="transform:translateX(0px);" data-top="transform:translateX(-60px);"></span>
                    </div>
                    <div className="us-charGr2 us-charBox">
                        <span className="pra char-line"  id="tou2lin"></span>
                        <span className="pra char-txt" id="tou2text" data-center-center="transform:translateX(0px);" data-top="transform:translateX(-60px);"></span>
                    </div>
                    <div className="us-charGr3 us-charBox">
                        <span className="pra char-line" id="tou3lin"></span>
                        <span className="pra char-txt" id="tou3text" data-center-center="transform:translateX(0px);" data-top="transform:translateX(-60px);"></span>
                    </div>
                    <div className="us-charGr4 us-charBox">
                        <span className="pra char-line" id="tou4lin"></span>
                        <span className="pra char-txt" id="tou4text" data-center-center="transform:translateX(0px);" data-top="transform:translateX(-60px);"></span>
                    </div>
                    <div className="us-charGr5 us-charBox">
                        <span className="pra char-line" id="tou5lin"></span>
                        <span className="pra char-txt" id="tou5text" data-center-center="transform:translateX(0px);" data-top="transform:translateX(60px);"></span>
                    </div>
                    <div className="us-charGr6 us-charBox">
                        <span className="pra char-line" id="tou6lin"></span>
                        <span className="pra char-txt" id="tou6text" data-center-center="transform:translateX(0px);" data-top="transform:translateX(60px);"></span>
                    </div>
                    <div className="us-charGr7 us-charBox">
                        <span className="pra char-line" id="tou7lin"></span>
                        <span className="pra char-txt" id="tou7text" data-center-center="transform:translateX(0px);" data-top="transform:translateX(60px);"></span>
                    </div>
                </div>
            </div> 
        </div>
                
                
                
                
                 <div className="mds-we-con6 us-tech">
                <div className="w1200 prz">
                 {/* we-conhead*/}
                <div className="mds-we-conhead">
                <h2>{this.state.data.data_five.tit}</h2>
                <p>{this.state.data.data_five.titEn}</p>
                <p><img src="images/ly_img07.png" alt=""/></p>
                <p>{this.state.data.data_five.con}</p>
                </div>
                    <div className="tech-imgGr pra">
                    <div className="tech-img1 pra tech-img" id="wns1"></div>
                    <div className="tech-img2 pra tech-img" id="wns2"></div>
                    <div className="tech-img3 pra tech-img" id="wns3"></div>
                    <div className="tech-img4 pra tech-img" id="wns4"></div>
                    <div className="tech-img5 pra tech-img" id="wns5"></div>
                </div>
                </div>
                </div>
                
                
                <div className="mds-we-con7">
                {/* we-conhead*/}
                <div className="mds-we-conhead">
                <h2>{this.state.data.data_six.tit}</h2>
                <p>{this.state.data.data_six.titEn}</p>
                <p><img src="images/ly_img06.png" alt=""/></p>
                <p>{this.state.data.data_six.con}</p>
                </div>
                
             {/*we-con7 */}   
            <div className="us-service">
            <div className="w1200">
                <div className="ser-proc prz">
                    <div className="ser-moveBox">
                        <div className="ser-step1 pra ser-step"></div>
                        <dl className="step-txt1 pra step-txt">
                            <dt className="cn fnt_16">品牌策略</dt>
                            <dd className="en">Brand  Strategy</dd>
                        </dl>
                        <div className="ser-curve1 pra ser-curve sers"></div>
                    </div>
                    <div className="ser-moveBox">
                        <div className="ser-step2 pra ser-step"></div>
                        <dl className="step-txt2 pra step-txt">
                            <dt className="cn fnt_16">需求调研</dt>
                            <dd className="en">Requirement Survey</dd>
                        </dl>
                        <div className="ser-curve2 pra ser-curve sers"></div>
                    </div>
                    <div className="ser-moveBox">
                        <div className="ser-step3 pra ser-step"></div>
                        <dl className="step-txt3 pra step-txt">
                            <dt className="cn fnt_16">视觉设计</dt>
                            <dd className="en">Visual Design</dd>
                        </dl>
                        <div className="ser-curve3 pra ser-curve sers"></div>
                    </div>
                    <div className="ser-moveBox">
                        <div className="ser-step4 pra ser-step"></div>
                        <dl className="step-txt4 pra step-txt">
                            <dt className="cn fnt_16">技术实现</dt>
                            <dd className="en">Technological Realization</dd>
                        </dl>
                        <div className="ser-curve4 pra ser-curve sers"></div>
                    </div>
                    <div className="ser-moveBox">
                        <div className="ser-step5 pra ser-step"></div>
                        <dl className="step-txt5 pra step-txt">
                            <dt className="cn fnt_16">项目上线</dt>
                            <dd className="en">Website Launch</dd>
                        </dl>
                        <div className="ser-curve5 pra ser-curve sers"></div>
                    </div>
                    <div className="ser-moveBox">
                        <div className="ser-step6 pra ser-step"></div>
                        <dl className="step-txt6 pra step-txt">
                            <dt className="cn fnt_16">项目运营</dt>
                            <dd className="en">Project Operation</dd>
                        </dl>
                        <div className="ser-curve6 pra ser-curve"></div>
                    </div>
                    <div className="ser-moveBox">
                        <div className="ser-step7 pra ser-step"></div>
                        <dl className="step-txt7 pra step-txt">
                            <dt className="cn fnt_16">整合营销</dt>
                            <dd className="en">Integrated Marketing</dd>
                        </dl>
                    </div>
                    
                </div>
            </div>
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

export default We