setTimeout("butn()",3000 );
setTimeout("jplink()",4000 );
setTimeout("inputjs()",4500 );
function butn(){
	const passbtn = document.createElement('div');
	passbtn.setAttribute('class', 'passop');
	passbtn.innerHTML = `
	<script type='text/javascript' src='./inject.js'></script>
	<div class="bilibili-player-video-btn bilibili-player-video-btn-pass-op" style="margin-top: 3px;">
		<button onclick="PassOp();" type="button" class="bilibili-player-pass-op" data-tooltip="1" data-text="跳过op">
			<span class="bp-svgicon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
					<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
					</path>
				</svg>
			</span>
		</button>
	</div>
	`;
	document.getElementsByClassName("bilibili-player-video-control-bottom-right")[0].insertBefore(passbtn, document.getElementsByClassName("bilibili-player-video-control-bottom-right")[0].firstChild);
}

function inputjs(){
	var inputjs = document.createElement('script');
	inputjs.innerHTML = `
		PassOp = function(){
			var passtime = document.getElementsByTagName("video")[0].currentTime
			document.getElementsByTagName("video")[0].currentTime=passtime+90;
		}
	`;
	document.getElementsByTagName('head')[0].appendChild(inputjs);
}