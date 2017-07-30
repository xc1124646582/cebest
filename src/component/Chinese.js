import React, { Component } from 'react';
import $ from 'jquery';

class Chinese extends Component{
    constructor(){
        super();
        this.state={
            chinese1:[],
            chinese2:"",
            chinese3:"",
            chinese4:"",
            chinese5:"",
            chinesebox:[]
        }
    };
	   componentDidMount=function () {
	           $.ajax({
            'url':'http://192.168.43.25:8100/cebest/chinese1',
            'type':'get',
            'success':function(opt){
                this.setState({
                chinese1:opt[0],
                chinese2:opt[1],
                chinese3:opt[2],
                chinese4:opt[3],
                chinese5:opt[4]
                })
                document.getElementById("c1text").innerHTML=this.state.chinese1.con
                
            }.bind(this)
        })
        
        
    $.ajax({
            'url':'http://192.168.43.25:8100/cebest/chinese2',
            'type':'get',
            'success':function(opt){
                this.setState({
                chinesebox:opt
                })
                console.log(this.state.chinesebox)
            }.bind(this)
        })
		   

	   };
	  render(){
  	return(
<div className="chinese">
<div className="chinese-con1">
<h1>{this.state.chinese1.title}</h1>
<p className="chinese-x"></p>
<div className="chinese-con1-text" id="c1text"></div>
<img src="images/cl_ba_text.png" alt="" id="c1img"/>
</div>
<div className="chinese-con2 clear">
<div className="chinese-con2-left">{this.state.chinese2.fottext}</div>
<div className="chinese-con2-right" id="cn2r">
<p >{this.state.chinese2.title}</p>
<p className="chinese-con2-x" ></p>
<p className="chinese-con2-text">{this.state.chinese2.con}</p>
</div>
</div>

{/*con3 start */}
<div className="chinese-con3">

{/*con3 head */}
<h2>{this.state.chinese5.title}</h2>
<p className="chinese-x black"></p>
<div className="chinese-con-box clear">

{/*chinese-con-n */}

                        {this.state.chinesebox.map(function(v,i){
                        return  <div key={i} className="chinese-con-n">
                            <img src={v.img} alt=""/>
                            <div><h4>{v.titl1}</h4>
                            <p>{v.titl2}</p></div>
                            <ul className="chinese-con-n-ul clear">
                                {
                                this.state.chinesebox[i].cons.split("?").map(function(con,j){
                                    return <li key={j}>{con}</li>
                                })
                                }
                            </ul>
                            </div>
                        }.bind(this))}



</div>
<div className="scrvebtn margin" id="servebtn"><p>+了解更多</p><p>+了解更多</p></div>
</div>
{/*con3 end */}

<div className="chinese-con4 clear">
<div className="chinese-con4-left">
<img src="images/cl_a_img01.jpg" id="chinimgs" alt=""/>
<span><img src="images/cl_a_img01_01.jpg" alt=""/></span>
<span><img src="images/cl_a_img01_02.jpg" alt=""/></span>
</div>
<div className="chinese-con4-right">
<p>{this.state.chinese3.title}</p>
<p>{this.state.chinese3.fottext} </p>
<p className="chinese-con4-x"></p>
<p>{this.state.chinese3.con}</p>
</div>
</div>


<div className="chinese-con4 chinese-con5 clear">
    <div className="chinese-con4-left">
        <img src="images/cl_a_img02.jpg"  alt=""/>
    </div>
    <div className="chinese-con4-right chinese-con5-left">
        <p>{this.state.chinese4.title}</p>
        <p>{this.state.chinese4.con}</p>
        <p className="chinese-con4-x chinese-con5-x"></p>
        <p>{this.state.chinese4.fottext}</p>
    </div>
</div>

<div className="chinese-con6" id="chinesecon6">
<div className="chinese-con6-box clear">
<dl className="chinese-con6-n">
<dt><span className="chinnums">8</span> 年</dt>
<dd>迭代打磨而成的产品</dd>
</dl>

<dl className="chinese-con6-n">
<dt><span className="chinnums">100</span> +</dt>
<dd>迭代打磨而成的产品</dd>
</dl>

<dl className="chinese-con6-n">
<dt><span className="chinnums">150</span> +</dt>
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
