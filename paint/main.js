window.addEventListener('load', () => {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  const input = document.querySelector('#color');
  const size = document.querySelector('#size'); 
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

    let painting = false;

    let startPosition = () =>{ 
        painting = true;
    }
    
    let finishedPosition = () => {
        painting = false;
        ctx.beginPath();
    }

    let draw = (e) => {
        if (painting) {
            ctx.lineWidth = `${size.value}` ;
            ctx.strokeStyle = `${input.value}`;
            ctx.lineCap = "round";
            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();

        } else {
            return false;
        }
        
    }
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
});
