import React, { Component } from 'react';
import $ from 'jquery';


class Serve extends Component{
	   componentDidMount=function () {

           setTimeout(function () {
               $(".my-talk_window").show()
           },200)
         };
	  render(){
  	return(
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
                         <li>
                             <a href="">
                                <dl>
                                    <dt>
                                        <img src="images/ser_ico01.png" alt=""/>
                                    </dt>
                                    <dd>
                                        <h3>域名 & IDC服务 / Domain & IDC Service</h3>
                                        <h4></h4>
                                        <h5>
                                            <span>域名注册</span>
                                            <span>域名交易</span>
                                            <span>云服务器</span><br/>
                                            <span>云虚拟主机</span>
                                            <span>租用托管</span>
                                        </h5>
                                    </dd>
                                </dl>
                             </a>
                         </li>
                         <li>
                             <a href="">
                                 <dl>
                                     <dt>
                                         <img src="images/ser_ico02.png" alt=""/>
                                     </dt>
                                     <dd>
                                         <h3>增值服务 / Value-added Services</h3>
                                         <h4></h4>
                                         <h5>
                                             <span>可信网站</span>
                                             <span>短信服务</span>
                                             <span>400电话</span>
                                             <span>在线客服</span>
                                         </h5>
                                     </dd>
                                 </dl>
                             </a>
                         </li>
                         <li>
                             <a href="">
                                 <dl>
                                     <dt>
                                         <img src="images/ser_ico03.png" alt=""/>
                                     </dt>
                                     <dd>
                                         <h3>企业通信 / Enterprise Communication</h3>
                                         <h4></h4>
                                         <h5>
                                             <span>企业邮箱</span>
                                             <span>企业云盘</span>
                                             <span>即时通讯</span>
                                         </h5>
                                     </dd>
                                 </dl>
                             </a>
                         </li>
                         <li>
                             <a href="">
                                 <dl>
                                     <dt>
                                         <img src="images/ser_ico04.png" alt=""/>
                                     </dt>
                                     <dd>
                                         <h3>网络整合营销 / Network Integration Marketing</h3>
                                         <h4></h4>
                                         <h5>
                                             <span>DSP广告接入</span>
                                             <span>海外营销</span>
                                             <span>SCRM</span>
                                         </h5>
                                     </dd>
                                 </dl>
                             </a>
                         </li>
                         <li>
                             <a href="">
                                 <dl>
                                     <dt>
                                         <img src="images/ser_ico05.png" alt=""/>
                                     </dt>
                                     <dd>
                                         <h3>企业效率工具 / Enterprise Efficiency Tools</h3>
                                         <h4></h4>
                                         <h5>
                                             <span>销售管理工具</span>
                                         </h5>
                                     </dd>
                                 </dl>
                             </a>
                         </li>
                         <li>
                             <a href="">
                                 <dl>
                                     <dt>
                                         <img src="images/ser_ico06.png" alt=""/>
                                     </dt>
                                     <dd>
                                         <h3>线上多媒体 / Online Multimedia</h3>
                                         <h4></h4>
                                         <h5>
                                             <span>企业视频</span>
                                             <span>企业图库</span>
                                         </h5>
                                     </dd>
                                 </dl>
                             </a>
                         </li>
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
)
  	}
}

export default Serve;
