import React, { Component } from 'react';
import $ from 'jquery';
import More from './More';
import './../style/more.css';

import {
    BrowserRouter as Router,
    Route,
    Link
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
            <div>
                <Route path="/more" component={More}/>
                
                <Route exact path="/" render={() => (
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
                                <a href="" className="scrvebtn" id="servebtn"><p>+了解更多</p><p>+了解更多</p></a>
                        </div>
                        <img src="images/serv_con01_img.jpg" alt="" className="scrveconimg"/>
                    </div>

                    <div className="my-servecon-two clear">
                        <div className="my-scrvecon-l">
                            <img className="my-img-one" src="images/serv_con02_img01.png" alt=""/>
                            <img className="my-img-two scrvecon2img" src="images/serv_con02_img04.png" alt=""/>
                        </div>
                        <div className="my-scrvecon-r">
                            <h2>电商平台</h2>
                            <h3>E-Commerce</h3>
                            <h4></h4>
                            <h5>以用户为中心，数据分析为基础的电商平台，让您的客户在体验时更满意。</h5>
                            <ul className="clear">
                                <li>
                                <img src="images/serv_con02_ico01.png" alt=""/>
                                <p>B2B平台</p>
                                </li>
                                <li>
                                <img src="images/serv_con02_ico02.png" alt=""/>
                                <p>B2C商城</p>
                                </li>
                                <li>
                                <img src="images/serv_con02_ico03.png" alt=""/>
                                <p>企业供销平台</p>
                                </li>
                                <li>
                                <img src="images/serv_con02_ico04.png" alt=""/>
                                <p>电商整体解决方案</p>
                                </li>
                                <li>
                                <img src="images/serv_con02_ico05.png" alt=""/>
                                <p>移动应用</p>
                                </li>
                            </ul>
                            <a href="" className="scrvebtn" id="servebtn2"><p>+了解更多</p><p>+了解更多</p></a>
                        </div>
                    </div>
                    <div className="my-servecon-three clear">
                        <div className="my-servecon-l">
                            <h2>活动营销</h2>
                            <h3>Event Marketing</h3>
                            <h4></h4>
                            <h5>符合客户整体营销策略，开放式、联结型的线上营销落地介质的规划与建设。</h5>
                            <ul className="clear">
                                <li>
                                <img src="images/serv_con03_ico01.png" alt=""/>
                                <p>活动Minisite</p>
                                </li>
                                <li>
                                <img src="images/serv_con03_ico02.png" alt=""/>
                                <p>H5制作</p>
                                </li>
                                <li>
                                <img src="images/serv_con03_ico03.png" alt=""/>
                                <p>会员营销</p>
                                </li>
                                <li>
                                <img src="images/serv_con03_ico04.png" alt=""/>
                                <p>互动传播</p>
                                </li>
                            </ul>
                            <a href="" className="scrvebtn" id="servebtn2"><p>+了解更多</p><p>+了解更多</p></a>
                        </div>
                        <div className="my-servecon-r">
                            <img src="images/serv_con03_img.png" alt=""/>
                        </div>
                    </div>
                    <div className="my-serve-p-four clear">
                        <div className="my-servecon-l">
                            <img className="my-img-one" src="images/serv_con04_img1.png" alt=""/>
                            <img className="my-img-two scrvecon4img" src="images/serv_con04_img2.png" alt=""/>
                        </div>
                        <div className="my-servecon-r">
                            <h2>业务系统</h2>
                            <h3>Business System</h3>
                            <h4></h4>
                            <h5>便捷沟通、高效协作，通过互联网力量提升企业运营效率。</h5>
                            <ul className="clear">
                                <li>
                                <img src="images/serv_con04_ico01.png" alt=""/>
                                <p>企业协同</p>
                                </li>
                                <li>
                                <img src="images/serv_con04_ico02.png" alt=""/>
                                <p>APP设计与开发</p>
                                </li>
                                <li>
                                <img src="images/serv_con04_ico03.png" alt=""/>
                                <p>技术运维</p>
                                </li>
                            </ul>
                            <a href="" className="scrvebtn" id="servebtn2"><p>+了解更多</p><p>+了解更多</p></a>
                        </div>
                    </div>
                    {/*service start*/}
                     <div className="my-more-services">
                        <h2>
                            <p>更多服务</p>
                            <span>More Services</span>
                        </h2>
                        <ul className="clear">
                        {this.state.gengduo.map(function(v,i){
                        return  <Link key={i}  to={`/more?${v.id}`}>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src={v.img} alt=""/>
                                        </dt>
                                        <dd>
                                            <h3>{v.title1}  /  {v.title2}</h3>
                                            <h4></h4>
                                            <h5>
                                            {
                                            this.state.gengduo[i].sumary.split("?").map(function(con,j){
                                                return <span key={j}>{con}</span>
                                            })
                                            }
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
                 )}/>
            </div>
            </Router>
        )
  	}
}

export default Serve;
