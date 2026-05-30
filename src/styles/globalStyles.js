const GS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{cursor:none;-webkit-font-smoothing:antialiased;overflow-x:hidden;font-family:'Inter',system-ui,sans-serif;}
a{text-decoration:none;cursor:none;}
button{cursor:none;border:none;background:none;}
::-webkit-scrollbar{width:3px;}
::-webkit-scrollbar-thumb{background:rgba(0,200,122,0.35);border-radius:2px;}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.25}}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@keyframes typedBlink{0%,100%{opacity:1}50%{opacity:0}}
.a0{animation:fadeUp .6s .05s both}
.a1{animation:fadeUp .6s .15s both}
.a2{animation:fadeUp .6s .27s both}
.a3{animation:fadeUp .6s .40s both}
.a4{animation:fadeUp .6s .53s both}
@media(max-width:768px){
  .two-col{grid-template-columns:1fr !important;}
  .exp-grid{grid-template-columns:1fr !important;}
  .contact-grid{grid-template-columns:1fr !important;}
  .skill-grid{grid-template-columns:repeat(auto-fill,minmax(110px,1fr)) !important;}
}
@media(max-width:480px){
  .skill-grid{grid-template-columns:repeat(auto-fill,minmax(90px,1fr)) !important;}
  .cert-grid{grid-template-columns:1fr !important;}
}
`;

export default GS;
