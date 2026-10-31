'use strict';
const $=id=>document.getElementById(id), sceneNames=['全部','通勤','驾驶','健身','阅读','休息'];
let scene='全部',stage='',onlyFav=false,timer;
function read(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
let favorites=read('music-room-favorites-v1',[]);if(!Array.isArray(favorites))favorites=[];
let mode=read('music-room-link-mode','data');if(!['data','path'].includes(mode))mode='data';$('mode').value=mode;
function toast(t){$('status').textContent=t;clearTimeout(timer);timer=setTimeout(()=>$('status').textContent='',4200)}
function save(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch{toast('浏览器未允许保存；本次选择仅临时有效。')}}
function link(s){return mode==='path'?'lxmusic://music/searchPlay/'+encodeURIComponent(s.title+'-'+s.artist):'lxmusic://music/searchPlay?data='+encodeURIComponent(JSON.stringify({name:s.title,singer:s.artist}));}
function el(tag,text,cls){const e=document.createElement(tag);if(text)e.textContent=text;if(cls)e.className=cls;return e}
function render(){
 $('scenes').replaceChildren(...sceneNames.map(n=>{const b=el('button',n,n===scene?'active':'');b.setAttribute('aria-pressed',String(n===scene));b.onclick=()=>{scene=n;stage='';render()};return b}));
 $('stages').replaceChildren(...(scene==='健身'?['','热身','力量','有氧','冲刺'].map(n=>{const b=el('button',n||'全部训练',stage===n?'active':'');b.onclick=()=>{stage=n;render()};return b}):[]));
 const q=$('query').value.trim().toLowerCase(),style=$('style').value;
 const rows=songs.filter(s=>(scene==='全部'||s.scenes.includes(scene))&&(!stage||s.stage===stage)&&(!onlyFav||favorites.includes(s.id))&&(!style||s.style.includes(style))&&[s.title,s.artist,s.style].join(' ').toLowerCase().includes(q));
 $('heading').textContent=(onlyFav?'我的收藏':scene==='全部'?'音乐书架':scene)+(stage?' · '+stage:'')+' / '+rows.length+' 首';
 $('favorites').classList.toggle('active',onlyFav);$('favorites').setAttribute('aria-pressed',String(onlyFav));
 $('list').replaceChildren(...rows.map(s=>{const a=el('article',null,'song'),top=el('div',null,'top'),info=el('div');info.append(el('div',s.scenes.join(' / ')+(s.stage?' · '+s.stage:''),'tag'),el('h3',s.title),el('p',s.artist+' · '+s.style));
 const f=el('button',favorites.includes(s.id)?'♥':'♡','fav');f.setAttribute('aria-label','收藏 '+s.title);f.setAttribute('aria-pressed',String(favorites.includes(s.id)));f.onclick=()=>{favorites=favorites.includes(s.id)?favorites.filter(i=>i!==s.id):[...favorites,s.id];save('music-room-favorites-v1',favorites);render()};top.append(info,f);a.append(top);if(s.note)a.append(el('p',s.note));
 const actions=el('div',null,'actions'),play=el('a','▶ 洛雪播放','play');play.href=link(s);play.onclick=()=>toast('已发起洛雪跳转；若无响应，可切换备用链接或复制歌名。');
 const copy=el('button','复制歌名');copy.onclick=async()=>{const v=s.title+' '+s.artist;try{await navigator.clipboard.writeText(v);toast('已复制歌名和艺人')}catch{window.prompt('复制后到洛雪搜索',v)}};actions.append(play,copy);a.append(actions);return a}));if(!rows.length)$('list').append(el('p','暂时没有匹配的歌曲，试试其他场景或关键词。'));
}
$('query').oninput=render;$('style').onchange=render;$('favorites').onclick=()=>{onlyFav=!onlyFav;render()};$('mode').onchange=()=>{mode=$('mode').value;save('music-room-link-mode',mode);render()};
$('export').onclick=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify({version:1,favorites},null,2)],{type:'application/json'}));const a=el('a');a.href=url;a.download='music-room-favorites.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
$('import').onclick=()=>$('importFile').click();$('importFile').onchange=async e=>{try{const file=e.target.files[0];if(!file)return;if(file.size>100000)throw Error();const data=JSON.parse(await file.text());if(data.version!==1||!Array.isArray(data.favorites))throw Error();const ids=new Set(songs.map(s=>s.id));favorites=[...new Set([...favorites,...data.favorites.filter(id=>ids.has(id))])];save('music-room-favorites-v1',favorites);render();toast('已合并导入收藏')}catch{toast('文件格式不正确，请选择本音乐馆导出的收藏文件。')}e.target.value=''};
render();
