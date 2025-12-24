
let c=10;
const cd=document.getElementById('countdown'),m=document.getElementById('message'),g=document.querySelector('.gifts'),
music=document.getElementById('music'),s=document.getElementById('surprise'),sp=document.getElementById('sphoto'),st=document.getElementById('stext');

const gifts=[
 {photo:'photo1.jpg',text:'You are amazing 💖'},
 {photo:'photo2.jpg',text:'Keep smiling always 😊'},
 {photo:'photo3.jpg',text:'This year is ours ✨'}
];

setInterval(()=>{
 if(c>0){c--;cd.textContent=c;}
 if(c===0){
  cd.style.display='none';
  m.classList.remove('hidden');
  g.classList.remove('hidden');
  music.play();
  setTimeout(()=>openGift(1),5000);
 }
},1000);

function openGift(i){
 sp.src=gifts[i-1].photo;
 st.innerHTML=gifts[i-1].text;
 s.classList.remove('hidden');
}
