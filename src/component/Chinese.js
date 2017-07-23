import React, { Component } from 'react';
import $ from 'jquery';

class Chinese extends Component{
	   componentDidMount=function () {

		   

	   };
	  render(){
  	return(
<div className="chinese">
<div className="chinese-con1">
<h1>中企·云</h1>
<p className="chinese-x"></p>
<div className="chinese-con1-text" id="c1text">中企 · 云基于PaaS+SaaS服务模式，将门户云、业务云、电商云、营销云、管理云、设计云整合<br/>
为互联网智能运营服务和行业全线解决方案的云平台，以满足企业个性化、多样化的互联网转型需求，帮助企业全面实现<br/>企业数字化智能运营，打造智慧企业，持续为客户创造商业价值。</div>
<img src="images/cl_ba_text.png" alt="" id="c1img"/>
</div>
<div className="chinese-con2 clear">
<div className="chinese-con2-left">为什么选择中企·云？</div>
<div className="chinese-con2-right" id="cn2r">
<p >简单 随需 开放</p>
<p className="chinese-con2-x" ></p>
<p className="chinese-con2-text">企业无需单独进行物理配置，操作简单，降低了使用成本。只需接入网络，便可获得互联网相关产品与服务，并随云端版本迭代及时使用最新功能，令信息管理更加安全高效。</p>
</div>
</div>

{/*con3 start */}
<div className="chinese-con3">

{/*con3 head */}
<h2>PaaS + SaaS开启企业的云时代</h2>
<p className="chinese-x black"></p>
<div className="chinese-con-box clear">

{/*chinese-con-n */}
<div className="chinese-con-n">
<img src="images/cloud_a_ico01.png" alt=""/>
<div><h4>门户云</h4>
<p>PORTAL CLOUD</p></div>
<ul className="chinese-con-n-ul clear">
<li>企业门户</li>
<li>企业门户</li>
<li>企业门户</li>
<li>企业门户</li>
</ul>
</div>
{/*chinese-con-n */}
<div className="chinese-con-n">
<img src="images/cloud_a_ico01.png" alt=""/>
<div><h4>门户云</h4>
<p>PORTAL CLOUD</p></div>
<ul className="chinese-con-n-ul clear">
<li>企业门户</li>
<li>企业门户</li>
<li>企业门户</li>
<li>企业门户</li>
</ul>
</div>
{/*chinese-con-n */}
<div className="chinese-con-n">
<img src="images/cloud_a_ico01.png" alt=""/>
<div><h4>门户云</h4>
<p>PORTAL CLOUD</p></div>
<ul className="chinese-con-n-ul clear">
<li>企业门户</li>
<li>企业门户</li>
<li>企业门户</li>
<li>企业门户</li>
</ul>
</div>
{/*chinese-con-n */}
<div className="chinese-con-n">
<img src="images/cloud_a_ico01.png" alt=""/>
<div><h4>门户云</h4>
<p>PORTAL CLOUD</p></div>
<ul className="chinese-con-n-ul clear">
<li>企业门户</li>
<li>企业门户</li>
<li>企业门户</li>
<li>{this.props.prp}</li>
</ul>
</div>
</div>
<div className="scrvebtn margin" id="servebtn"><p>+了解更多</p><p>+了解更多</p></div>
</div>
{/*con3 end */}

<div className="chinese-con4 clear">
<div className="chinese-con4-left">
<img src="images/cl_a_img01.jpg" alt=""/>
<span><img src="images/cl_a_img01_01.jpg" alt=""/></span>
<span><img src="images/cl_a_img01_02.jpg" alt=""/></span>
</div>
<div className="chinese-con4-right">
<p>设计开放云</p>
<p>独有的设计云，让更多智慧参与创意 </p>
<p className="chinese-con4-x"></p>
<p>功能丰富的专业设计平台和云端共享的特效组件，让每一位创意人员都可以提供高端、高品质的设计服务。</p>
</div>
</div>


<div className="chinese-con4 chinese-con5 clear">
<div className="chinese-con4-right chinese-con5-left">
<p>设计开放云</p>
<p>独有的设计云，让更多智慧参与创意 </p>
<p className="chinese-con4-x chinese-con5-x"></p>
<p>功能丰富的专业设计平台和云端共享的特效组件，让每一位创意人员都可以提供高端、高品质的设计服务。</p>
</div>
<div className="chinese-con4-left">
<img src="images/cl_a_img02.jpg" alt=""/>
</div>
</div>

<div className="chinese-con6" id="chinesecon6">
<div className="chinese-con6-box clear">
<dl className="chinese-con6-n">
<dt><span>8</span> 年</dt>
<dd>迭代打磨而成的产品</dd>
</dl>

<dl className="chinese-con6-n">
<dt><span>100</span> +</dt>
<dd>迭代打磨而成的产品</dd>
</dl>

<dl className="chinese-con6-n">
<dt><span>150</span> +</dt>
<dd>迭代打磨而成的产品</dd>
</dl>
</div>
<div className="scrvebtn margin " id="servebtn"><p>+查看案例</p><p>+了解更多</p></div>
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

export default Chinese;
