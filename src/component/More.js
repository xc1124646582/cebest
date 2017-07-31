import React, { Component } from 'react';
import $ from 'jquery';

class More extends Component{
	constructor(){
		super();
		this.state={
			gengduo:{},
			img:[]
		}
	};
	componentDidMount=function () {
		(document.body.scrollTop=0) || (document.documentElement.scrollTop=0)
		var href=window.location.href.split("?")[1]
        $.ajax({
            'url':'http://192.168.43.25:8100/cebest/gengduo',
            'type':'get',
            'success':function(opt){
                this.setState({
					gengduo:opt[href-1]
				})
                console.log(opt)
                $(".my-icd h2").text(this.state.gengduo.title1)
                $(".my-icd p").text(this.state.gengduo.title2)
                $(".my-icd div").html(this.state.gengduo.content)
            }.bind(this)
        })
        $.ajax({
            'url':'http://192.168.43.25:8100/cebest/more',
            'type':'get',
            'success':function(opt){
                this.setState({img:opt})
                console.log(opt)
            }.bind(this)
        })
		setTimeout(function () {
			$(".my-talk_window").show()
		},200)
	};
	render(){
  		return(
		  	<div className="my-more">
				{/*icd start*/}
				<div className="my-icd">
					<h2></h2>
					<h3></h3>
					<p id="mtext"></p>
					<div>

					</div>
				</div>
				{/*icd end*/}
				<div className="my-our-customers">
					<div className="my-more-box">
						<h2>服务的客户</h2>
						<h3></h3>
						<p>Our Customers</p>
						<ul className="clear">
						{this.state.img.map(function(v,i){
							return <li key={i}><img src={v.img} alt=""/></li>
						})}
							
						</ul>
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
								<a href="http://localhost:3000/contact">
									<p className="my-serve-p-one">+联系我们</p>
									<p className="my-serve-p-two">+联系我们</p>
									</a>
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
