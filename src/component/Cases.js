import React, { Component } from 'react';
import $ from 'jquery';


class Cases extends Component{
		constructor(){
			super();
			this.state={
				cases1:[],
				cases2:[]
			}
		  };
	   componentDidMount=function () {
	   		$.ajax({
				'url':'http://localhost:8100/cebest/cases1',
				'type':'get',
				'success':function(opt){
					this.setState({cases1:opt});
				}.bind(this)
			})
	   		$.ajax({
				'url':'http://localhost:8100/cebest/cases2',
				'type':'get',
				'success':function(opt){
					this.setState({cases2:opt});
					console.log(opt)
				}.bind(this)
			})
		 };
	  render(){
  	return(
  		<div className="cases clear">
  		<div className="casescon1 clear">
  		{this.state.cases1.map(function(v,i){
  			return <div key={i} className="casescon1-n"><img src={v.src} alt="" /></div>
  		})}
  		</div>
  		<div className="casescon2">
  		<h2 className="casescon2-title">服务的客户</h2>
  		<p className="casescon2x"></p>
  		<p className="casescon2-title2">Service Customers</p>
  		<div className="casescon2-con clear">
  		 {this.state.cases2.map(function(v,i){
  			return   		  		<div key={i}  className="casescon2-con-n">
  		<div className="casescon2-con-box">
  		<div className="casescon2-top">
  		<p>{v.title1}</p>
  		<p>{v.title2}</p>
  		</div>
  		<div className="casescon2-bottom"><img src={v.img}  alt=""/></div>
  		</div>
  		</div>
  		})}
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
