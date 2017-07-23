import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Serve from './component/Serve';
import Cases from './component/Cases';
import Chinese from './component/Chinese';
import We from './component/We'
import Careers from './component/Careers';
import Contact from './component/Contact'
import './style/serve.css';
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
