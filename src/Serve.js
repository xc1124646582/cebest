import React, { Component } from 'react';


class Serve extends Component{
	   componentDidMount=function () {
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
 </div>
)
  	}
}

export default Serve;
