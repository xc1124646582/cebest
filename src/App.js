import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Serve from './component/Serve';
import More from './component/More';
import Cases from './component/Cases';
import Chinese from './component/Chinese';
import We from './component/We'
import Careers from './component/Careers';
import Contact from './component/Contact'
import './style/serve.css';
import './style/more.css';
import './style/cases.css';
import './style/chinese.css';
import './style/we.css';
import './style/careers.css';
import './style/contact.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Index extends Component {
    constructor(){
        super();
        this.data={"nav":[{"tita":"服务","titb":"/"},{"tita":"案例","titb":"/cases"},{"tita":"中企·云","titb":"/chinese"},{"tita":"我们","titb":"/we"},{"tita":"人才","titb":"/careers"},{"tita":"联系","titb":"/contact"}],"logo":{"logo":"images/logo.png","logo2":"images/logo2.png"}}

    };
    componentDidMount=function () {
        $("#nav a").click(function () {
            (document.body.scrollTop=0) || (document.documentElement.scrollTop=0)
            $(this).children().addClass('active').parent().siblings().children().removeClass('active')
        })
        if(window.location.href.indexOf('more')!=-1){
            $("#nav a:first-of-type li").addClass('active')
        }
    	/* 添加滑轮事件*/
    	if(window.addEventListener){
    		document.addEventListener('scroll', this.bodyScroll.bind(this));
    	}else{
    		document.attachEvent('onscroll', this.bodyScroll.bind(this));
    	}
    	
    	if(window.addEventListener){
    		document.addEventListener('scroll', this.handleScroll.bind(this));
    	}else{
    		document.attachEvent('onscroll', this.handleScroll.bind(this));
    	}
        $("#top").click(function () {
            $("html,body").stop(true).animate({scrollTop:0},1000);
        });
        $(".my-t_w_close").click(function () {
            $(".my-talk_window").hide();
        });
        setTimeout(function () {
            $(".my-talk_window").show();
        },200)
    };
    handleScroll=function (e) {
        if(document.body.scrollTop>0){
            document.getElementById("abc").src=this.data.logo.logo2
            document.getElementById("head").style.height="90px"
            document.getElementById("head").style.backgroundColor="rgba(0,0,0,0.8)"
            document.getElementById("abc").style.marginLeft="40px"
            document.getElementById("nav").style.marginTop="0"
            document.getElementById("top").style.height="70px"
        }else{
            document.getElementById("abc").src=this.data.logo.logo
            document.getElementById("abc").style.marginLeft="30px"
            document.getElementById("head").style.height="100px"
            document.getElementById("head").style.backgroundColor="black"
            document.getElementById("nav").style.marginTop="10px"
            document.getElementById("top").style.height="0"
        }
    };
    /* 滑轮事件*/
      bodyScroll=function(e){
      	var ev=e||window.event
		 	var tops=document.body.scrollTop
		 	console.log(tops)
		 	/* chinese */
		 	if(window.location.href=="http://localhost:3000/chinese"){
		 	if(tops>=400&&tops<=900){
		 	document.getElementById("cn2r").style.left="20%"
		 	document.getElementById("cn2r").style.opacity="1"
		 	}
		 	/* we*/
		 	}else if(window.location.href=="http://localhost:3000/we"){
		 		if(tops>=1900&&tops<=2800){
		 		document.getElementById("wn4tou").style.opacity="1"
		 		document.getElementById("tou1text").style.width="231px"
		 		document.getElementById("tou1text").style.opacity="1"
		 		document.getElementById("tou1lin").style.width="316px"
		 		document.getElementById("tou2text").style.width="85px"
		 		document.getElementById("tou2text").style.opacity="1"
		 		document.getElementById("tou2lin").style.width="188px"
		 		document.getElementById("tou3text").style.width="62px"
		 		document.getElementById("tou3text").style.opacity="1"
		 		document.getElementById("tou3lin").style.width="304px"
		 		document.getElementById("tou4text").style.width="161px"
		 		document.getElementById("tou4text").style.opacity="1"
		 		document.getElementById("tou4lin").style.width="261px"
		 	}
		 	if(tops>=800&&tops<=1200){
		 		var ww=tops-800
		 		console.log(ww)
		 		document.getElementById("wn3img").style.top=-(ww/9)+"px"
		 	}
		 	if(tops>=400&&tops<=900){
		 		document.getElementById("wn2li1").style.top="0"
		 		document.getElementById("wn2li1").style.opacity="1"
		 		document.getElementById("wn2li2").style.top="0"
		 		document.getElementById("wn2li2").style.opacity="1"
		 		document.getElementById("wn2li3").style.top="0"
		 		document.getElementById("wn2li3").style.opacity="1"
		 	} 	
		 	}
		 }
    render(){
        return(
            <Router>
                <div className="main">
                    {/*head start*/}
                    <div className="head clear" id="head">
                        {/*logo*/}
                        <img src={this.data.logo.logo} id="abc" className="logo" alt=""/>
                        {/*nav state*/}
                        <ul className="nav clear" id="nav">
                            {this.data.nav.map(function(con,i){
                                return (<OldSchoolMenuLink key={i} activeOnlyWhenExact={i==0?true:false} to={con.titb} label={con.tita}/>
                                )})}
                        </ul>
                        {/*nav end*/}
                    </div>
                    {/*head end*/}
                    <div className="center">
                        <p className="cen-head"></p>
                        <Route exact path="/" component={Serve}/>
                        <Route path="/cases" component={Cases}/>
                        <Route path="/more" component={More}/>
                        <Route path="/chinese" component={Chinese}/>
                        <Route path="/we" component={We}/>
                        <Route path="/careers" component={Careers}/>
                        <Route path="/contact" component={Contact}/>
                    </div>





                    <div className="my-footer">
                        <div className="my-box">
                            {/*footer logo start*/}
                            <div className="my-footer-con">
                                <a href="">
                                    <img src="images/f_logo.png" alt=""/>
                                </a>
                            </div>
                            {/*footer logo end*/}
                            {/*footer copyright start*/}
                            <div className="my-copyright clear">
                                <p className="left"><img src="images/f_ico01.png" alt=""/>010-87127888&nbsp;&nbsp;&nbsp;400-068-0808</p>
                                <p className="my-copyright-center">版权所有  © 1999-2017 中企动力科技股份有限公司 京ICP备10002622号-16</p>
                                <p className="right"><img src="images/f_ico02.png" alt=""/>北京市经济技术开发区地盛西路1号 数码庄园B1座</p>
                            </div>
                            {/*footer copyright end*/}
                        </div>
                    </div>
                    {/*fixed start*/}
                    <div className="fixed">
                        <div className="ly">
                            <img src="images/l_ico.png" alt=""/>
                            <p>在线咨询</p>
                        </div>
                        <div className="tel">
                            <div className="tel_one"><img src="images/p_ico2.png" alt=""/><p>400-068-0808</p></div>
                            <div className="tel_two"><img src="images/p_ico.png" alt=""/><p>010-87127888</p></div>
                        </div>
                        <img className="top" id="top" src="images/t_ico.png" alt=""/>
                    </div>
                    {/*fixed end*/}
                    {/*alert start*/}
                    <div className="my-talk_window">
                        <div className="my-talk_window_con">
                            <div className="my-t_w_close">x</div>
                            <div className="my-t_w_text">
                                <h3>我们能给的，远比您想的更多</h3>
                                <p>定制方案、专业设计，一对一服务</p>
                                <p>咨询可以通过以下方式</p>
                                <div className="my-p"><a href="tel:4000680808">400-068-0808</a><a href="tel:01087127888">010-87127888</a></div>
                            </div>
                            <div className="my-t_w_btn">
                                <a className="my-menu_ly" href="">立即在线咨询</a>
                                <a className="my-a_close" href="">稍后再说</a>
                            </div>
                        </div>
                    </div>
                    {/*alert end*/}
                </div>
            </Router>
        )
    }

}
const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link to={to}>
    <li className={match ? 'active' : ''}>
      {label}
       <p></p>
    </li>
    </Link>
  )}/>
)

export default Index
