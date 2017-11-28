/*
* @Author: lenovo
* @Date:   2017-11-07 16:41:28
* @Last Modified by:   lenovo
* @Last Modified time: 2017-11-20 21:29:00
*/

window.onload=function(){
	let uli=document.getElementsByClassName("a30")[0]
	let lid=uli.getElementsByClassName("a29")
	let itm=document.getElementsByClassName("itm")
	let uli1=document.getElementsByClassName("as")[0]
	let lid1=uli1.getElementsByClassName("a4")
    let pu=document.getElementsByClassName("pudian")[0]
	let xunxian=document.getElementsByClassName("xunxian")
    console.log(uli,lid,itm,pu,lid1)
	for(let i=0;i<lid.length;i++){
	lid[i].onmouseover=function(){
		itm[i].style.display="block"
	}
	lid[i].onmouseout=function(){
		itm[i].style.display="none"
	}}
	for(let i=0;i<lid1.length;i++){
	lid1[i].onmouseover=function(){
		xunxian[i].style.opacity="1"
		// xunxian[i].style.height="200px"
        pu.style.opacity="1"
        pu.style.height="200px"
	}
	lid1[i].onmouseout=function(){
		xunxian[i].style.opacity="0"
		// xunxian[i].style.height="0"
         pu.style.opacity="0"
        pu.style.height="0"
	}}

    let che=document.getElementsByClassName("che")[0]
    let zoche=document.getElementsByClassName("zoche")[0]

	che.onmousemove=function(){
		zoche.style.opacity="1"
        zoche.style.height="100px"
		zoche.style.zIndex="2"	}
	che.onmouseout=function(){
		zoche.style.opacity="0"
		zoche.style.height="0px"
		zoche.style.zIndex="1"
	}
	// for(i=0;i<lid.length;i++){
	// 	lid[i].in=i;
	// 	lid[i].onmouseover=function(){
	// 		itm[this.in].style.display="block"
	// 	}
	// 	lid[i].onmouseout=function(){
	// 		itm[this.in].style.display="none"
	// 	}

	// }
    // ////////////////////
     let aa=document.getElementsByClassName("a33")[0]
    let cc=aa.getElementsByClassName("a34")
    let yiru=document.getElementsByClassName("yiru")
    console.log(cc,yiru)
    for(let i=0;i<cc.length;i++){
    cc[i].onmouseover=function(){
        for(let j=0;j<cc.length;j++){
          yiru[j].className="yiru"
           cc[j].className="a34"
        }
        yiru[i].className="yiru block"
         cc[i].className="a34 hbn"

        }}
    let zx=document.getElementsByClassName("a53")[0]
    let zc=zx.getElementsByClassName("a34")
    let zxc=document.getElementsByClassName("yi")
    console.log(zc,zxc)
    for(let i=0;i<zc.length;i++){
    zc[i].onmouseover=function(){
        for(let j=0;j<zc.length;j++){
          zxc[j].style.display="none"
           zc[j].className="a34"
        }
        zxc[i].style.display="block"
         zc[i].className="a34 hbn"

        }}

    let dbn=document.getElementsByClassName("a55")[0]
    let db=dbn.getElementsByClassName("a34")
    let dm=document.getElementsByClassName("yy")
    console.log(dbn,dm)
    for(let i=0;i<db.length;i++){
    db[i].onmouseover=function(){
        for(let j=0;j<db.length;j++){
          dm[j].style.display="none"
           db[j].className="a34"
        }
        dm[i].style.display="block"
         db[i].className="a34 hbn"

        }}
    let dz=document.getElementsByClassName("a56")[0]
    let dza=dz.getElementsByClassName("a34")
    let dzz=document.getElementsByClassName("yz")
    console.log(dza,dzz)
    for(let i=0;i<dza.length;i++){
    dza[i].onmouseover=function(){
        for(let j=0;j<dza.length;j++){
          dzz[j].style.display="none"
           dza[j].className="a34"
        }
        dzz[i].style.display="block"
         dza[i].className="a34 hbn"

        }}
    let qwe=document.getElementsByClassName("a57")[0]
    let zs=qwe.getElementsByClassName("a34")
    let zxx=document.getElementsByClassName("yn")
    console.log(zs,zxx)
    for(let i=0;i<zs.length;i++){
    zs[i].onmouseover=function(){
        for(let j=0;j<zs.length;j++){
          zxx[j].style.display="none"
           zs[j].className="a34"
        }
        zxx[i].style.display="block"
         zs[i].className="a34 hbn"

        }}











    //////////////////////////////
	let ul=document.getElementsByClassName("a21")[0]
    let li=ul.getElementsByClassName("a22")
    let ee=document.getElementsByClassName("a23")[0]
    let ww=ee.getElementsByClassName("a24")
    let left=document.getElementsByClassName("banner-left")[0]

    let right=document.getElementsByClassName("banner-right")[0]
    console.log(left,right)
    console.log(ul,li)
    console.log(ww)
    let t;
    let num=0;
    // let flag=true;
    t=setInterval(fnn,2000)


    ul.onmousemove=function(){
        clearInterval(t)
    }
   ul.onmouseout=function(){
        t=setInterval(fnn,2000)
    }

   right.onclick=fnn;
    function fnn(){
        num++
        if(num==li.length){
        num=0;
        }
        for(let i=0;i<li.length;i++){
            li[i].className="a22"

            ww[i].style.background="";
        }
        li[num].className="a22 bv"
        ww[num].style.background="white"
    }
    left.onclick=fnn1;
    function fnn1(){
        num--;
        if(num==-1){
            num=li.length-1
        }
        for(i=0;i<li.length;i++){
            li[i].className="a22"

            ww[i].style.background=""
        }
        li[num].className="a22 bv"
        ww[num].style.background="white"
    }
    for(let i=0;i<li.length;i++){
        ww[i].onclick=function(){
            li[num].className="a22"
            li[i].className="a22 bv"
            ww[num].style.background="";
            ww[i].style.background="white";
            num=i;

        }
    }

    /////////////////////////////////////////////////
    let butt=document.getElementsByTagName("button")
    let bj=butt[1]
    let bl=butt[0]
    let ic=bj.getElementsByClassName("iconfont")[0]
    let ib=bl.getElementsByClassName("iconfont")[0]
    let op=document.getElementsByClassName("box")[0]
    let count=op.childElementCount
    let child=op.children[0].offsetWidth+parseInt(getComputedStyle(op.children[0],null).marginRight)
    console.log(butt,bj,bl,op,count,child,ic,ib)
    op.style.width=`${count*child}px`
    let nun=0;
    bj.onclick=function(){

        if(nun==1){
            bl.className="di"
            // ib.style.color="#ff6700";
            bj.className=""
            return
        }
        nun++;
        op.style.transform=`translateX(${-1240*nun}px)`

    }
    bl.onclick=function(){

        if(nun==0){
            bj.className="di"
             // ic.style.color="#ff6700"
            bl.className=""
            return;
        }
        nun--;
        op.style.transform=`translateX(${-1240*nun}px)`

    }

/////////////////////////////////////////////////////
function xia(n){
        let lk=document.getElementsByClassName("a88");
        let ln=lk[n].getElementsByClassName("feng");
        let widths=lk[n].offsetWidth;
        

        let ss=document.getElementsByClassName("a99")[n];
        let dd=document.getElementsByClassName("a100")[n];
        
        let ab=document.getElementsByClassName("a91");
        let as=ab[n].getElementsByClassName("a98");

        let flag=true;
        let now=next=0;
        function fnn(){
            next++;
            if(next==ln.length){
                next=0;
            }
            ln[next].style.left=`${widths}px`;
            animate(ln[now],{left:-widths});
            animate(ln[next],{left:0}, function(){
            for(let i=0;i<as.length;i++){
                as[i].className="a98"
            }
            as[now].className="a98 dsaa";

            flag=true;
        });

            now=next;

        }
        function fnn1(){
            next--;
            if(next==-1){
                next=ln.length-1;
            }
            ln[next].style.left=`-${widths}px`;
            animate(ln[now],{left:widths});
            animate(ln[next],{left:0}, function (){
            for(let i=0;i<as.length;i++){
                as[i].className="a98"
            }
            as[now].className="a98 dsaa";

            flag=true;
        });

            now=next;

        }
        dd.onclick=function(){
            if(flag){
                fnn();
                flag=false;
            }

        }
        ss.onclick=function(){
            if(flag){
                fnn1();
                flag=false;
            }

        }

        for(let i=0;i<as.length;i++){
            as[i].onclick=function(){
                if(i==now){return}
                else if(i<now){
                    animate(ln[now],{left:widths});
                    animate(ln[i],{left:0});
                    for(let j=0;j<as.length;j++){
                         as[j].className="a98";
                    }
                    as[i].className="a98 dsaa";
                }
                else if(i>now){
                    animate(ln[now],{left:-widths});
                    animate(ln[i],{left:0});
                    for(let j=0;j<as.length;j++){
                        as[j].className="a98";
                    }
                    as[i].className="a98 dsaa";
                }
                now=next=i;
            }
        }
    }
    let xia1=new xia(0);
    let xia2=new xia(1);
   let xia3=new xia(2);
    let xia4=new xia(3);


}

	