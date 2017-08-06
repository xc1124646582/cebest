import React, { Component } from 'react';
import $ from 'jquery';
import Ajax from './../Ajax';
import conf from './../config'


class Cases extends Component{
		constructor(){
			super();
			this.state={
				cases1:[],
				cases2:[]
			}
		  };
	   componentDidMount=function () {
	   		Ajax({
				'url':conf.url+'/cebest/cases1',
				'type':'get',
				'success':function(opt){
					// console.log(opt)
					var data=eval('('+opt+')')
					this.setState({
						cases1:data
					});
				}.bind(this)
			})
	   		Ajax({
				'url':conf.url+'/cebest/cases2',
				'type':'get',
				'success':function(opt){
					var data=eval('('+opt+')')
					this.setState({
						cases2:data
					});
				}.bind(this)
			})
		   setTimeout(function () {
			   $(".my-talk_window").show()
		   },200)
		   if(window.addEventListener){
			   document.addEventListener('scroll', this.casesScroll);
		   }else{
			   document.attachEvent('onscroll', this.casesScroll);
		   }
	   };
	casesScroll(){
		var tops=(document.body.scrollTop)||(document.documentElement.scrollTop);
		if(tops>=151&&tops<=1364){
			$($(".casescon1-n").get(8)).css("opacity","1");
			$($(".casescon1-n").get(9)).css("opacity","1");
			$($(".casescon1-n").get(10)).css("opacity","1");
			$($(".casescon1-n").get(11)).css("opacity","1");
		}
		if(tops>=500&&tops<=1349){
			$($(".casescon1-n").get(12)).css("opacity","1");
			$($(".casescon1-n").get(13)).css("opacity","1");
			$($(".casescon1-n").get(14)).css("opacity","1");
			$($(".casescon1-n").get(15)).css("opacity","1");
		}
		if(tops>=812&&tops<=1667){
			$($(".casescon1-n").get(16)).css("opacity","1");
			$($(".casescon1-n").get(17)).css("opacity","1");
			$($(".casescon1-n").get(18)).css("opacity","1");
			$($(".casescon1-n").get(19)).css("opacity","1");
		}
	}
	componentWillUnmount(){
		if(window.addEventListener){
			document.removeEventListener('scroll', this.casesScroll);
		}else{
			document.detachEvent('onscroll', this.casesScroll);
		}
	}
	  render(){
  	return(
  		<div className="cases clear">
  		<div className="casescon1 clear">
  		{this.state.cases1.map(function(v,i){
  			return <div key={i} className="casescon1-n">
				<img src={v.src} alt="" />
				<p>{v.con}</p>
			</div>
  		})}
  		</div>
  		<div className="casescon2">
  		<h2 className="casescon2-title">服务的客户</h2>
  		<p className="casescon2x"></p>
  		<p className="casescon2-title2">Service Customers</p>
  		<div className="casescon2-con clear">
  		 {this.state.cases2.map(function(v,i){
  			return   <div key={i}  className="casescon2-con-n">
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
