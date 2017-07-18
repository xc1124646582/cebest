import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './App.css';
import './apps.js';
import Serve from './Serve';
import Cases from './Cases';
class Index extends Component {

	constructor(){
		super();
		this.data={"nav":[{"tita":"服务","titb":"/"},{"tita":"案例","titb":"/Cases"},{"tita":"中企·云","titb":"/topics"},{"tita":"我们","titb":"/topics"},{"tita":"人才","titb":"/topics"},{"tita":"联系","titb":"/topics"}],"logo":{"logo":"images/logo.png","logo2":"images/logo2.png"},
		"foot":{"foimg":"images/f_logo.png","telephone1":"010-87127888","telephone2":"400-068-0808","copyright":"© 1999-2017 中企动力科技股份有限公司 京ICP备10002622号-16","place":"北京市经济技术开发区地盛西路1号 数码庄园B1座"}}
	};
   componentDidMount=function () {
    document.addEventListener('scroll', this.handleScroll.bind(this));
    var navs=document.getElementById("nav").getElementsByTagName("li");
    for(var i=0;i<navs.length;i++){
    	navs[i].onclick=function(){
    	for(var i=0;i<navs.length;i++){
    		navs[i].children[0].style.width=0
    }
    	this.children[0].style.width="100%"
    	}
    }
  };
  handleScroll=function (e) {
		if(document.body.scrollTop!=0){
		document.getElementById("abc").src=this.data.logo.logo2
		document.getElementById("head").style.height="90px"
		document.getElementById("head").style.backgroundColor="rgba(0,0,0,0.8)"
		document.getElementById("abc").style.marginLeft="40px"
		document.getElementById("nav").style.marginTop="0"
		}else{
		document.getElementById("abc").src=this.data.logo.logo
		document.getElementById("abc").style.marginLeft="30px"
		document.getElementById("head").style.height="100px"
		document.getElementById("head").style.backgroundColor="black"
		document.getElementById("nav").style.marginTop="10px"
		}
  };
  render(){
  	return(
  		  <Router>
  			<div className="main">
  			{/*head start*/}
    <div className="head clear" id="head">
    {/*logo*/}
    <img src={this.data.logo.logo} id="abc" className="logo"/>
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
    <Route exact path="/Cases" component={Cases}/>
    </div>
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

                 <div className="fixed">
                     <div className="ly">
                         <img src="images/l_ico.png" alt=""/>
                         <p>在线咨询</p>
                     </div>
                     <div className="tel">
                         <div className="tel_one"><img src="images/p_ico2.png" alt=""/><p>400-068-0808</p></div>
                         <div className="tel_two"><img src="images/p_ico.png" alt=""/><p>010-87127888</p></div>
                     </div>
                 </div>
	</div>
	  </Router>
  	)
  }

}

export default Index