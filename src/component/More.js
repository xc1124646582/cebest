import React, { Component } from 'react';
import $ from 'jquery';

class More extends Component{
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
		  	<div className="my-more">
				{/*icd start*/}
				<div className="my-icd">
					<h2>域名 & IDC服务</h2>
					<h3></h3>
					<p>Domain & IDC Services</p>
				</div>
				{/*icd end*/}
				<div>

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

export default More;
