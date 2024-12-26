document.addEventListener("DOMContentLoaded",function(){
    const content = document.getElementById("content")
    const highlight = document.getElementById("highlight")


    content.addEventListener("mousedown",function(e){
        highlight.style.display="block";
        highlight.style.top=`${e.pageY}px`
        highlight.style.left=`${e.pageX}px`
        highlight.style.width=`0`
        highlight.style.height=`0`

        const startX = e.pageX;
        const startY = e.pageY;

        const onMouseMove=(ev)=>{
            const currentX = ev.pageX;
            const currentY = ev.pageY;

            const width = Math.abs(currentX-startX)
            const height = Math.abs(currentY-startY)

            highlight.style.width = `${width}px`
            highlight.style.height = `${height}px`
            highlight.style.left = Math.min(startX,currentX) +"px"
            highlight.style.top = Math.min(startY,currentY) +"px"

            
                
        }


        const onMouseUp=()=>{
            document.removeEventListener("mousemove",onMouseMove)
            document.removeEventListener("mouseup",onMouseUp)
            highlight.style.display="none"
        }

        document.addEventListener("mousemove",onMouseMove)
        document.addEventListener("mouseup",onMouseUp)

    })

})
