/*
* @Author: lenovo
* @Date:   2017-11-08 23:24:21
* @Last Modified by:   lenovo
* @Last Modified time: 2017-11-21 18:39:17
*/

window.onload=function(){
	let ff=document.getElementsByClassName("bnb")[0]
	let ee=document.getElementsByClassName("shanjia")[0]
	let dd=document.getElementById("cv")
    let hg=document.getElementsByClassName("a56")
	let aa=document.getElementsByClassName("a57")[0]
	let bb=document.getElementsByClassName("wodet")[0]
	let cc=document.getElementsByClassName("wodet1")[0]
    let il=document.getElementsByClassName("poi")[0]
	console.log(aa,bb,cc,ff,ee,il)
	aa.onmousemove=function(){
		bb.style.display="block"
        
	}
	aa.onmouseout=function(){
		bb.style.display="none"
         
	}
	dd.onmousemove=function(){
		cc.style.display="block"
	}
	dd.onmouseout=function(){
		cc.style.display="none"
	}
	hg[6].onmousemove=function(){
		ee.style.display="block"
	}
	hg[6].onmouseout=function(){
		ee.style.display="none"
	}
    hg[4].onmousemove=function(){
        il.style.display="block"
        
    }
    hg[4].onmouseout=function(){
        il.style.display="none"
         
    }
//////////////////////////////
    let zitu=document.getElementsByClassName("baohan")
    let diji=document.getElementsByClassName("a91")
    console.log(zitu,diji)
    diji[0].onmouseover=function(){
        zitu[0].className="baohan mlo"
        zitu[1].className="baohan"
        diji[0].className="a91 bnv"
        diji[1].className="a91"
    }
   diji[1].onmouseover=function(){
        zitu[1].className="baohan mlo"
        zitu[0].className="baohan"
        
        diji[0].className="a91 "
        diji[1].className="a91 bnv"
    }
//////////////////////////////////////////////
	let gg=document.getElementsByClassName("a30")[0]
	let qq=gg.getElementsByClassName("a29")
	let kk=document.getElementsByClassName("kapian")
	console.log(gg,qq,kk)
	for(let i=0;i<qq.length;i++){
	qq[i].onmouseover=function(){
		kk[i].style.display="block"
	}
	qq[i].onmouseout=function(){
		kk[i].style.display="none"
	}	
	}
	
////////////////////////////////////	
  let uli=document.getElementsByClassName("a21")[0]
    let le=uli.getElementsByClassName("a22")
    let nm=document.getElementsByClassName("a32")[0]
    let nn=nm.getElementsByClassName("a33")
   

    console.log(uli,le)
   console.log(nn)
    let t;
    let num=0;
    t=setInterval(fn,2000)
    
    
    uli.onmouseover=function(){
        clearInterval(t)
    }
   uli.onmouseout=function(){
        t=setInterval(fn,2000)
    }
    

    function fn(){
        num++ 
        if(num==le.length){
        num=0;
        }
        for(let i=0;i<le.length;i++){
            le[i].className="a22"

            nn[i].style.background="";
        }
        le[num].className="a22 bne"
        nn[num].style.background="yellow"
    }
    
    for(let i=0;i<nn.length;i++){
        nn[i].onmouseover=function(){
            le[num].className="a22"
            le[i].className="a22 bne"
            nn[num].style.background="";
            nn[i].style.background="yellow";
            num=i;

        }
    }
//////////////////////////////////////////////////
let shu=document.querySelectorAll(".shucu")
let he=document.querySelectorAll(".hezi");
    let mo=document.querySelector(".lopp")
    let tu=document.querySelector(".maotu")
console.log(shu,he,mo,tu)
    for(let i=0;i<he.length;i++){
        he[i].onmousemove=function(){
           shu[i].style.opacity="1"
           shu[i].style.right="60px"
        }
        he[i].onmouseout=function(){
                shu[i].style.opacity="0"
                shu[i].style.right=""
            }
}
    mo.onmousemove=function () {
        tu.style.display="block"
    }
    mo.onmouseout=function () {
        tu.style.display="none"
    }
///////////////////////////////////////////
    function ll() {


        var nav=document.querySelectorAll(".a204 li");
        var floor=document.querySelectorAll(".boxx .a82");
        var hi=document.querySelector(".min");
        var hj=document.querySelector(".a204")
        var bu=document.querySelector(".anniu");
        var fg=["#ff0036","purple","red","pink","blue","seagreen","orange","greenyellow","yellow"];
        //////////设置一个存储器
        var current=1;
        ///////////开关
        // var up=false;
        // var down=true;
        console.log(nav,floor,bu,hj)
        bu.onclick=function () {
        animate(document.body,{scrollTop:0},1000);
        animate(document.documentElement,{scrollTop:0},1000)
    }
        window.onscroll=function () {
          var obj=document.body.scrollTop?document.body:document.documentElement;
          var sTop=obj.scrollTop;
          if(sTop>=floor[0].offsetTop-300){
               animate(hi,{top:0})
               animate(hj,{left:2})


            }
              else {
                  animate(hi,{top:-60})
                  animate(hj,{left:-100})

            }

          console.log(sTop)
            floor.forEach(function (f,index) {
                if(sTop>=f.offsetTop-500){
                    nav.forEach(function (n){
                        n.style.background=""
                    })
                    nav[index].style.background=fg[index]
                    current=index
                }
            })
          nav.forEach(function (n,index){
            n.onclick=function () {
                current=index;
                animate(document.body,{scrollTop:floor[index].offsetTop})
                animate(document.documentElement,{scrollTop:floor[index].offsetTop})
            }
            n.onmouseover=function () {
                this.style.background=fg[index]
            }
            n.onmouseout=function () {
                if(current!=index){
                    this.style.background=""
                }
            }
        })
        }
    }
    ll()

////////////////////////////////
    let wanzan=document.getElementsByClassName("wangzan")[0]
    let dvf=document.getElementsByClassName("a56")
    console.log(wanzan,dvf)
        dvf[7].onmouseover=function(){
    	wanzan.style.display="block"
   
    }
    dvf[7].onmouseout=function(){
    	wanzan.style.display="none"
    	
    }

}
