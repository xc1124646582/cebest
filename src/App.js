import React, { Component } from 'react';
import $ from 'jquery';
import Ajax from './Ajax';
import conf from './config'
import './App.css';
import './App_phone.css';
import Serve from './component/Serve';
import Know from './component/Know';
import More from './component/More';
import Cases from './component/Cases';
import Chinese from './component/Chinese';
import We from './component/We'
import Careers from './component/Careers';
import Contact from './component/Contact'
import './style/serve.css';
import './style/serve_phone.css';
import './style/know.css';
import './style/more.css';
import './style/more_phone.css';
import './style/cases.css';
import './style/cases_phone.css';
import './style/chinese.css';
import './style/chinese_phone.css';
import './style/we.css';
import './style/we_phone.css';
import './style/careers.css';
import './style/careers_phone.css';
import './style/contact.css';
import './style/contact_phone.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Index extends Component {
    constructor(){
        super();
      	this.state={
			logo1:null,
			logo2:null,
			nav:[],
			logo:[]
		};
        this.data={"nav":[{"tita":"服务","titEn":"Service","titb":"/"},{"tita":"案例","titEn":"Cases","titb":"/cases"},{"tita":"中企·云","titEn":"Cloud","titb":"/chinese"},{"tita":"我们","titEn":"About","titb":"/we"},{"tita":"人才","titEn":"Careers","titb":"/careers"},{"tita":"联系","titEn":"Contact","titb":"/contact"}],"logo":{"logo":"images/logo.png","logo2":"images/logo2.png"}}

    };
    componentDidMount=function () {
		Ajax({
			type: "get",
			// 'url':'http://127.0.0.1:8100/cebest/home',
			url: conf.url+"/cebest/logos",
			success: function(e) {
				var data=eval('('+e+')')
				this.setState({
					logo1:data[0].src,
					logo2:data[1].src
				})
			}.bind(this),
			error: function() {
				alert("失败")
			}
		});
		Ajax({
			// 'url':'http://127.0.0.1:8100/cebest/home',
			'url':conf.url+'/cebest/home',
			'type':'get',
			'success':function(opt) {
				// console.log(opt);
				var data=eval('('+opt+')')
				this.setState({
					nav:data
				});
				$("#nav a").click(function () {
					(document.body.scrollTop=0) || (document.documentElement.scrollTop=0);
					if($(this).index()==0){
						window.location="http://localhost:3000";
					}
				});
				if(window.location.href.indexOf('more')!=-1||window.location.href.indexOf('know')!=-1){
					$("#nav a:first-of-type li").addClass('active');
				}
			}.bind(this)
		})
        $("#nav a").click(function () {
            (document.body.scrollTop=0) || (document.documentElement.scrollTop=0);
            $(this).children().addClass('active').parent().siblings().children().removeClass('active');
            if($(this).index()==0){
                window.location="http://localhost:3000";
            }
        });
		
    	/* 添加nav事件*/
    	if(window.addEventListener){
    		document.addEventListener('scroll', this.handleScroll.bind(this));
    	}else{
    		document.attachEvent('onscroll', this.handleScroll.bind(this));
    	}
    	/* 页面初始化*/
        $("#top").click(function () {
            $("html,body").stop(true).animate({scrollTop:0},1000);
        });
        $(".my-t_w_close").click(function () {
            $(".my-talk_window").hide();
        });
        setTimeout(function () {
            $(".my-talk_window").show();
        },200)

		if(window.screen.width<=414){
			$(".nav_btn").click(function () {
				$(".nav_btn span").toggleClass("toggl");
				$(".nav").fadeToggle(200)
				$(".nav a").click(function () {
					$(".nav").fadeOut(200)
					$(".nav_btn span").removeClass("toggl");
				})
			})
			document.getElementById("head").style.height="2.70531rem";
		}else{

		}
		
    };
    /* 导航事件*/
    handleScroll=function (e) {
		var tops=(document.body.scrollTop)||(document.documentElement.scrollTop);
		if(window.screen.width>414){
			if(tops>0){
				document.getElementById("abc").src=this.state.logo2;
				document.getElementById("abc").style.marginLeft="40px";
				document.getElementById("head").style.height="90px";
				document.getElementById("head").style.backgroundColor="rgba(0,0,0,0.8)";
				document.getElementById("nav").style.marginTop="0";
				document.getElementById("top").style.height="70px";
			}else{
				document.getElementById("abc").src=this.state.logo1;
				document.getElementById("abc").style.marginLeft="30px";
				document.getElementById("head").style.height="100px";
				document.getElementById("head").style.backgroundColor="black";
				document.getElementById("nav").style.marginTop="10px";
				document.getElementById("top").style.height="0";
			}
		}else if(window.screen.width<=414){
			document.getElementById("head").style.height="2.70531rem";
			$(".scrvecon2img").css("transform","translateY(0)")
			$(".scrvecon4img").css("marginLeft",0)
			$($(".chinese-con4-left>img:nth-child(1)").get(1)).css("marginLeft","0");
			if (tops>0){
				document.getElementById("top").style.height="2.31884rem";
			}else{
				document.getElementById("top").style.height="0";
			}

		}

    };
    render(){
        return(
            <Router>
                <div className="main">
                    {/*head start*/}
                    <div className="head clear" id="head">
                        {/*logo*/}
                        <img src={this.state.logo1} id="abc" className="logo" alt=""/>
						<img src={this.state.logo2} className="logo_phone" alt=""/>
                        {/*nav state*/}
                        <ul className="nav clear" id="nav">
                            {
								this.state.nav.map(function(con,i){
                                return (<OldSchoolMenuLink key={i} activeOnlyWhenExact={i==0?true:false} to={con.titb} label={con.tita} labelEn={con.titEn}/>
                                )})
							}
                        </ul>
						<div className="nav_btn">
							<span></span>
						</div>
                        {/*nav end*/}
                    </div>
                    {/*head end*/}
                    <div className="center">
                        <p className="cen-head"></p>
                        <Route exact path="/" component={Serve}/>
						<Route path="/know" component={Know}/>
                        <Route path="/more" component={More}/>
                        <Route path="/cases" component={Cases}/>
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
                                <p className="my-copyright-center">版权所有  © 1999-2017 中企动力科技股份有限公司 <span>京ICP备10002622号-16</span></p>
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
                    {/*<div className="my-talk_window">
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
                    </div>*/}
                    {/*alert start*/}
                    
                    {/*alert end*/}
                </div>
            </Router>
        )
    }

}
const OldSchoolMenuLink = ({ label, labelEn, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link to={to}>
    <li className={match ? 'active' : ''}>
      {label}<span>{labelEn}</span>
       <p></p>
    </li>
    </Link>
  )}/>
)

export default Index
