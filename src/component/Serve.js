import React, { Component } from 'react';
import $ from 'jquery';
<<<<<<< HEAD
import {
    BrowserRouter as Router,
    Route,
    Link
=======
import More from './More';
import {
  BrowserRouter as Router,
  Route,
  Link
>>>>>>> origin/master
} from 'react-router-dom'

class Serve extends Component{
		constructor(){
			super();
			this.state={
				gengduo:[],
				gengduotit:[]
			}
		  };
	   componentDidMount=function () {
	   		   		$.ajax({
				'url':'http://localhost:8100/cebest/gengduo',
				'type':'get',
				'success':function(opt){
					this.setState({gengduo:opt})
					console.log(opt)
				}.bind(this)
			})

           setTimeout(function () {
               $(".my-talk_window").show()
           },200)
         };
	  render(){
  	return(
  		<Router>
 <div className="serve"> 
 <div className="servecon clear">
 <div className="servetitle">
 <h2>品牌网站</h2>
 <p>Brand Website</p>
 <p className="servex"></p>
 <p>以营销为导向，让品牌网站更有意义。</p>
<ul className="servelist clear">
<li><img src="images/serv_con01_ico01.png" alt=""/>
<p>品牌网站</p>
</li>
<li><img src="images/serv_con01_ico02.png" alt=""/>
<p>品牌网站</p>
</li>
<li><img src="images/serv_con01_ico03.png" alt=""/>
<p>品牌网站</p>
</li>
<li><img src="images/serv_con01_ico04.png" alt=""/>
<p>品牌网站</p>
</li>
<li><img src="images/serv_con01_ico05.png" alt=""/>
<p>品牌网站</p>
</li>
</ul>
<div className="scrvebtn" id="servebtn"><p>+了解更多</p><p>+了解更多</p></div>
 </div>
 <img src="images/serv_con01_img.jpg" alt="" className="scrveconimg"/>
 </div>
 
     {/*service start*/}
                 <div className="my-more-services">
                    <h2>
                        <p>更多服务</p>
                        <span>More Services</span>
                    </h2>
                     <ul className="clear">
                     {this.state.gengduo.map(function(v,i){
  			return  <Link key={i}  to="/more">
  			  			<li>
                                <dl>
                                    <dt>
                                        <img src={v.img} alt=""/>
                                    </dt>
                                    <dd>
                                        <h3>{v.title}</h3>
                                        <h4></h4>
                                        <h5>
                                        {
                                        this.state.gengduo[i].sumary.split("?").map(function(con,j){
                                        	return <span key={j}>{con}</span>
                                        }) }
                                        </h5>
                                    </dd>
                                </dl>
                         </li>
  			</Link>
  		}.bind(this))}
                     </ul>
                 </div>
                 {/*service end*/}
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
 </Router>
)
  	}
}

export default Serve;
