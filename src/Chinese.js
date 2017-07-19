import React, { Component } from 'react';


class Chinese extends Component{
	   componentDidMount=function () {
  };
	  render(){
  	return(
<div className="chinese">
<div className="chinese-con1">
<h1>中企·云</h1>
<p className="chinese-x"></p>
<div className="chinese-con1-text">中企 · 云基于PaaS+SaaS服务模式，将门户云、业务云、电商云、营销云、管理云、设计云整合<br/>
为互联网智能运营服务和行业全线解决方案的云平台，以满足企业个性化、多样化的互联网转型需求，帮助企业全面实现<br/>企业数字化智能运营，打造智慧企业，持续为客户创造商业价值。</div>
<img src="images/cl_ba_text.png" alt=""/>
</div>
<div className="chinese-con2 clear">
<div className="chinese-con2-left">为什么选择中企·云？</div>
<div className="chinese-con2-right">
<p >简单 随需 开放</p>
<p className="chinese-con2-x" ></p>
<p className="chinese-con2-text">企业无需单独进行物理配置，操作简单，降低了使用成本。只需接入网络，便可获得互联网相关产品与服务，并随云端版本迭代及时使用最新功能，令信息管理更加安全高效。</p>
</div>
</div>
<div className="chinese-con3">
<h2>PaaS + SaaS开启企业的云时代</h2>
<p className="chinese-x black"></p>
<div className="chinese-con-box">
<div className="chinese-con-n">
<img src="images/cloud_a_ico01.png" alt=""/>
</div>
</div>
</div>
</div>
)
  	}
}

export default Chinese;
