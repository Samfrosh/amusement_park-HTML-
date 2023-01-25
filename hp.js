var indexValue = 1;
showImg(indexValue)
function btm_sliders(e){showImg(indexValue =e);}
function side_sliders(e){showImg(indexValue +=e);}
function showImg(e){
var i;
const img= document.querySelectorAll('.sams')
const sliders= document.querySelectorAll('.btm-sliders span')
if (e > img.length){indexValue = 1}
if (e < 1){indexValue = img.length}
for(i = 0; i< img.length; i++){
  img[i].style.display = 'none';
}
for(i = 0; i< sliders.length; i++){
  sliders[i].style.background = 'rgba(255, 255, 255, 0.1)';
}
img[indexValue -1].style.display = 'block';
sliders[indexValue -1].style.background = 'white';
}


// var indexValue =0
// showImg(indexValue);

// function indexValue(){
//   var i;
//   var sliders = document.getElementsByClassName('.btm-sliders span');
//   for (i=0;i< sliders.length; i++){
//     sliders[i].getElementsByClassName.display = 'none';
//   }
//   {indexValue =1}
//   sliders[indexValue -1].getElementsByClassName.display ='block';
//   setTimeout(sliders,9000)
// }