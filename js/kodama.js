goBottom=()=> {
    var obj = document.getElementById('chatarea');
    if(!obj) return;
    obj.scrollTop = obj.scrollHeight;
    }; //スクロールボックスの常に最下部を見るJS

kesu=()=>{
    document.js.chat.value="";      
    };//入力後にフォームの中を消す


ad=()=>{
    let aNode = document.getElementsByClassName("log"); //anodeにクラスネームlogを入れて
    for (let i = aNode.childNodes.length - 1; i >= 0; i--) { //aNodeがゼロになるまで回して
        aNode.removeChild(aNode.childNodes[i]);
    }
}



p=()=>{


    let target = document.getElementById("chatarea");//まずchatareaの場所をtargetに覚えさせる
    let num = document.js.name.value; //名前の番号
    let chatstring = document.js.chat.value; //jsフォームのchat中身を取得
    

    q=()=>{ 
        chatstring.replace(/\r?\n/g, '<br>');//☆改行したい　改行させたい

        let div1 = document.createElement('div');//こんなかんじでdiv要素をつくる <div></div>
        const value = document.createTextNode(chatstring);//div要素のなかみ 
        div1.appendChild(value);//<div>ほげほげほげ</div>　こうする

        div1.classList.add('log');//class要素を付与   <div class="log">hogege</div>
        //追加される子ノードはlogとして保存される。消すときはclass="log"を消す
    
        div1.id ='chatlog'+num;//id要素を付与   <div class="log" id="chatlog(num)">hogege</div>                
        

        target.appendChild(div1);//target(chatarea)最後の子要素として追加。これで下に追加される
    //     console.log(div1);
        goBottom();    
        kesu();   
        
        };

    r=()=>{ 

        if(chatstring){
            q();            
        }           
        document.js.chat.focus();　//chatボタンを押したとき、自動でテキストボックスに戻る        
    };
    r();
}

