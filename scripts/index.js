window.onload=function(){

	// 在控制台中输出10行*
// 毎一行i+1个
	// var count=0;
	// var fn=function(){
	// 	var str='';
	// 	for(var i=0;i<10;i++){
	// 		str+='*';
	// 		console.log(str);
	// 		console.log(' ');
	// 	}
	// };
	// fn();

// 双层循环 毎一行i+1个
	// var ten=function(){
	// 	for(var i=0;i<10;i++){
	// 	var ten='';
	// 		for(var j=0;j<i+1;j++){
	// 			ten+='*';
	// 		}
	// 		console.log(ten);
	// 		console.log(' ');			
	// 	}
	// };
	// ten();

	
// 每行5个
	// var five=function(){
	// 	for(var i=0;i<10;i++){
	// 	var wu='';
	// 		for(var j=0;j<5;j++){
	// 			wu+='*';
	// 		}
	// 		console.log(wu);
	// 		console.log(' ');			
	// 	}
	// };
	// five();

// 写一个函数在页面输出星
	// 	  *
	//   ***
	//  *****
	// *******
	//**********
	// i   j--*   k--空格
	// 0   1      5
	// 1   3      4
	// 2   5      3
	// 3   7      2
	// 4   9      1
	// var fn2=function(){
	// 	for(var i=0;i<5;i++){
	// 		for(var k=0;k<4-i;k++){
	// 			document.write('&nbsp');
	// 		}
	// 		for(var j=0;j<i*2+1;j++){
	// 			document.write('* ');
	// 		}
	// 		document.write('<br>');
	// 	}
	// };
	// fn2();

//生成一个随机数组 长度13  里面为1-13随机数
// 遍历数组 1-A ......
    // var dict={
    // 		1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',
    // 		8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'
    // 		};
    // var arr=[];
    // var suiji=function(){
    // 	for(var i=0;i<13;i++){
    // 		var random=Math.ceil(Math.random()*13);
    // 		arr.push(random);
    // 	}
    // 	// 1--A  11--J  12--Q  13--K
    // 	for(var i=0;i<arr.length;i++){
    // 		arr[i]=dict[arr[i]];  		
    // 	} 
    // 	return arr;
    // };
    // console.log(suiji());




// --------------------------------------------------------------------------------------------
	var anniu=document.getElementsByClassName('anniu');
	var anniu1=document.getElementById('anniu1');
	var anniu2=document.getElementById('anniu2');
	var smallyou=document.getElementById('smallyou');
	var zhao1=document.getElementById('zhao1');
	var zhao2=document.getElementById('zhao2');

	document.onmousedown=function(e){
		e.preventDefault();
	}


// 生成一副乱序的扑克牌  poker是生成的那一副牌
	var dict1={
			1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',
			8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'
    	};
 	var poker=[];
 	var huase=['rt','bt','mh','fp'];
 	var zidian={};
 	var fnpai=function(){
	 	while(poker.length != 52){
			var hs=huase[Math.floor(Math.random()*4)];   			
			var num=dict1[Math.ceil(Math.random()*13)];
			// console.log(hs+num);
			var PAI={huase:hs,number:num};
			if(!zidian[hs+num]){
				poker.push(PAI);
				zidian[hs+num]=true;
			}
	 	}
 		return poker;
 	};
 	var POKER=fnpai();//POKER是函数的返回值,即poker  
 	pokerUp=POKER.slice(0,28);
	// console.table(pokerUp);
	var pokerDown=POKER.slice(-24);
	// console.table(pokerDown);

// 写一个函数 在函数中用定位创建28个元素
// 28个元素都用定位 1-1, 2-2, 
	var big=document.getElementById('big');
	var fn3=function(){
		for(var i=0;i<7;i++){
			for(var j=0;j<i+1;j++){
				var pai=document.createElement('div');
				pai.setAttribute("class","pai");
				pai.setAttribute("id",i+'_'+j);
				// 牌的宽130, 每一层的第一个距左边(6-i)*65,
				// 之后每一个加前面牌的宽,但是两张牌之间没距离
				// pai.style.left=(6-i)*75+j*150+'px';
				// 改成:65=170/2;
				pai.style.left=(6-i)*70+j*140+'px';
				pai.style.top=30*i+'px';
				big.appendChild(pai);
			}
		}
	}
	fn3();


// ======================上面的28张
// 分开转
 	var pai=document.getElementsByClassName('pai');
 	var zhangshu=0;
 	var zhuanfn=function(){
 		pai[zhangshu].innerHTML=pokerUp[zhangshu].number;
 		if(pai[zhangshu].innerHTML=='A'){pai[zhangshu].innerHTML='1';};
 		if(pai[zhangshu].innerHTML=='J'){pai[zhangshu].innerHTML='11';};
 		if(pai[zhangshu].innerHTML=='Q'){pai[zhangshu].innerHTML='12';};
 		if(pai[zhangshu].innerHTML=='K'){pai[zhangshu].innerHTML='13';};
	 	var up=pokerUp[zhangshu].huase+pokerUp[zhangshu].number;
		pai[zhangshu].style.backgroundImage='url(./ali/'+up+'.jpg)';
		pai[zhangshu].style.transform='rotateY(0deg)';
		pai[zhangshu].style.boxShadow='0 3px 10px #999'; 		
 		zhangshu++;
 		if(zhangshu==28){
 			clearInterval(zhuant);
 		}
 	}
 	var zhuant=setInterval(zhuanfn,70);

// 一起转
	// setInterval(function(){
	// 	for (var i = 0; i < pokerUp.length; i++) {
	//  		pai[i].innerHTML=pokerUp[i].number;
	//  		if(pai[i].innerHTML=='A'){pai[i].innerHTML='1';};
	//  		if(pai[i].innerHTML=='J'){pai[i].innerHTML='11';};
	//  		if(pai[i].innerHTML=='Q'){pai[i].innerHTML='12';};
	//  		if(pai[i].innerHTML=='K'){pai[i].innerHTML='13';};
	// 	 	var up=pokerUp[i].huase+pokerUp[i].number;
	// 		pai[i].style.backgroundImage='url(./ali/'+up+'.jpg)';
	// 		pai[i].style.transform='rotateY(0deg)';
	// 		pai[i].style.boxShadow='0 3px 10px #999'; 		
			
	// 	};	
	// },70);

	// pai[i].innerHTML='<span class="zuoshang">'+pokerUp[i].number+'</span><span class="youxia">'+pokerUp[i].number+'</span>';
	// if(pokerUp[i].huase=='rt'){
	// 	pai[i].style.color='#ff0000';
	// 	pai[i].style.background='url(./rt.jpg)';
	// }
	// if(pokerUp[i].huase=='bt'){
	// 	pai[i].style.background='url(./bt.jpg)';
	// }
	// if(pokerUp[i].huase=='mh'){
	// 	pai[i].style.background='url(./mh.jpg)';
	// }
	// if(pokerUp[i].huase=='fp'){
	// 	pai[i].style.color='#ff0000';
	// 	pai[i].style.background='url(./fp.jpg)';
	// }

 	
 	
// 定位24个元素
	var small=document.getElementById("small");
	for(var i=0;i<24;i++){
		var paixia=document.createElement("div");
		paixia.setAttribute('class','paixia');
		paixia.setAttribute('id',i);
		paixia.style.top='0px';
		paixia.style.left='0px';
		small.appendChild(paixia);		
	}
// 下面的24张
	var paixia=document.getElementsByClassName('paixia');
	for(var i=0;i<paixia.length;i++){
		paixia[i].innerHTML=pokerDown[i].number;
		// console.log(typeof(pokerDown[i].number));
 		if(paixia[i].innerHTML=='A'){paixia[i].innerHTML='1';};
 		if(paixia[i].innerHTML=='J'){paixia[i].innerHTML='11';};
 		if(paixia[i].innerHTML=='Q'){paixia[i].innerHTML='12';};
 		if(paixia[i].innerHTML=='K'){paixia[i].innerHTML='13';};
		var down=pokerDown[i].huase+pokerDown[i].number;
		paixia[i].style.backgroundImage='url("./ali/'+down+'.jpg")';
	}


	anniu1.onclick=function(){
		if(small.children.length!=0){
			smallyou.appendChild(small.removeChild(small.lastElementChild));
		}		
	}

	var cishu=0;
	anniu2.onclick=function(){
		if(small.children.length==0){
			if(cishu<3){
				if(small.children.length==0){
					var len=smallyou.children.length;
					for(var i=0;i<len;i++){
						small.appendChild(smallyou.removeChild(smallyou.lastElementChild));
					}
				}
				cishu++;
			}
			if(cishu==3){
				setTimeout(function(){
					zhao2.style.display='block';
				},500);
			}
		}
		
	}
// 遮罩上的按钮
	for(var i=0;i<anniu.length;i++){
		anniu[i].onclick=function(){
			window.location.reload();
		}
		
	}

	var previous=null;
	var first='',second='';
	big.onclick=function(e){
		// var tar=e.target;
		if(e.target==this) return;//this--big
		// 取不到被压住的元素
		var id=e.target.getAttribute('id');
		// console.log(id);
		var x=Number(id.split('_')[0]);	
		var y=Number(id.split('_')[1]);	
		var exit1=document.getElementById((x+1)+'_'+y);//取不到返回null
		var exit2=document.getElementById((x+1)+'_'+(y+1));
		if(exit1 || exit2)return;//如果有 return函数 点击的这个阴影不变

// 第一次点击加阴影,点第二个第一个阴影不在
		// if(previous==null){//只执行一次-----第一次点击
		// 	e.target.style.boxShadow='0 0 20px #fff inset';	
		// 	previous=e.target;	
		// }else{
		// 	previous.style.boxShadow='0 1px 10px #999';
		// 	e.target.style.boxShadow='0 0 20px #fff inset';		
		// 	previous=e.target;
		// }
		e.target.style.boxShadow='0 0 40px #C7C7C7 inset,0 1px 10px #999';	
		second=e.target.innerHTML;
		if( previous!=null ){//第一次点击的时候不执行
			previous.style.boxShadow='0 1px 10px #999';
			first=previous.innerHTML;
			// console.log(first);
			// console.log(second);
			if(Number(first)+Number(second)==13){
				previous.parentElement.removeChild(previous);
				e.target.parentElement.removeChild(e.target);
				previous=null;
				return ;
			}
		}

		if(Number(second)==13){
			e.target.parentElement.removeChild(e.target);
		} 
		previous=e.target;	

	};
	
	setInterval(function(){
		if( big.children.length==2 && small.children.length==0 && smallyou.children.length==0){
			setTimeout(function(){
				zhao1.style.display='block';
			},500);
		}
	},500);













};