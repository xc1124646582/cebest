import React, { Component } from 'react';
import $ from 'jquery';

class Careers extends Component {
	constructor(){
			super();
			this.state={
				work:[],
				
			}
		  };
    componentDidMount = function () {
    	$.ajax({
				'url':'http://localhost:8100/cebest/careers',
				'type':'get',
				'success':function(opt){
					for(var i=0;i<opt.length;i++){
						if(opt[i].work!=null){
							this.state.work.push(opt[i].work)
						}
					}
					console.log(opt)
				}.bind(this)
			})
        $(".my-job-r ul li").click(function () {
            $(this).find(".my-detail").stop(true).fadeToggle().parent().find("img").toggleClass("rot")
        })
        $(".my-job-r ul li").children(".my-detail").click(function (ev) {
            var e=ev||window.event
            if(e.stopPropagation){
                //非ie
                e.stopPropagation()
            }else{
                e.cancelBubble=true
            }
        })
    };

    render() {
        return (
            <div className="my-careers">
                {/*work start*/}
                <div className="my-work">
                    <h1>工作在高呈</h1>
                    <img src="images/ly_img07.png" alt=""/>
                    <p>在中企高呈，你可以成为任何你想成为的人，你唯一要做的就是朝着目标前行。<br/>我们为你的发展提供服务与土壤。</p>
                    <a href="">
                        <span className="my-work-span-one">查看工作机会</span>
                        <span className="my-work-span-two">查看工作机会</span>
                    </a>
                </div>
                {/*work end*/}
                {/*hr start*/}
                <div className="my-hr">
                    <ul className="clear">
                        <li>
                            <img src="images/ly_icon35.png" alt=""/>
                            <h2>理想人才</h2>
                            <h3>Ideal Candidates</h3>
                            <img src="images/ly_img08.png" alt=""/>
                            <p>员工是我们最宝贵的资产，也是中企高呈持续取得成功的动力源泉。我们希望你拥有全局思维，拥抱大梦想，正直诚信，并且热衷于帮助企业创造互联网价值。</p>
                        </li>
                        <li>
                            <img src="images/ly_icon36.png" alt=""/>
                            <h2>职业发展</h2>
                            <h3>Career Development</h3>
                            <img src="images/ly_img08.png" alt=""/>
                            <p>我们既是创新者，也是领导者，团队成员之间相互支持，开展良性竞争，并彼此鼓励。我们将成为你最强大的后盾，为你提供所需的工具。</p>
                        </li>
                        <li>
                            <img src="images/ly_icon37.png" alt=""/>
                            <h2>员工待遇</h2>
                            <h3>Employee Benefits</h3>
                            <img src="images/ly_img08.png" alt=""/>
                            <p>我们将为你提供业内极具竞争力的薪酬待遇，让你在产生价值的同时收获价值，并为你提供舒适、愉悦、利于创造价值的软性环境。</p>
                        </li>
                    </ul>
                </div>
                {/*hr end*/}
                {/*why start*/}
                <div className="my-why">
                    <div className="my-why-mask">
                        <h2>为什么是高呈？</h2>
                        <img src="images/ly_img07.png" alt=""/>
                        <p>我们并不只是开发网站，我们还致力于企业的线上价值最大化<br/>中企高呈拥有5,000家各种规模的客户，几乎涵盖了你能想到的所有行业和品牌<br/>我们注重结果，渴望带给客户意想不到的惊喜</p>
                        <a href="">
                            <span className="my-why-span-one">了解我们</span>
                            <span className="my-why-span-two">了解我们</span>
                        </a>
                    </div>
                </div>
                {/*why end*/}
                {/*job start*/}
                <div className="my-job clear">
                    <div className="my-job-l left">
                        <div>
                            <h2>在愉悦的环境下工作</h2>
                            <img src="images/ly_img08.png" alt=""/>
                            <p>我们营造了一个鼓励自由表达、坦诚沟通、个性化和多元化的环境，你将在这里不断成长。加入高呈后，你将与其他富有创造力且拥有多年行业经验的员工一起团结协作，共同实现我们的愿景：共创联结商业时代。</p>
                        </div>
                    </div>
                    <div className="my-job-r left">
                        <div>
                            <ul>
                                <li>
                                    <h2><span>大客户经理</span>Account Manager <img src="images/ly_icon38.png" alt=""/></h2>
                                    <div className="my-detail">
                                        <h3>岗位职责：</h3>
                                        <div>
                                            <p>1、<span>负责中企高呈大客户的直销项目开拓，商务沟通，并根据战略发展目标，制订年度、季度销售方案，并实施；</span></p>
                                        </div>
                                        <div>
                                            <p>2、<span>负责知名企业的客户关系维护和跟进；</span></p>
                                        </div>
                                        <div>
                                            <p>3、<span>对客户提出的需求能快速寻找相应的解决方案或专业意见，并推动和落实方案的处理结果；</span></p>
                                        </div>
                                        <div>
                                            <p>4、<span>负责商务谈判、合同签订工作等商务工作；</span></p>
                                        </div>
                                        <div>
                                            <p>5、<span>协调内部团队如策划部、创意部、项目管理部、产品部等部门为客户提供策略及实施服务。</span></p>
                                        </div>
                                        <h3>任职资格：</h3>
                                        <div>
                                            <p>1、<span>本科及以上学历，有网站建设销售经验，有销售管理工作经历；</span></p>
                                        </div>
                                        <div>
                                            <p>2、<span>有大项目销售经验，政府网站建设销售经验、大型企业集团销售经验者优先；</span></p>
                                        </div>
                                        <div>
                                            <p>3、<span>熟悉互联网市场和企业商业模式概念，有企业信息化策划分析经验；</span></p>
                                        </div>
                                        <div>
                                            <p>4、<span>能熟练撰写起草各种项目方案策划书，具备优秀的文案编辑、润色、组织、整理和撰写的能力；</span></p>
                                        </div>
                                        <div>
                                            <p>5、<span>具有丰富的客户资源和客户关系，业绩优秀；曾完成年度百万以上销售额优先；</span></p>
                                        </div>
                                        <div>
                                            <p>6、<span>具备提案能力，有大型项目经验或知名品牌服务经验优先。</span></p>
                                        </div>
                                        <a href="">
                                            <span className="">我要应聘</span>
                                            <span>我要应聘</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*job end*/}
            </div>
        )
    }
}
export default Careers