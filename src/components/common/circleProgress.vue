<template>
  <div>
      <canvas :id="id" :width="canvasWidth+'px'" :height="canvasHeight+'px'"></canvas>
  </div>
</template>
<script>
/* eslint-disable */
export default {
    props:{
        coordinates:{
            type:Array,
            default:function() {
                return [100,100]
            }
        },
        radius:{
            type:Number,
            default:70
        },
        canvasHeight:{
            type:Number,
            default:200
        },
        canvasWidth:{
            type:Number,
            default:200
        },
        startAngle:{
            type:Number,
            default:0
        },
        endAngle:{
            type:Number,
            default:2*Math.PI
        },
        data:{
            type:Number,
            default:95
        },
        speed:{
            type:Number,
            default:100,
        },
        anticlockwise:{
            type:Boolean,
            default:false
        },
        gradientDirection:{
            type:String,
            default: 'to left'
        },
        gradientColor:{
            type:Object,
            default:function(){
                return{
                    0:'rgb(3,172,205)',
                    1:'rgb(51,254,147)'
                }
            }
        },
        lineStyle:{
            type:Object,
            default:function(){
                return {
                    lineWidth:30,
                    lineCap:'butt',
                    lineDash:[20,5]
                }
            }
        },
        circleBackground:{
            type:String,
            default:'rgb(18,79,159)'
        },
        enableCircleBackground:{
            type:Boolean,
            default:true
        },
    },
    name: "",
    data() {
    return {
        num:80,
        randomId:null,
    };
  },
  methods: {
    initProgress() {
      var that = this;
      var canvas = document.getElementById(that.id);
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        //基础样式
        ctx.clearRect(0,0,that.canvasWidth,that.canvasHeight);
        //渐变控制
        var gradient;
        switch (that.gradientDirection){
            case 'to left':
            gradient=ctx.createLinearGradient(0,0,that.canvasWidth,0);
            break;
            case 'to right':
            gradient=ctx.createLinearGradient(that.canvasWidth,0,0,0);
            break;
            case 'to top':
            gradient=ctx.createLinearGradient(0,that.canvasHeight,0,0);
            break;
            case 'to bottom':
            gradient=ctx.createLinearGradient(0,0,0,that.canvasHeight);
            break;
            case 'to top right':
            gradient=ctx.createLinearGradient(0,that.canvasHeight,that.canvasWidth,0);
            break;
            case 'to bottom right':
            gradient=ctx.createLinearGradient(0,0,that.canvasWidth,that.canvasHeight);
            break;
            case 'to top left':
            gradient=ctx.createLinearGradient(that.canvasWidth,that.canvasHeight,0,0);
            break;
            case 'to bottom left':
            gradient=ctx.createLinearGradient(that.canvasWidth,0,0,that.canvasHeight);
            break;
            default:
            gradient=ctx.createLinearGradient(0,0,that.canvasWidth,0);
        }
        //渐变颜色和梯度
        try{
            Object.entries(that.gradientColor).forEach(item=>{
            gradient.addColorStop(...item)
            })
        }
        catch(err){
            console.log(err)
            console.error('指定颜色配置')
        }
        ctx.strokeStyle = gradient;
        //线条样式
        ctx.lineWidth = that.lineStyle.lineWidth || 30;
        ctx.lineCap = that.lineStyle.lineCap || 'butt';
        ctx.setLineDash(that.lineStyle.lineDash || [20,5]);
        //背景绘制
        if(that.enableCircleBackground){
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle=that.circleBackground || 'rgb(18,79,159)';
            ctx.arc(that.coordinates[0], that.coordinates[1], that.radius, that.startAngle, that.endAngle, that.anticlockwise);
            ctx.stroke();
            ctx.restore();
        }
        //动画粒度
        var distance=that.endAngle-that.startAngle;
        var precent =distance*that.data/100;
        var i=0;
        var j=distance/that.speed;
        //动画函数
        //linear
        function linear(k){
            return k*k
        }
        function draw(){
            if(i<precent){
                i=i+j;
                ctx.beginPath();
                if(!that.anticlockwise){
                    ctx.arc(that.coordinates[0], that.coordinates[1], that.radius, that.startAngle, that.startAngle+i, that.anticlockwise);
                }
                if(that.anticlockwise){
                    ctx.arc(that.coordinates[0], that.coordinates[1], that.radius, that.startAngle, that.startAngle-i, that.anticlockwise);
                }
                ctx.stroke();
                requestAnimationFrame(draw);
            }
        }
        draw();
      }
    },
  },
    computed:{
        id(){
            return Math.random().toFixed(5)*100000
        }
    },
  watch:{
      data(){
          this.initProgress();
      }
  },
  mounted(){
    this.initProgress();
  },
};
</script>

