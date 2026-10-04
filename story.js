/* EDIT HERE: all names, story text, lessons, quotes, wishes and media captions. */
const TRIBUTE = [
  {
    siteName: 'The tree she planted', dateShort: '5 October, with gratitude',
    teacherName: 'Ayisha Ambreen', studentNames: 'Abu Bakr & Abdul Wahab', salutation: 'For our Ma’am,',
    occasion: 'Happy Teachers’ Day · 5 October',
    introLabel: 'A little story, from your students', seedTitle: 'It started with a seed, Ma’am.',
    seedSubtitle: 'And a teacher who believed it could grow.', seedHint: 'Tap the seed, or scroll to begin',
    nameLabel: 'Every beginning needs a little care', nameNote: 'This little tree is for you.',
    portraitLabel: 'A little patience. A lot of belief.', portraitTitle: 'You saw something in us.',
    portraitBody: 'Even on the days we couldn’t see it ourselves.', portraitCaption: 'The one who planted it.',
    lessonsLabel: 'Some things stay with us', lessonsTitle: 'More than what was in the books.',
    lessonsBody: 'Little lessons. Quiet encouragement. Things we’ll remember.', lessonsHint: 'Touch a leaf. There’s a thought inside.',
    memoriesLabel: 'And somewhere along the way', memoriesTitle: 'We grew, together.',
    memoriesBody: 'The lessons were yours. So were so many of our favourite memories.',
    messageLabel: 'From two of your many leaves', messageTitle: 'Dear Ma’am,', signatureLabel: 'With love and gratitude,',
    wishLabel: 'There’s room for one more', wishTitle: 'A little wish. A new leaf.',
    wishBody: 'If she helped you grow too, leave her a few words.', wishButton: 'Leave a leaf for Ma’am',
    wishInputLabel: 'Your words for Ma’am', wishPlaceholder: 'Thank you for…', wishSubmit: 'Let it grow',
    wishLocal: 'Your leaf stays on this device.', wishSuccess: 'Your little leaf is growing. Thank you.',
    wishUnsaved: 'Your leaf is here for this visit. This browser couldn’t save it.',
    wishLimit: 'Your tree has 30 wishes already. Thank you for filling it with kind words.',
    endingLabel: 'For everything you’ve given us', endingTitle: 'Thank you for helping us grow, Ma’am.',
    endingNote: 'A little of you, in everything we become.', replay: 'Plant it again',
    endSignoff: 'Made with gratitude, by Abu Bakr & Abdul Wahab · 5 October',
    soundOff: 'Sound off', soundOn: 'Sound on', memoryPrevious: 'Previous', memoryNext: 'Next',
    leafInstruction: 'Tap again to turn back', editableMemory: 'Editable memory', editableUrdu: 'Editable Urdu line',
    message: [
      'Thank you for explaining things one more time,',
      'for listening, and for expecting the best from us.',
      'We might forget a few answers from class,',
      'but we’ll remember how you made us feel:',
      'capable, supported, and ready to try again.',
      'We’re glad we got to be your students.'
    ],
    portrait: { src: 'assets/ayisha.jpg', alt: 'Ma’am Ayisha Ambreen, smiling in a portrait shared by her students' }
  },
  // Replace these six placeholders with your own class memories.
  { type: 'lesson', text: 'You never made us feel stupid for asking again.', editable: true },
  { type: 'lesson', text: 'You reminded us that getting it wrong was part of learning.', editable: true },
  { type: 'lesson', text: 'You noticed when we tried, even before we got it right.', editable: true },
  { type: 'lesson', text: 'You taught us to understand the answer, not just memorise it.', editable: true },
  { type: 'lesson', text: 'Your “try once more” helped more than you probably knew.', editable: true },
  { type: 'lesson', text: 'You showed us that being kind and being good at something can go together.', editable: true },
  { type: 'quote', text: 'A teacher affects eternity; he can never tell where his influence stops.', author: 'Henry Adams' },
  // EDITABLE URDU LINE: replace with your preferred personal wording.
  { type: 'urdu', text: 'استادِ محترم، آپ کی رہنمائی کا دل سے شکریہ۔', editable: true },
  { type: 'quote', text: 'We ask more questions now because you always listened.', author: 'Abu Bakr & Abdul Wahab' },
  { type: 'quote', text: 'Your class gave us a bit more confidence in ourselves.', author: 'Abu Bakr & Abdul Wahab' },
  { type: 'photo', src: 'assets/together.jpg', alt: 'Ma’am and her students standing together at an outdoor college display', caption: 'A day we’ll remember.' },
  { type: 'photo', src: 'assets/IMG_3060.JPG', alt: 'Students and teachers beside a pink college display under a tree', caption: 'These days, these people.' },
  { type: 'photo', src: 'assets/IMG_3066.JPG', alt: 'Students and teachers gathered beside their outdoor model display', caption: 'A little work. A lovely memory.' },
  { type: 'photo', src: 'assets/a6621f29-3ba5-48ee-84e2-b41d2524c016.JPG', alt: 'Teachers and students posing together in a green mountain valley', caption: 'Beyond the classroom, together.' },
  { type: 'photo', src: 'assets/2aca17f2-6096-475d-887b-308781696398.JPG', alt: 'Ma’am and students sitting outdoors with snowy mountains in the distance', caption: 'The quieter moments, too.' },
  { type: 'photo', src: 'assets/IMG_5173.jpg', alt: 'Ma’am and three teachers standing beside an alpine lake beneath snowy mountains', caption: 'One more memory to keep.' },
  { type: 'video', src: 'assets/memory-1.mp4', poster: 'assets/memory-1.jpg', alt: 'A video of a hand-drawn pencil portrait of Ma’am', caption: 'A portrait, made with care.' },
  { type: 'video', src: 'assets/memory-2.mp4', poster: 'assets/memory-2.jpg', alt: 'Ma’am gently touching a bird beside an alpine lake', caption: 'A moment by the lake.' }
];

(() => {
  'use strict';
  const copy = TRIBUTE[0];
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const reducedQuery = matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = reducedQuery.matches;
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const chapters = $$('.chapter');
  const notes = TRIBUTE.filter(item => ['lesson', 'quote', 'urdu'].includes(item.type));
  const media = TRIBUTE.filter(item => ['photo', 'video'].includes(item.type));
  const make = (tag, attrs = {}) => {
    const el = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    return el;
  };
  let randomSeed = 51;
  const random = () => { randomSeed = (randomSeed * 16807) % 2147483647; return (randomSeed - 1) / 2147483646; };
  $$('[data-copy]').forEach(el => { const value = copy[el.dataset.copy]; if (typeof value === 'string') el.textContent = value; });
  $('#wish-text').placeholder = copy.wishPlaceholder;
  $('#memory-prev').textContent = copy.memoryPrevious;
  $('#memory-next').textContent = copy.memoryNext;
  $('#teacher-photo').src = copy.portrait.src;
  $('#teacher-photo').alt = copy.portrait.alt;
  copy.message.forEach(line => { const p = document.createElement('p'); p.textContent = line; $('#message-lines').append(p); });

  // Brush-pen leaves cluster at the actual ends of the drawn branches.
  const clusters = [[114,326],[132,372],[183,296],[226,313],[219,273],[256,262],[267,179],[299,148],[343,169],[390,145],[411,180],[461,157],[507,164],[530,237],[510,294],[432,290],[465,390],[558,299],[589,330],[578,391],[181,413],[249,365],[328,307],[480,446]];
  clusters.forEach(([x, y], clusterIndex) => {
    const count = clusterIndex % 3 === 0 ? 4 : 3;
    for (let j = 0; j < count; j++) {
      const angle = -85 + j * 47 + (random() - .5) * 25;
      const outer = make('g', { transform: `translate(${x + (random() - .5) * 15} ${y + (random() - .5) * 14}) rotate(${angle}) scale(${.68 + random() * .36})` });
      const leaf = make('g', { class: 'foliage-leaf', style: `color:${['#3c603b','#537447','#718c54','#80975c'][Math.floor(random()*4)]}` });
      const rustle = make('g', { class: 'leaf-rustle', style: `--delay:${-random()*8}s` });
      rustle.append(make('use', { href: '#little-leaf' }));
      leaf.append(rustle); outer.append(leaf); $('#foliage').append(outer);
    }
  });
  for (let i = 0; i < 38; i++) {
    const x = 98 + i * 14;
    const h = 9 + random() * 30;
    $('#grass').append(make('path', { d: `M${x} 756Q${x + 2} ${756 - h * .6} ${x + (random() - .5) * 22} ${756 - h}`, class: 'grass-stem', stroke: i % 3 === 0 ? '#71804a' : '#4d663c', 'stroke-width': 1.4 + random(), 'stroke-linecap': 'round', fill: 'none', style: `--delay:${-random()*5}s` }));
  }
  [[148,750],[220,751],[485,751],[545,753],[578,754]].forEach(([x,y],i) => {
    const g = make('g', { class: 'flower-stem' });
    g.append(make('path',{ d:`M${x} ${y}q${i%2?5:-4}-12 0-23`,stroke:'#677447','stroke-width':1.6,fill:'none'}));
    g.append(make('use',{href:'#flower',transform:`translate(${x} ${y-23}) scale(.43)`}));
    $('#tree-flowers').append(g);
  });
  for (let i = 0; i < 13; i++) {
    const dot = document.createElement('span'); dot.className = 'firefly';
    dot.style.cssText = `left:${18+random()*65}%;top:${34+random()*58}%;animation-delay:${-random()*9}s;animation-duration:${4+random()*5}s`;
    $('#fireflies').append(dot);
  }

  const notePositions = [[168,344,-26],[218,268,18],[293,189,-27],[374,241,23],[465,189,-21],[511,287,22],[558,353,-28],[478,424,15],[306,341,-16],[201,423,26]];
  const leafButtons = notes.map((note, index) => {
    const [x,y,rotation] = notePositions[index % notePositions.length];
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'lesson-leaf';
    button.style.cssText = `left:${x/720*100}%;top:${y/800*100}%;--rotation:${rotation}deg;--leaf-color:${['#43683e','#4f7140','#45653c','#577044'][index%4]}`;
    button.dataset.left = String(x/720*100);
    button.setAttribute('aria-expanded','false'); button.setAttribute('aria-label',`Read leaf ${index+1}`);
    const inner=document.createElement('span');inner.className='leaf-inner';
    const front=document.createElement('span');front.className='leaf-face leaf-front';front.setAttribute('aria-hidden','true');
    front.innerHTML=`<svg viewBox="0 0 80 64"><path d="M7 54C3 29 19 9 73 7C73 39 51 59 7 54Z" fill="currentColor"/><path class="leaf-vein" d="M5 58Q32 36 67 13M27 40l-5-14M40 31l19 3M49 23l-3-9"/><text x="39" y="43" text-anchor="middle" class="leaf-number">${index+1}</text></svg>`;
    const back=document.createElement('span');back.className='leaf-face leaf-back'+(note.type==='urdu'?' urdu':'');back.setAttribute('aria-hidden','true');
    const text=document.createElement('span');text.textContent=note.text;if(note.type==='urdu'){text.lang='ur';text.dir='rtl';}back.append(text);
    if(note.author){const author=document.createElement('small');author.textContent=note.author;back.append(author);}
    if(note.editable){const editable=document.createElement('small');editable.textContent=note.type==='urdu'?copy.editableUrdu:copy.editableMemory;back.append(editable);}
    inner.append(front,back);button.append(inner);
    button.addEventListener('click',()=> {
      const opening=!button.classList.contains('open');
      leafButtons.forEach(other=>closeNote(other));
      if(opening){
        button.classList.add('open');button.setAttribute('aria-expanded','true');
        button.setAttribute('aria-label',`${note.text}${note.author?' — '+note.author:''}. ${copy.leafInstruction}`);back.setAttribute('aria-hidden','false');
        const container=$('#lesson-leaves').getBoundingClientRect();
        const halfWidth=(matchMedia('(max-width:800px)').matches?207:228)/2;
        const desired=container.width*x/720;
        button.style.left=`${Math.max(halfWidth+3,Math.min(container.width-halfWidth-3,desired))/container.width*100}%`;
      }
    });
    $('#lesson-leaves').append(button);return button;
  });
  function closeNote(button){button.classList.remove('open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label',`Read leaf ${leafButtons.indexOf(button)+1}`);button.querySelector('.leaf-back').setAttribute('aria-hidden','true');button.style.left=button.dataset.left+'%';}
  document.addEventListener('keydown',event=>{if(event.key==='Escape')leafButtons.forEach(closeNote);});
  $('#lesson-leaves').inert=true;

  // One frame, all supplied memories. Videos download only when chosen.
  let mediaIndex=0;
  const video=$('#memory-video');
  media.forEach((item,index)=>{
    const button=document.createElement('button');button.className='memory-thumb'+(item.type==='video'?' video-thumb':'');button.type='button';
    button.setAttribute('aria-label',`${item.type==='video'?'Video':'Photo'} ${index+1}: ${item.caption}`);
    const img=document.createElement('img');img.src=item.poster||item.src;img.alt='';img.loading='lazy';img.decoding='async';button.append(img);
    button.addEventListener('click',()=>showMemory(index));$('#memory-thumbs').append(button);
  });
  function showMemory(index){
    mediaIndex=(index+media.length)%media.length;const item=media[mediaIndex];video.pause();
    if(item.type==='video'){ $('#memory-image').hidden=true;video.hidden=false;video.src=item.src;video.poster=item.poster;video.setAttribute('aria-label',item.alt);video.load(); }
    else {video.hidden=true;video.removeAttribute('src');video.load();$('#memory-image').hidden=false;$('#memory-image').src=item.src;$('#memory-image').alt=item.alt;}
    $('#memory-caption').textContent=item.caption;$('#memory-count').textContent=`${mediaIndex+1} / ${media.length}`;
    $$('.memory-thumb').forEach((b,i)=>{b.classList.toggle('selected',i===mediaIndex);b.setAttribute('aria-pressed',String(i===mediaIndex));});
  }
  $('#memory-prev').addEventListener('click',()=>showMemory(mediaIndex-1));$('#memory-next').addEventListener('click',()=>showMemory(mediaIndex+1));showMemory(0);

  // Text is always inserted with textContent, including device-local wishes.
  const storageKey='ayisha-tree-wishes-v1';
  let wishes=[];
  try {const stored=JSON.parse(localStorage.getItem(storageKey)||'[]');if(Array.isArray(stored))wishes=stored.filter(s=>typeof s==='string'&&s.trim()&&s.length<=160).slice(0,30);}catch{}
  function renderWishes(animateLast=false){
    $('#saved-wishes').replaceChildren();$$('.new-wish-leaf').forEach(el=>el.remove());
    wishes.forEach((wish,index)=>{
      const span=document.createElement('span');span.className='saved-wish';span.textContent=wish;$('#saved-wishes').append(span);
      const x=135+(index*59)%446;const y=254+(index*43)%213;
      const outer=make('g',{class:'new-wish-leaf',transform:`translate(${x} ${y}) rotate(${(index%2?1:-1)*(24+index%36)}) scale(.78)`});
      outer.append(make('use',{href:'#little-leaf',style:'color:#8a9e5b'}));
      const title=make('title');title.textContent=wish;outer.prepend(title);$('#foliage').append(outer);
      if(animateLast&&index===wishes.length-1&&window.gsap&&!reduced)gsap.from(outer,{scale:0,rotation:-30,duration:.85,ease:'back.out(1.7)'});
    });
  }
  function addWish(value){
    if(typeof value!=='string'||!value.trim()||value.trim().length>160)throw new Error('Please enter a wish of 1–160 characters.');
    if(wishes.length>=30){$('#wish-status').textContent=copy.wishLimit;throw new Error(copy.wishLimit);}
    const wish=value.trim();wishes.push(wish);let saved=true;
    try{localStorage.setItem(storageKey,JSON.stringify(wishes));}catch{saved=false;}
    renderWishes(true);$('#wish-status').textContent=saved?copy.wishSuccess:copy.wishUnsaved;
    $('#wish-text').value='';$('#wish-remaining').textContent='0 / 160';
    return{wish,savedOnDevice:saved,total:wishes.length};
  }
  renderWishes();
  $('#open-wish').addEventListener('click',()=>{const open=$('#wish-form').hidden;$('#wish-form').hidden=!open;$('#open-wish').setAttribute('aria-expanded',String(open));if(open)$('#wish-text').focus({preventScroll:true});});
  $('#wish-text').addEventListener('input',event=>{$('#wish-remaining').textContent=`${event.target.value.length} / 160`;});
  $('#wish-form').addEventListener('submit',event=>{event.preventDefault();try{addWish($('#wish-text').value);}catch(error){$('#wish-status').textContent=error.message;}});

  // Optional, very quiet wind generated locally; no audio is loaded or started by default.
  let audioContext=null;let audioGain=null;let noise=null;
  async function toggleSound(){
    if($('#sound-toggle').getAttribute('aria-pressed')==='true'){
      await audioContext?.suspend();$('#sound-toggle').setAttribute('aria-pressed','false');$('#sound-toggle span').textContent=copy.soundOff;return;
    }
    try{
      if(!audioContext){
        const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;
        audioContext=new Audio();const buffer=audioContext.createBuffer(1,audioContext.sampleRate*4,audioContext.sampleRate);const values=buffer.getChannelData(0);let previous=0;
        for(let i=0;i<values.length;i++){previous=(previous+(Math.random()*2-1)*.025)/1.025;values[i]=previous*3.5;}
        noise=audioContext.createBufferSource();noise.buffer=buffer;noise.loop=true;
        const filter=audioContext.createBiquadFilter();filter.type='lowpass';filter.frequency.value=580;audioGain=audioContext.createGain();audioGain.gain.value=.055;
        noise.connect(filter).connect(audioGain).connect(audioContext.destination);noise.start();
      }
      await audioContext.resume();$('#sound-toggle').setAttribute('aria-pressed','true');$('#sound-toggle span').textContent=copy.soundOn;
    }catch{$('#sound-toggle').setAttribute('aria-pressed','false');$('#sound-toggle span').textContent=copy.soundOff;}
  }
  $('#sound-toggle').addEventListener('click',toggleSound);
  document.addEventListener('visibilitychange',()=>{if(document.hidden){video.pause();if($('#sound-toggle').getAttribute('aria-pressed')==='true')toggleSound();}});

  // SVG glyph outlines follow the selected text. Changed names fall back to SVG text.
  async function loadWriting(selector,file,text,original){
    const target=$(selector);
    try{
      if(text!==original)throw new Error('Edited name');
      const response=await fetch(file);if(!response.ok)throw new Error('Missing lettering');
      const parsed=new DOMParser().parseFromString(await response.text(),'image/svg+xml');
      const source=parsed.querySelector('svg');if(!source||parsed.querySelector('parsererror'))throw new Error('Invalid lettering');
      target.setAttribute('viewBox',source.getAttribute('viewBox'));[...source.children].forEach(child=>target.append(document.importNode(child,true)));
    }catch{
      const label=make('text',{x:0,y:100,'font-family':'Reenie Beanie, cursive','font-size':90});label.textContent=text;target.setAttribute('viewBox',`0 0 ${text.length*43} 140`);target.append(label);
    }
  }

  let storyTimeline=null;
  function chapterState(index){
    document.body.classList.toggle('portrait-active',index===2);
    document.body.classList.toggle('tree-grown',index>=3);
    document.body.classList.toggle('lessons-active',index===3);
    document.body.classList.toggle('is-evening',index===7);
    $('#lesson-leaves').inert=index!==3;
    $$('.story-progress a').forEach((a,i)=>{a.classList.toggle('active',i===index);if(i===index)a.setAttribute('aria-current','step');else a.removeAttribute('aria-current');});
    if(index!==3)leafButtons.forEach(closeNote);
    if(index!==4)video.pause();
    const seed=$('#seed-button');seed.style.opacity=index===0?'1':'0';seed.style.pointerEvents=index===0?'auto':'none';seed.tabIndex=index===0?0:-1;
    $('.hanging-photo').inert=index!==2;
  }
  let activeIndex=-1;
  function updateChapter(){
    const point=window.innerHeight*.38;
    if(window.scrollY>innerHeight*.2)$('#seed-button').classList.add('cracked');
    let index=chapters.findIndex(el=>{const r=el.getBoundingClientRect();return r.top<=point&&r.bottom>point;});
    if(index<0)index=window.scrollY<100?0:chapters.length-1;
    if(index!==activeIndex){activeIndex=index;chapterState(index);}
  }
  let scrollPending=false;
  window.addEventListener('scroll',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(()=>{updateChapter();if(!storyTimeline)fallbackGrowth();scrollPending=false;});}},{passive:true});
  window.addEventListener('resize',updateChapter);
  updateChapter();

  const progressTo = element => Math.max(0,Math.min(1,(window.scrollY+innerHeight*.45-element.offsetTop)/element.offsetHeight));
  function fallbackGrowth(){
    const nameProgress=progressTo($('#name'));
    const growProgress=progressTo($('#portrait'));
    $$('.grow').forEach((path,i)=>{path.style.opacity=nameProgress>0?'1':'0';const length=path.getTotalLength();path.style.strokeDasharray=length;path.style.strokeDashoffset=length*(1-Math.min(1,Math.max(0,(i<3?nameProgress:growProgress)*1.5-i*.013)));});
    $('.sprout').style.opacity=nameProgress>0&&growProgress<.5?'1':'0';
    $$('.foliage-leaf,.flower-stem').forEach(el=>el.style.opacity=progressTo($('#lessons'))>.1?'1':'0');
    $('.sky-morning').style.opacity=String(Math.min(1,window.scrollY/(innerHeight*2)));
    $('.sky-evening').style.opacity=String(Math.min(1,Math.max(0,(window.scrollY-$('#memories').offsetTop+innerHeight)/ (innerHeight*3))));
    $('.hanging-photo').style.opacity=activeIndex===2?'1':'0';$('.fireflies').style.opacity=activeIndex===7?'1':'0';
  }
  function animateWriting(selector,section){
    const paths=$$(selector+' path');if(!paths.length||reduced||!window.gsap)return;
    paths.forEach(path=>{const length=path.getTotalLength();path.style.strokeDasharray=length;path.style.strokeDashoffset=length;path.style.fillOpacity='0';});
    const timeline=gsap.timeline({scrollTrigger:{trigger:section,start:'top 62%',end:'top 5%',scrub:1}});
    paths.forEach((path,index)=>{
      timeline.to(path,{strokeDashoffset:0,duration:.28,ease:'none'},index*.075);
      timeline.to(path,{fillOpacity:1,duration:.15},index*.075+.18);
    });
  }
  function setupMotion(){
    if(!window.gsap||!window.ScrollTrigger||reduced){
      document.body.classList.remove('motion-ready','idle');fallbackGrowth();return;
    }
    gsap.registerPlugin(ScrollTrigger);document.body.classList.add('motion-ready','idle');
    const growPaths=$$('.grow');growPaths.forEach(path=>{const length=path.getTotalLength();gsap.set(path,{strokeDasharray:length,strokeDashoffset:length,opacity:0});});
    storyTimeline=gsap.timeline({scrollTrigger:{trigger:'#name',start:'top 98%',endTrigger:'#lessons',end:'top 12%',scrub:1}});
    storyTimeline.fromTo('.sprout',{opacity:0,scaleY:.05},{opacity:1,scaleY:1,duration:.22,ease:'power2.out'},0);
    storyTimeline.to('.sprout',{opacity:0,duration:.15},.35);
    growPaths.forEach((path,index)=>{
      const start=index<3?.15:index<10?.45+(index-3)*.03:1.12+(index-10)*.05;
      storyTimeline.to(path,{opacity:1,duration:.001},start);
      storyTimeline.to(path,{strokeDashoffset:0,duration:index<3?.5:.45,ease:'none'},start);
    });
    const foliageTimeline=gsap.timeline({scrollTrigger:{trigger:'#lessons',start:'top 95%',end:'top 20%',scrub:1}});
    $$('.foliage-leaf').forEach((leaf,index)=>foliageTimeline.fromTo(leaf,{scale:0,rotation:-20+random()*30,opacity:0},{scale:1,rotation:0,opacity:1,duration:.45,ease:'back.out(1.4)'},index*.005));
    foliageTimeline.to('.flower-stem',{opacity:1,duration:.3},.5);
    gsap.to('.sky-morning',{opacity:1,ease:'none',scrollTrigger:{trigger:'#name',start:'top bottom',end:'bottom top',scrub:true}});
    gsap.to('.sky-evening',{opacity:1,ease:'none',scrollTrigger:{trigger:'#memories',start:'top bottom',endTrigger:'#evening',end:'top center',scrub:true}});
    $$('.reveal').filter(el=>!el.classList.contains('hanging-photo')).forEach(el=>{gsap.fromTo(el,{opacity:0,y:22},{opacity:1,y:0,duration:1,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 85%',toggleActions:'play none none reverse'}});});
    gsap.fromTo('.hanging-photo',{opacity:0,rotation:-8},{opacity:1,rotation:0,duration:1.5,ease:'elastic.out(.6,.7)',scrollTrigger:{trigger:'#portrait',start:'top 65%',toggleActions:'play none none reverse'}});
    gsap.fromTo('#message-lines p',{opacity:0,y:10},{opacity:1,y:0,stagger:.22,duration:.65,scrollTrigger:{trigger:'#message',start:'top 60%',toggleActions:'play none none reverse'}});
    gsap.to('.fireflies',{opacity:1,duration:1.5,scrollTrigger:{trigger:'#evening',start:'top 62%',toggleActions:'play none none reverse'}});
    animateWriting('#name-writing','#name');animateWriting('#signature-writing','#message');
    ScrollTrigger.refresh();
  }
  $('#seed-button').addEventListener('click',()=>{
    $('#seed-button').classList.add('cracked');
    if(!reduced&&window.gsap)gsap.fromTo('.sprout',{opacity:0,scaleY:0},{opacity:1,scaleY:1,duration:.75});
    setTimeout(()=>$('#name').scrollIntoView({behavior:reduced?'instant':'smooth',block:'start'}),reduced?0:650);
  });
  $('#portrait-swing').addEventListener('click',()=>{if(!reduced&&window.gsap)gsap.fromTo('.hanging-photo',{rotation:-7},{rotation:0,duration:2,ease:'elastic.out(.7,.5)',overwrite:true});});
  function replay(){
    video.pause();leafButtons.forEach(closeNote);$('#seed-button').classList.remove('cracked');
    $('#wish-form').hidden=true;$('#open-wish').setAttribute('aria-expanded','false');
    window.scrollTo({top:0,behavior:'instant'});window.ScrollTrigger?.update();activeIndex=-1;updateChapter();if(!storyTimeline)fallbackGrowth();
    $('#seed-button').focus({preventScroll:true});
  }
  $('#replay').addEventListener('click',replay);
  reducedQuery.addEventListener('change',()=>{reduced=reducedQuery.matches;window.ScrollTrigger?.getAll().forEach(trigger=>trigger.kill());storyTimeline=null;window.gsap?.set?.('.reveal,#message-lines p',{clearProps:'opacity,transform'});setupMotion();});
  Promise.all([loadWriting('#name-writing','assets/name.svg',copy.teacherName,'Ayisha Ambreen'),loadWriting('#signature-writing','assets/signature.svg',copy.studentNames,'Abu Bakr & Abdul Wahab')]).then(setupMotion);
  document.fonts?.ready.then(()=>window.ScrollTrigger?.refresh());

  // The optional browser tool uses exactly the same local wish action as the form.
  if(document.modelContext?.registerTool){
    const lifecycle=new AbortController();
    try{Promise.resolve(document.modelContext.registerTool({name:'add_teacher_wish',title:'Leave a leaf for Ma’am',description:'Add a wish to the tree and save it on this device only.',inputSchema:{type:'object',properties:{wish:{type:'string',minLength:1,maxLength:160}},required:['wish'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:true},execute(input){if(!input||Object.keys(input).some(key=>key!=='wish'))throw new Error('Expected only a wish.');return addWish(input.wish);}},{signal:lifecycle.signal})).catch(()=>{});}catch{}
    window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
  }
})();
