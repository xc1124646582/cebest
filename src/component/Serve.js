import React, { Component } from 'react';
import $ from 'jquery';
import conf from './../config'
import Know from './Know';
import More from './More';
import './../style/know.css';
import './../style/know_phone.css';
import './../style/more.css';
import './../style/more_phone.css';

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
            gengduotit:[],
            know_one:[],
            know_two:[],
            know_three:[],
            know_four:[]
        }
    };
    componentDidMount=function () {
        $.ajax({
            'url':conf.url+'/cebest/gengduo',
            'type':'get',
            'success':function(opt){
                // console.log(opt);
                this.setState({
                    gengduo:opt
                });
                $(".my-more-services ul a").click(function () {
                    (document.body.scrollTop=0) || (document.documentElement.scrollTop=0)
                })
            }.bind(this)
        });
        $.ajax({
            // 'url':'http://127.0.0.1:8100/cebest/know',
            'url':conf.url+'/cebest/know',
            'type':'get',
            'success':function(opt) {
                // console.log(opt);
                for (var i in opt) {
                    if (opt[i].con=='1') {
                        this.state.know_one.push(opt[i])
                    }else if (opt[i].con=='2'){
                        this.state.know_two.push(opt[i])
                    }else if (opt[i].con=='3'){
                        this.state.know_three.push(opt[i])
                    }else if (opt[i].con=='4'){
                        this.state.know_four.push(opt[i])
                    }
                };
                this.setState({
                    know_one:this.state.know_one,
                    know_two:this.state.know_two,
                    know_three:this.state.know_three,
                    know_four:this.state.know_four
                });
            }.bind(this)
        });
        $(".scrvebtn").click(function () {
            (document.body.scrollTop=0) || (document.documentElement.scrollTop=0)
        });
        setTimeout(function () {
            $(".my-talk_window").show()
        },200)
    };
    move(ev) {
        var e=ev||window.event;
        var x=e.clientX/window.innerWidth;
        var y=e.clientY/window.innerWidth;
        $(".my-img-d1").css({
            "margin-left":(x*40)+"px",
            "margin-top":(y*40)+"px"
        })
        $(".my-img-d2").css({
            "margin-left":-(x*50)+"px",
            "margin-top":(y*50)+"px"
        })
    };
    render(){
        return(
            <Router>
            <div>
                <Route path="/know" component={Know}/>
                <Route path="/more" component={More}/>
                
                <Route exact path="/" render={() => (
                    <div className="serve">
                        {/*Brand Website start*/}
                        <div className="servecon clear">
                            <img src="images/serv_con01_img.jpg" alt="" className="scrveconimg"/>
                            <div className="servetitle">
                                <h2>品牌网站</h2>
                                <p>Brand Website</p>
                                <p className="servex"></p>
                                <p>以营销为导向，让品牌网站更有意义。</p>
                                <ul className="servelist clear">
                                    {
                                        this.state.know_one.map(function(v,i) {
                                            return <li key={i}>
                                                 <img src={v.img} alt=""/>
                                                 <p>{v.tit}</p>
                                            </li>
                                        })
                                    }
                                </ul>
                                <Link to="/know?1" className="scrvebtn" id="servebtn"><p>+了解更多</p><p>+了解更多</p></Link>
                            </div>
                        </div>
                    {/*Brand Website end*/}

                    {/*E-Commerce start*/}
                    <div className="my-servecon-two clear" onMouseMove={this.move}>
                        <div className="my-scrvecon-l">
                            <img className="my-img-one" src="images/serv_con02_img01.png" alt=""/>
                            <img className="my-img-d1" src="images/serv_con02_img02.png" alt=""/>
                            <img className="my-img-d2" src="images/serv_con02_img03.png" alt=""/>
                            <img className="my-img-two scrvecon2img" src="images/serv_con02_img04.png" alt=""/>
                        </div>
                        <div className="my-scrvecon-r">
                            <h2>电商平台</h2>
                            <h3>E-Commerce</h3>
                            <h4></h4>
                            <h5>以用户为中心，数据分析为基础的电商平台，让您的客户在体验时更满意。</h5>
                            <ul className="clear">
                                {
                                    this.state.know_two.map(function(v,i) {
                                        return <li key={i}>
                                             <img src={v.img} alt=""/>
                                             <p>{v.tit}</p>
                                        </li>
                                    })
                                }
                            </ul>
                            <Link to="/know?2" className="scrvebtn" id="servebtn2"><p>+了解更多</p><p>+了解更多</p></Link>
                        </div>
                    </div>
                    {/*E-Commerce end*/}


                    {/*Event Marketing start*/}
                    <div className="my-servecon-three clear">
                        <div className="my-servecon-r">
                            <img src="images/serv_con03_img.png" alt=""/>
                        </div>
                        <div className="my-servecon-l">
                            <h2>活动营销</h2>
                            <h3>Event Marketing</h3>
                            <h4></h4>
                            <h5>符合客户整体营销策略，开放式、联结型的线上营销落地介质的规划与建设。</h5>
                            <ul className="clear">
                                {
                                    this.state.know_three.map(function(v,i) {
                                        return <li key={i}>
                                             <img src={v.img} alt=""/>
                                             <p>{v.tit}</p>
                                        </li>
                                    })
                                }
                            </ul>
                            <Link to="/know?3" className="scrvebtn" id="servebtn2"><p>+了解更多</p><p>+了解更多</p></Link>
                        </div>
                    </div>
                    {/*Event Marketing end*/}


                    {/*Business System start*/}
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
                                {
                                    this.state.know_four.map(function(v,i) {
                                        return <li key={i}>
                                             <img src={v.img} alt=""/>
                                             <p>{v.tit}</p>
                                        </li>
                                    })
                                }
                            </ul>
                            <Link to="/know?4" className="scrvebtn" id="servebtn2"><p>+了解更多</p><p>+了解更多</p></Link>
                        </div>
                    </div>
                    {/*Business System end*/}
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
                                            <h3>{v.title1}  <span className="my-g">/</span>  <span>{v.title2}</span></h3>
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
