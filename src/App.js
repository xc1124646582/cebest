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
        this.data={"nav":[{"tita":"服务","titb":"/"},{"tita":"案例","titb":"/cases"},{"tita":"中企·云","titb":"/chinese"},{"tita":"我们","titb":"/we"},{"tita":"人才","titb":"/careers"},{"tita":"联系","titb":"/contact"}],"logo":{"logo":"images/logo.png","logo2":"images/logo2.png"},
            "foot":{"foimg":"images/f_logo.png","telephone1":"010-87127888","telephone2":"400-068-0808","copyright":"© 1999-2017 中企动力科技股份有限公司 京ICP备10002622号-16","place":"北京市经济技术开发区地盛西路1号 数码庄园B1座"}}
    };
    componentDidMount=function () {
        document.addEventListener('scroll', this.handleScroll.bind(this));
        var navs=document.getElementById("nav").getElementsByTagName("li");
        for(var i=0;i<navs.length;i++){
            navs[i].index=i
            navs[i].onclick=function(){
                for(var i=0;i<navs.length;i++){
                    navs[i].children[0].style.width=0
                }
                this.children[0].style.width="100%"
            }
        }
        $("#top").click(function () {
            $("html,body").stop(true).animate({scrollTop:0},1000)
        })
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
                                return <Link key={i}  to={con.titb}><li>{con.tita}
                                    <p></p>
                                </li></Link>
                            })}
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
                                    <img src={this.data.foot.foimg} alt=""/>
                                </a>
                            </div>
                            {/*footer logo end*/}
                            {/*footer copyright start*/}
                            <div className="my-copyright clear">
                                <p className="left"><img src="images/f_ico01.png" alt=""/>{this.data.foot.telephone1}&nbsp;&nbsp;&nbsp;{this.data.foot.telephone2}</p>
                                <p className="my-copyright-center">版权所有  {this.data.foot.copyright}</p>
                                <p className="right"><img src="images/f_ico02.png" alt=""/>{this.data.foot.place}</p>
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
                </div>
            </Router>
        )
    }

}

export default Index
