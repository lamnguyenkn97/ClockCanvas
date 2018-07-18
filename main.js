
       var canvas = document.getElementById("canvas");
       var ctx = canvas.getContext("2d");
       var height = canvas.height;
       var radius = canvas.height / 2;
       const pi = Math.PI;
       ctx.translate(radius, radius);
       radius = radius * 0.90
       setInterval(drawClock,1000);
       
       function drawClock() {
         drawFace(ctx, radius);
         drawNumber(ctx,radius);
         drawTime(ctx,radius);
       }
       
       function drawFace(ctx, radius) {
         var grad;
         ctx.beginPath();
         ctx.arc(0, 0, radius, 0, 2*pi);
         ctx.fillStyle = 'white';
         ctx.fill();
         grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
         grad.addColorStop(0, '#333');
         grad.addColorStop(0.5, 'white');
         grad.addColorStop(1, '#333');
         ctx.strokeStyle = grad;
         ctx.lineWidth = 0.1*radius;
         ctx.stroke();
         ctx.beginPath();
         ctx.arc(0,0,radius*0.1,0,2*pi);
         ctx.fillStyle='black';
         ctx.fill();
       }
       function drawNumber(ctx,radius){
          ctx.font = "30px Comic Sans MS";
          ctx.textAlign = "center";
          ctx.textBaseline='middle';
          for (let i =1 ;i <= 12;i++){
                let x =  radius*0.8*Math.sin(i*pi/6);
                let y = -radius*0.8*Math.cos(i*pi/6);
                ctx.fillText(i,x,y);
          }
          
       }
       function drawTime(ctx,radius){
               var time = new Date(); 
               var hour = time.getHours()%12;
               var minute = time.getMinutes();
               var second = time.getSeconds();            
               //hour
               
               hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(3600*60));
               drawHand(ctx,radius,radius*0.5,radius*0.07,hour);
               //min
              
               minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
               drawHand(ctx,radius,radius*0.65,radius*0.06,minute);
               
               //second
               second=(second*Math.PI/30);
               drawHand(ctx,radius,radius*0.7,radius*0.03,second);

       }
       function drawHand(ctx,radius,length,width,pos){
              ctx.lineCap='round';
              ctx.lineWidth=width;
              ctx.beginPath();
              ctx.moveTo(0,0);
              ctx.rotate(pos);
              ctx.lineTo(0,-length);
              ctx.strokeStyle="black";
              ctx.stroke();
              ctx.rotate(-pos);
       }
                

        
