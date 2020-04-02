<template>
    <div class="main">
            <div class="header">
                <div class="h-left">p</div>
                <div class="h-right"> 
                    <div class="parent">
                        <p>Parren</p>
                        <p>UID 80006744</p>
                    </div>
                    <div class="h-img"> 
                        <img src="../../assets/image/next_black(1).png" alt="" srcset="">
                    </div>
                </div>
            </div>
            <ul class="list">
                <li v-for="(item,index) in list" :key="index" >
                    <a href="">
                        <div>
                            <img src="../../assets/image/my_receivables.png" alt="">
                        </div>
                        <div>
                            <p>收款方式</p>
                        </div>
                        <div>
                        <img src="../../assets/image/next_black(1).png" alt="" srcset="">
                        </div>
                    </a>
                </li>
            </ul>
    </div>
</template>


<script>
    export default{
        name:"mine",
        data:function(){
            return{
                list:[
                    {id:'1'},
                    {id:'2'},
                    {},
                    {}
                ]
            }
        }
    }
</script>

<style>
.main{
    width:100%;
    height:13.34rem;
    background:rgba(255,255,255,1);
}
.header{
    width: 100%;
    margin-top: 1.75rem;
    margin-left: 0.64rem;
    margin-bottom: .1rem;
    float: left;
}
.h-left{
    width:0.72rem;
    height:0.72rem;
    background:rgba(23,113,237,1);
    text-align: center;
    font-size:0.38rem;
    line-height:.62rem;
    border-radius: 50%;
    font-family:PingFangSC-Semibold,PingFang SC;
    font-weight:600;
    color:rgba(255,255,255,1);
    float: left;

}
.h-right{
    float: left;
    margin-left: .3rem;
    /* background: red; */
}
.parent{
    float: left;
}
.parent p:nth-child(1){
    width:1.19rem;
    height:0.38rem;
    font-size:0.38rem;
    font-family:PingFangSC-Semibold,PingFang SC;
    font-weight:600;
    color:rgba(51,51,51,1);
    line-height:0.38rem;
    margin-bottom: 0.1rem;
}
.parent p:nth-child(2){
    width: 2.62rem;
    height: 0.24rem;
    font-size:0.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(151,162,175,1);
    line-height:0.24rem;
}
.h-img{
    float: left;
    margin-left: 2.16rem;
    margin-top: .3rem;
}
.h-img img{
    width:.36rem;
    height:.36rem;

}

.list{
    margin-left: .82rem;
    float: left;
}
.list li{
    margin-top: 0.8rem;
    float:left;
}
.list li div:nth-child(1){
    float: left;
    border:0.1rem solid #ccc
}
.list li div:nth-child(1) img{
    width:0.36rem;
    height:0.36rem;
}
.list li div:nth-child(2) {
    width:1.12rem;
    height:0.28rem;
    font-size:0.28rem;
    font-family:PingFangSC-Semibold,PingFang SC;
    font-weight:600;
    color:rgba(51,51,51,1);
    line-height:0.28rem;
    margin-left: .48rem;
    margin-top:0.08rem;
    float: left;
}
.list li div:nth-child(3){
    float: left;
    margin-left: 3.5rem;
    margin-top:.1rem
    
}
.list li div:nth-child(3) img{
    width:0.2rem;
    height:0.2rem;
    
    /* background:rgba(151,162,175,1); */
}
</style>