
// --------------------------------------------------------------------------------------------
// freshTilledSoil_WebRTC - Initialization
// --------------------------------------------------------------------------------------------
/**
 * Initialization function for the embeded webrtc widget
 * IMPORTANT - THIS VERSION IS SPECIFIC TO EMBEDDING WEBRTC AND SHOULD ONLY BE USED WITH
 * THE EMBED CODE SNIPPET.  EXAMPLE SNIPPET BELOW:
 *
 * 		<!-- Begin Fresh Tilled Soil Video Chat Embed Code -->
 * 		<div id="freshtilledsoil_embed_widget" class="video-chat-widget"></div>
 * 		<script src="http://freshtilledsoil.com/embed/webrtc-v5.js?r=FTS0311-h31T66cz"></script>
 * 		<!-- End Fresh Tilled Soil Video Chat Embed Code -->

 * Author: Paul Greenlea
 * Company: Fresh Tilled Soil
 * Date: Tue, Apr 23, 2013
 * Version: 5.5
 */
(function(){var e=false,t=false,n=false;e=/chrome/.test(navigator.userAgent.toLowerCase());t=/safari/.test(navigator.userAgent.toLowerCase());n=/firefox/.test(navigator.userAgent.toLowerCase());t=e?false:true;if(e&&!t||n){var r=function(){function e(){var e=document.getElementById("freshtilledsoil_embed_widget");var t="";t+='<section class="status-panel">';t+='<div id="connectionIndicator" style="visibility:hidden;" class="connected-indicator">CONNECTED</div>';t+='<div class="status-text"><span id="currentChannel">channel</span><br><a href="#" class="exit-link" id="aExitLink">(click to exit channel)</a></div>';t+='<div class="status-text occupant-count-text">peers: <span id="numberOfOccupants">0</span></div>';t+='</section><div id="fts_card" style="opacity:0;-webkit-transition-duration: 0s;-moz-transition-duration: 0s;-o-transition-duration: 0s;transition-duration: 0s;">';t+='<figure class="fts-front">';t+='<form id="channelEntryForm" class="entry-box">';t+='<div class="channel-input-container">';t+='<input type="text" id="channel" class="channel-input" placeholder="enter channel name">';t+='<input id="btnStartChat" class="btn-start-chat" type="submit" value="Start Chat">';t+='<div class="brought-to-you-by">Brought to you by <a href="http://freshtilledsoil.com" target="_blank">fresh tilled soil</a></div>';t+='</div><div id="RTCMessagingDiv" class="waiting-text"></div></form>';t+='</figure><figure class="fts-back"><video id="remotevid" class="remote-vid" autoplay></video>';t+='<section class="local-video-container">';t+='<video id="sourcevid" class="source-vid" autoplay></video>';t+="</section></figure></div>";e.innerHTML=t;window.setTimeout(function(){document.getElementById("fts_card").removeAttribute("style")},100)}function t(e){var t=document.createElement("link");t.setAttribute("rel","stylesheet");t.setAttribute("type","text/css");t.setAttribute("href",e);document.getElementsByTagName("head")[0].appendChild(t)}function u(e){e.preventDefault();n=document.getElementById("channel").value;if(n.length<=0){return false}else{document.getElementById("btnStartChat").focus()}o.innerHTML=n;s.addClassName("waiting");webRTC_1=new i({elPeerCount:document.getElementById("numberOfOccupants"),socketServerRoomName:n})}e();t("http://freshtilledsoil.com/embed/freshTilledSoil-webRTC-5.5.css");var n;var r=document.getElementById("channel");var s=document.getElementById("channelEntryForm");var o=document.getElementById("currentChannel");s.addEventListener("submit",u,false)};window.addEventListener("DOMContentLoaded",r,false);var i=function(e){function x(e){e=e||window.event;if(e.preventDefault)e.preventDefault();e.returnValue=false}function T(e){for(var t=i.length;t--;){if(e.keyCode===i[t]){x(e);return}}}function N(e){for(var t=o.length;t--;){if(e.keyCode===o[t]){x(e);return}}}function C(e){x(e)}function k(){document.onselectstart=function(){return false};document.onmousedown=function(){return false}}function L(){document.onselectstart=null;document.onmousedown=null}function A(){if(window.addEventListener){window.addEventListener("DOMMouseScroll",C,false)}window.onmousewheel=document.onmousewheel=C;document.onkeydown=T}function O(){if(window.addEventListener){window.addEventListener("DOMMouseScroll",C,false)}window.onmousewheel=document.onmousewheel=C;document.onkeydown=N}function M(){if(window.removeEventListener){window.removeEventListener("DOMMouseScroll",C,false)}window.onmousewheel=document.onmousewheel=document.onkeydown=null}function _(e){var t=document.getElementById("RTCMessagingDiv");var n,r;n='<span style="font-size: 1.5em;">channel: <span id="channelName">'+""+m.SETTINGS.socketServerRoomName+"</span></span><br><br>"+"waiting for another peer to join...<br><br>"+'<a href="#" class="exit-link-2" onclick="webRTC_1.cancelCall();return false;">'+"(click to exit channel)</a>";r='<span style="font-size: 1.5em;">channel: <span id="channelName">'+""+m.SETTINGS.socketServerRoomName+"</span></span><br><br>"+"peer found establishing connection...<br><br>"+'<a href="#" class="exit-link-2" onclick="webRTC_1.cancelCall();return false;">'+"(click to exit channel)</a>";t.innerHTML=e==1?n:r}function D(){function e(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return e()+e()+e()}function P(){var e={};var n=t.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(t,n,r){e[n]=r});return e}function H(e){var t=JSON.stringify(e);console.log("SENDING SIGNALING --> "+t);console.log("<-- END OF SIGNALING");c.send(t)}function B(){try{console.log("Creating peer connection");d=new PeerConnection(location.search.indexOf("turn=true")!==-1||m.SETTINGS.isTURN?m.SETTINGS.turnServer:m.SETTINGS.stunServer,m.SETTINGS.optionalDataChannel);d.onicecandidate=z}catch(e){console.log("Failed to create PeerConnection, exception: "+e.message)}d.onaddstream=j;d.onremovestream=U}function j(e){console.log("Got on remote stream type: "+e.type);m.SETTINGS.remoteVideo[r?"mozSrcObject":"src"]=r?e.stream:t.webkitURL.createObjectURL(e.stream);m.SETTINGS.remoteVideo.play();p=e.stream;console.log(e);setTimeout(I(),350)}function F(){if(m.SETTINGS.sourceVideo.currentTime>0||m.SETTINGS.sourceVideo.readyState>1){console.log("local video streaming...");m.connectToSignalingSocket(m.SETTINGS.socketServerAddress,m.room,m.r)}else{console.log("waiting for local video...");setTimeout(F,100)}}function I(){if(m.SETTINGS.remoteVideo.currentTime>0||m.SETTINGS.remoteVideo.readyState>1){console.log("remote video streaming...");q()}else{console.log("waiting for remote video...");if(l){setTimeout(I,100)}}}function q(){var e=document.getElementById("freshtilledsoil_embed_widget");var t=ut(e);var n=document.createElement("div");n.setAttribute("id","ftsOverlay");n.setAttribute("class","fts-overlay");document.body.appendChild(n);e.setAttribute("style","margin-top: "+ -(t.y+78)+"px;");O();k();if(!e.hasClassName("flipped")){e.toggleClassName("flipped");m.isFlipped=true}}function R(){var e=document.getElementById("freshtilledsoil_embed_widget");e.removeAttribute("style");M();L();if(document.getElementById("freshtilledsoil_embed_widget").hasClassName("flipped")){document.getElementById("freshtilledsoil_embed_widget").toggleClassName("flipped");m.isFlipped==false}document.body.removeChild(document.getElementById("ftsOverlay"))}function U(e){console.log("Remote stream removed");m.SETTINGS.remoteVideo.src=""}function z(e){if(e.candidate){console.log("onIceCandidate event object (below) -------------------->");console.log(e);console.log("<-------------------- end of onIceCandidate event object (above)");H({type:"candidate",label:e.candidate.sdpMLineIndex,id:e.candidate.sdpMid,candidate:e.candidate.candidate})}else{console.log("End of candidates.")}}function W(e){console.log("RECEIVED: "+e.data);X(e.data)}function X(e){var t=JSON.parse(e);if(t.type==="offer"){if(!l&&h){B();it();console.log("Adding local stream...");d.addStream(h);l=true;console.log("isRTCPeerConnection: "+v);try{d.setRemoteDescription(new SessionDescription(t));console.log("Sending answer to peer.");d.createAnswer(Z,null,m.SETTINGS.mediaConstraints)}catch(n){console.log("Could not send create answer for Peer.  Error Code: "+n.message)}}else{console.log("waiting for local stream to process offer SDP");setTimeOut(X(e),100)}}else if(t.type==="answer"&&l){d.setRemoteDescription(new SessionDescription(t))}else if(t.type==="candidate"&&l){var r=new IceCandidate({sdpMLineIndex:t.label,candidate:t.candidate});d.addIceCandidate(r)}else if(t.type=="chat"){addChatMsg(t.nick,t.cid,t.data)}else if(t.type==="bye"&&l){G()}else if(t.type==="peerCount"){m.connectedPeers=t.data||0;if(typeof m.SETTINGS.elPeerCount=="object"){m.SETTINGS.elPeerCount.innerHTML=m.connectedPeers}m.isOfferer=parseInt(m.connectedPeers,10)<=1||m.isOfferer?true:false;m.isAnswerer=parseInt(m.connectedPeers,10)>1&&!m.isOfferer?true:false;console.log(m.isOfferer?"isOfferer":"isAnswerer");if(m.connectedPeers<=1){_(1)}else{if(m.connectedPeers>=2){if(m.isOfferer){K()}_(2)}}}else if(t.type==="readyForCall"){console.log("received message: readyForCall")}}function V(){try{console.log("obtaining local media stream");$(r?'<br>Click "Share Selected Devices"<br><br>to start local video stream':'<br>Please click "Allow"<br><br>to start local video stream');n.GetUserMedia({audio:true,video:true},function(e){console.log("Got local media stream");m.SETTINGS.sourceVideo[r?"mozSrcObject":"src"]=r?e:t.webkitURL.createObjectURL(e);m.SETTINGS.sourceVideo.play();h=e;F();$('<span style="font-size: 1.5em;">channel: '+'<span id="channelName">'+m.room+"</span></span>"+"<br><br>waiting for another peer to join...<br><br>"+'<a href="#" class="exit-link-2" onclick="window.location.reload(true);'+'return false;">(click to exit channel)</a>')},function(e){console.log("An error occurred: [CODE "+e.code+"]")})}catch(e){console.log("Unable to obtain local media stream; error code: "+e.message)}}function $(e){if(typeof m.SETTINGS.rtcMessagingDiv==="object"&&m.SETTINGS.rtcMessagingDiv!==null){m.SETTINGS.rtcMessagingDiv.innerHTML=e}}function J(){h.stop();m.SETTINGS.sourceVideo.src=""}function K(){if(!l&&h){it();B();console.log("Adding local stream...");d.addStream(h);l=true;console.log("isRTCPeerConnection: "+v);if(v){console.log("Sending offer to peer.");d.createOffer(Z,null,m.SETTINGS.mediaConstraints)}else{var e=d.createOffer(m.SETTINGS.mediaConstraints);d.setLocalDescription(d.SDP_OFFER,e);H({type:"offer",sdp:e.toSdp()});d.startIce()}}else{alert("You must 'initialize your' video before connecting...")}}function Q(){console.log("Hang up.");st();if(l){H({type:"bye"});Y()}}function G(){console.log("Remote Hang up.");st();Y();R()}function Y(){d.close();d=null;l=false;m.SETTINGS.remoteVideo.src=""}function Z(e){e.sdp=et(e.sdp);d.setLocalDescription(e);H(e)}function et(e){var t=e.split("\r\n");for(var n=0;n<t.length;n++){if(t[n].search("m=audio")!==-1){var r=n;break}}if(r===null)return e;for(var n=0;n<t.length;n++){if(t[n].search("opus/48000")!==-1){var i=tt(t[n],/:(\d+) opus\/48000/i);if(i)t[r]=nt(t[r],i);break}}t=rt(t,r);e=t.join("\r\n");return e}function tt(e,t){var n=e.match(t);return n&&n.length==2?n[1]:null}function nt(e,t){var n=e.split(" ");var r=new Array;var i=0;for(var s=0;s<n.length;s++){if(i===3)r[i++]=t;if(n[s]!==t)r[i++]=n[s]}return r.join(" ")}function rt(e,t){var n=e[t].split(" ");for(var r=e.length-1;r>=0;r--){var i=tt(e[r],/a=rtpmap:(\d+) CN\/\d+/i);if(i){var s=n.indexOf(i);if(s!==-1){n.splice(s,1)}e.splice(r,1)}}e[t]=n.join(" ");return e}function it(){m.SETTINGS.connectionIndicator.style.visibility="visible"}function st(){m.SETTINGS.connectionIndicator.style.visibility="hidden"}function ot(e,t){for(var n in e){if(e.hasOwnProperty(n)){if(t[n]==null){t[n]=e[n]}}}return t}function ut(e){var t=0;var n=0;while(e){t+=e.offsetLeft-e.scrollLeft+e.clientLeft;n+=e.offsetTop-e.scrollTop+e.clientTop;e=e.offsetParent}return{x:t,y:n}}var t=window,n=navigator,r=!!n.mozGetUserMedia;PeerConnection=t.mozRTCPeerConnection||t.webkitRTCPeerConnection,SessionDescription=t.mozRTCSessionDescription||t.RTCSessionDescription,n.GetUserMedia=n.webkitGetUserMedia||n.mozGetUserMedia,IceCandidate=t.mozRTCIceCandidate||t.RTCIceCandidate;var i=[37,38,39,40];var o=[32,33,34,35,36,37,38,39,40];var u=navigator.userAgent.toLowerCase();var a=u.indexOf("android")>-1;var f=true,l=false,c=null,h=null,p=null,d=null,v=true,m=this;var g;var y;var b;var w;myMid=Math.floor(Math.random()*1e5);myMid="'"+myMid+"'";g=document.getElementById("chatInputText");b="";w=document.getElementById("chatFrame");b.value="";this.DEFAULTS={elPeerCount:document.getElementById("numberOfOccupants"),rtcMessagingDiv:document.getElementById("RTCMessagingDiv"),isChannelMessage:false,isOfferer:false,isAnswerer:true,socketServerRoomName:null,socketServerAddress:"ws://209.20.89.197:1337/",isTURN:false,stunServer:{iceServers:[{url:!r?"stun:stun.l.google.com:19302":"stun:23,21,150,121"}]},turnServer:{iceServers:[{url:"turn:paul.greenlea%40freshtilledsoil.com@numb.viagenie.ca:3478",credential:"freshmountain"}]},optionalDataChannel:{optional:[]},connectionIndicator:document.getElementById("connectionIndicator"),sourceVideo:document.getElementById("sourcevid"),remoteVideo:document.getElementById("remotevid"),mediaConstraints:{mandatory:{OfferToReceiveAudio:true,OfferToReceiveVideo:true}},mediaConstraintsHd:{mandatory:{minHeight:960,minWidth:1280,maxAspectRatio:1.778,minAspectRatio:1.777,OfferToReceiveAudio:true,OfferToReceiveVideo:true}},mediaConstraintsLow:{mandatory:{maxHeight:180,maxWidth:240,maxAspectRatio:1.778,minAspectRatio:1.777,OfferToReceiveAudio:true,OfferToReceiveVideo:true}}};e=e||{};m.SETTINGS=ot(this.DEFAULTS,e);if(s.keyExists("res")&&!a){var E=s.get("res");if(E=="hd"||E=="hi"){m.SETTINGS.mediaConstraints=m.SETTINGS.mediaConstraintsHd;console.log("Set default media constraint to HD video resolution.")}else if(E=="low"){m.SETTINGS.mediaConstraints=m.SETTINGS.mediaConstraintsLow;console.log("Set default media constraint to low video resolution.")}}if(s.keyExists("turn")){var S=s.get("turn")||false;if(S){m.SETTINGS.isTURN=true}}if(!r){this.SETTINGS.optionalDataChannel.optional=[{DtlsSrtpKeyAgreement:true}];if(this.SETTINGS.isChannelMessage){this.SETTINGS.optionalDataChannel.optional=[{RtpDataChannels:true}]}}this.room=P()["room"]||m.SETTINGS.socketServerRoomName||"freshtilledsoil-"+D();this.r=document.getElementById("fts").getAttribute("src").split("r=");this.r=this.r[1];this.connectedPeers=0;this.isFlipped=false;document.getElementById("aExitLink").addEventListener("click",function(e){e.preventDefault(e);m.endCall()},false);this.endCall=function(){document.getElementById("channelEntryForm").className="entry-box";R();J();Y();m.disconnectFromSignalingSocket()};this.cancelCall=function(){document.getElementById("RTCMessagingDiv").innerHTML="";document.getElementById("channelEntryForm").className="entry-box";J();m.disconnectFromSignalingSocket()};this.connectToSignalingSocket=function(e,n,r){console.log("Connecting to signaling socket...");c=new WebSocket(e+"?room="+r+n+"&r="+r);console.log(r);c.addEventListener("message",W,false);t.onbeforeunload=function(){H({type:"bye"})}};this.disconnectFromSignalingSocket=function(){console.log("Disconnecting to signaling socket...");H({type:"bye"});c.removeEventListener("message",W,false);c.close();c=null;t.onbeforeunload=null};V()};var s=new function(){var e;this.set=function(t,n){e[t]=n;this.push()};this.remove=function(t,n){delete e[t];this.push()};this.get=function(t,n){return e[t]};this.keyExists=function(t){return e.hasOwnProperty(t)};this.push=function(){var t=[],n,r;for(n in e)if(e.hasOwnProperty(n)){n=escape(n),r=escape(e[n]);t.push(n+(r!=="undefined"?"="+r:""))}window.location.hash=t.join("&")};(this.load=function(){e={};var t=window.location.hash,n,r;t=t.substring(1,t.length);n=t.split("&");for(var i=0;i<n.length;i++){r=n[i].split("=");e[unescape(r[0])]=typeof r[1]!="undefined"?unescape(r[1]):r[1]}})()};Element.prototype.hasClassName=function(e){return(new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)")).test(this.className)};Element.prototype.addClassName=function(e){if(!this.hasClassName(e)){this.className=[this.className,e].join(" ")}};Element.prototype.removeClassName=function(e){if(this.hasClassName(e)){var t=this.className;this.className=t.replace(new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)","g")," ")}};Element.prototype.toggleClassName=function(e){this[this.hasClassName(e)?"removeClassName":"addClassName"](e)};window.Modernizr=function(e,t,n){function r(e,t){var n=e.charAt(0).toUpperCase()+e.substr(1),r=(e+" "+w.join(n+" ")+n).split(" ");return i(r,t)}function i(e,t){for(var r in e)if(m[e[r]]!==n)return t=="pfx"?e[r]:!0;return!1}function s(e,t){return!!~(""+e).indexOf(t)}function o(e,t){return typeof e===t}function u(e,t){return a(b.join(e+";")+(t||""))}function a(e){m.cssText=e}var f="2.0.6",l={},c=!0,h=t.documentElement,p=t.head||t.getElementsByTagName("head")[0],d="modernizr",v=t.createElement(d),m=v.style,g,y=Object.prototype.toString,b=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),w="Webkit Moz O ms Khtml".split(" "),E={},S={},x={},T=[],N=function(e,n,r,i){var s,o,u,a=t.createElement("div");if(parseInt(r,10))while(r--)u=t.createElement("div"),u.id=i?i[r]:d+(r+1),a.appendChild(u);s=["Â­","<style>",e,"</style>"].join(""),a.id=d,a.innerHTML+=s,h.appendChild(a),o=n(a,e),a.parentNode.removeChild(a);return!!o},C,k={}.hasOwnProperty,L;!o(k,n)&&!o(k.call,n)?L=function(e,t){return k.call(e,t)}:L=function(e,t){return t in e&&o(e.constructor.prototype[t],n)};var A=function(e,n){var r=e.join(""),i=n.length;N(r,function(e,n){var r=t.styleSheets[t.styleSheets.length-1],s=r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"",o=e.childNodes,u={};while(i--)u[o[i].id]=o[i];l.csstransforms3d=u.csstransforms3d.offsetLeft===9},i,n)}([,["@media (",b.join("transform-3d),("),d,")","{#csstransforms3d{left:9px;position:absolute}}"].join("")],[,"csstransforms3d"]);E.csstransforms3d=function(){var e=!!i(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);e&&"webkitPerspective"in h.style&&(e=l.csstransforms3d);return e};for(var O in E)L(E,O)&&(C=O.toLowerCase(),l[C]=E[O](),T.push((l[C]?"":"no-")+C));a(""),v=g=null,e.attachEvent&&function(){var e=t.createElement("div");e.innerHTML="<elem></elem>";return e.childNodes.length!==1}()&&function(e,t){function r(e){var t=-1;while(++t<u)e.createElement(o[t])}e.iepp=e.iepp||{};var i=e.iepp,s=i.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",o=s.split("|"),u=o.length,a=new RegExp("(^|\\s)("+s+")","gi"),f=new RegExp("<(/*)("+s+")","gi"),l=/^\s*[\{\}]\s*$/,c=new RegExp("(^|[^\\n]*?\\s)("+s+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),h=t.createDocumentFragment(),p=t.documentElement,d=p.firstChild,v=t.createElement("body"),m=t.createElement("style"),g=/print|all/,y;i.getCSS=function(e,t){if(e+""===n)return"";var r=-1,s=e.length,o,u=[];while(++r<s){o=e[r];if(o.disabled)continue;t=o.media||t,g.test(t)&&u.push(i.getCSS(o.imports,t),o.cssText),t="all"}return u.join("")},i.parseCSS=function(e){var t=[],n;while((n=c.exec(e))!=null)t.push(((l.exec(n[1])?"\n":n[1])+n[2]+n[3]).replace(a,"$1.iepp_$2")+n[4]);return t.join("\n")},i.writeHTML=function(){var e=-1;y=y||t.body;while(++e<u){var n=t.getElementsByTagName(o[e]),r=n.length,i=-1;while(++i<r)n[i].className.indexOf("iepp_")<0&&(n[i].className+=" iepp_"+o[e])}h.appendChild(y),p.appendChild(v),v.className=y.className,v.id=y.id,v.innerHTML=y.innerHTML.replace(f,"<$1font")},i._beforePrint=function(){m.styleSheet.cssText=i.parseCSS(i.getCSS(t.styleSheets,"all")),i.writeHTML()},i.restoreHTML=function(){v.innerHTML="",p.removeChild(v),p.appendChild(y)},i._afterPrint=function(){i.restoreHTML(),m.styleSheet.cssText=""},r(t),r(h);i.disablePP||(d.insertBefore(m,d.firstChild),m.media="print",m.className="iepp-printshim",e.attachEvent("onbeforeprint",i._beforePrint),e.attachEvent("onafterprint",i._afterPrint))}(e,t),l._version=f,l._prefixes=b,l._domPrefixes=w,l.testProp=function(e){return i([e])},l.testAllProps=r,l.testStyles=N,l.prefixed=function(e){return r(e,"pfx")},h.className=h.className.replace(/\bno-js\b/,"")+(c?" js "+T.join(" "):"");return l}(this,this.document),function(e,t,n){function r(e){return!e||e=="loaded"||e=="complete"}function i(){var e=1,t=-1;while(v.length- ++t)if(v[t].s&&!(e=v[t].r))break;e&&u()}function s(e){var n=t.createElement("script"),s;n.src=e.s,n.onreadystatechange=n.onload=function(){!s&&r(n.readyState)&&(s=1,i(),n.onload=n.onreadystatechange=null)},h(function(){s||(s=1,i())},D.errorTimeout),e.e?n.onload():p.parentNode.insertBefore(n,p)}function o(e){var n=t.createElement("link"),r;n.href=e.s,n.rel="stylesheet",n.type="text/css";if(!e.e&&(S||g)){var s=function(e){h(function(){if(!r)try{e.sheet.cssRules.length?(r=1,i()):s(e)}catch(t){t.code==1e3||t.message=="security"||t.message=="denied"?(r=1,h(function(){i()},0)):s(e)}},0)};s(n)}else n.onload=function(){r||(r=1,h(function(){i()},0))},e.e&&n.onload();h(function(){r||(r=1,i())},D.errorTimeout),!e.e&&p.parentNode.insertBefore(n,p)}function u(){var e=v.shift();m=1,e?e.t?h(function(){e.t=="c"?o(e):s(e)},0):(e(),i()):m=0}function a(e,n,s,o,a,f){function l(){!d&&r(c.readyState)&&(g.r=d=1,!m&&i(),c.onload=c.onreadystatechange=null,h(function(){w.removeChild(c)},0))}var c=t.createElement(e),d=0,g={t:s,s:n,e:f};c.src=c.data=n,!y&&(c.style.display="none"),c.width=c.height="0",e!="object"&&(c.type=s),c.onload=c.onreadystatechange=l,e=="img"?c.onerror=l:e=="script"&&(c.onerror=function(){g.e=g.r=1,u()}),v.splice(o,0,g),w.insertBefore(c,y?null:p),h(function(){d||(w.removeChild(c),g.r=g.e=d=1,i())},D.errorTimeout)}function f(e,t,n){var r=t=="c"?N:T;m=0,t=t||"j",L(e)?a(r,e,t,this.i++,c,n):(v.splice(this.i++,0,e),v.length==1&&u());return this}function l(){var e=D;e.loader={load:f,i:0};return e}var c=t.documentElement,h=e.setTimeout,p=t.getElementsByTagName("script")[0],d={}.toString,v=[],m=0,g="MozAppearance"in c.style,y=g&&!!t.createRange().compareNode,b=g&&!y,w=y?c:p.parentNode,E=e.opera&&d.call(e.opera)=="[object Opera]",S="webkitAppearance"in c.style,x=S&&"async"in t.createElement("script"),T=g?"object":E||x?"img":"script",N=S?"img":T,C=Array.isArray||function(e){return d.call(e)=="[object Array]"},k=function(e){return Object(e)===e},L=function(e){return typeof e=="string"},A=function(e){return d.call(e)=="[object Function]"},O=[],M={},_,D;D=function(e){function t(e){var t=e.split("!"),n=O.length,r=t.pop(),i=t.length,s={url:r,origUrl:r,prefixes:t},o,u;for(u=0;u<i;u++)o=M[t[u]],o&&(s=o(s));for(u=0;u<n;u++)s=O[u](s);return s}function r(e,r,i,s,o){var u=t(e),a=u.autoCallback;if(!u.bypass){r&&(r=A(r)?r:r[e]||r[s]||r[e.split("/").pop().split("?")[0]]);if(u.instead)return u.instead(e,r,i,s,o);i.load(u.url,u.forceCSS||!u.forceJS&&/css$/.test(u.url)?"c":n,u.noexec),(A(r)||A(a))&&i.load(function(){l(),r&&r(u.origUrl,o,s),a&&a(u.origUrl,o,s)})}}function i(e,t){function n(e){if(L(e))r(e,u,t,0,i);else if(k(e))for(a in e)e.hasOwnProperty(a)&&r(e[a],u,t,a,i)}var i=!!e.test,s=i?e.yep:e.nope,o=e.load||e.both,u=e.callback,a;n(s),n(o),e.complete&&t.load(e.complete)}var s,o,u=this.yepnope.loader;if(L(e))r(e,0,u,0);else if(C(e))for(s=0;s<e.length;s++)o=e[s],L(o)?r(o,0,u,0):C(o)?D(o):k(o)&&i(o,u);else k(e)&&i(e,u)},D.addPrefix=function(e,t){M[e]=t},D.addFilter=function(e){O.push(e)},D.errorTimeout=1e4,t.readyState==null&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",_=function(){t.removeEventListener("DOMContentLoaded",_,0),t.readyState="complete"},0)),e.yepnope=l()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))}}else{console.log("Fresh Tilled Soil video chat widget is currently supported in Google Chrome & Mozilla FireFox only...widget not initialized.")}})()