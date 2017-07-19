import React, { Component } from 'react';
import $ from 'jquery';


class Cases extends Component{
	   componentDidMount=function () {
  };
	  render(){
  	return(
  		<div className="cases">
  		<div className="casescon1">
  		<div className="casescon1-n"><img src="images/case01.jpg" alt=""/></div>
  		</div>
  		<div className="casescon2">
  		<h2 className="casescon2-title">服务的客户</h2>
  		<p className="casescon2x"></p>
  		<p className="casescon2-title2">Service Customers</p>
  		<div className="casescon2-con">
  		  		<div className="casescon2-con-n">
  		<div className="casescon2-con-box">
  		<div className="casescon2-top">
  		<p>亮牌中国</p>
  		<p>产品互动体验站</p>
  		</div>
  		<div className="casescon2-bottom"><img src="images/logo01.png"  alt=""/></div>
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

export default Cases;
