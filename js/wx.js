var shareNum = '';
window.share = {
	imgUrl: window.location.origin + window.location.pathname + '/img/share.jpg',
	link: window.location.origin + window.location.pathname,
	title: "你是哪一类？美丽女神or运动女神",
	desc1: "你是哪一类？美丽女神or运动女神"
};


$.ajax({
	url: "http://wechat.hola.com.cn/backend/jsconfig.json",
	contentType: "application/json; charset=utf-8",
	type: "POST",
	dataType: "jsonp",
	data: {
		url: window.location.origin + window.location.pathname + window.location.search,
		shortUrl: 'hola'
	},
	success: function(response) {
		// alert(window.location.pathname)
		// alert(window.location.origin)
		// alert(response);

		console.log(response)
		wx.config({
			debug: false,
			appId: response.appId,
			timestamp: response.timestamp,
			nonceStr: response.nonceStr,
			signature: response.signature,
			jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'showOptionMenu']
		});
		wx.ready(function() {
			// 1 判断当前版本是否支持指定 JS 接口，支持批量判断
			//document.querySelector('#checkJsApi').onclick = function() {
            document.getElementById("audio").play();
			wx.checkJsApi({
				jsApiList: ['getNetworkType', 'previewImage', 'onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'showOptionMenu'],
				success: function(res) {
					//alert(JSON.stringify(res));

				}
			});
			changeShare();
			//};

			// 2. 分享接口
			// 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
			//document.querySelector('#onMenuShareAppMessage').onclick = function () {

		});

		wx.error(function(res) {
			alert(res.errMsg);
		});
	}
});

function changeShare() {
	wx.onMenuShareAppMessage({
		title: window.share.title,
		desc: window.share.desc1,
		link: window.share.link,
		imgUrl: window.share.imgUrl,
		trigger: function(res) {
			console.log('用户点击发送给朋友');
			//alert(window.share.link);
		},
		success: function(res) {
			console.log('已分享');

		},
		cancel: function(res) {
			console.log('已取消');
		},
		fail: function(res) {
			console.log(JSON.stringify(res));
		}
	});
	//console.log('已注册获取“发送给朋友”状态事件');
	// };

	// 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
	//document.querySelector('#onMenuShareTimeline').onclick = function() {
	wx.onMenuShareTimeline({
		title: window.share.title,
        desc: window.share.desc1,
		link: window.share.link,
		imgUrl: window.share.imgUrl,
		trigger: function(res) {
			console.log('用户点击分享到朋友圈');
			//alert(window.share.link);
		},
		success: function(res) {
			console.log('已分享');

		},
		cancel: function(res) {
			console.log('已取消');
		},
		fail: function(res) {
			console.log(JSON.stringify(res));
		}
	});
	//console.log('已注册获取“分享到朋友圈”状态事件');
	//};

	// 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
	//document.querySelector('#onMenuShareQQ').onclick = function() {
	wx.onMenuShareQQ({
		title: window.share.title,
		desc: window.share.desc1,
		link: window.share.link,
		imgUrl: window.share.imgUrl,
		trigger: function(res) {
			console.log('用户点击分享到QQ');
		},
		complete: function(res) {
			console.log(JSON.stringify(res));
		},
		success: function(res) {
			console.log('已分享');

		},
		cancel: function(res) {
			console.log('已取消');
		},
		fail: function(res) {
			console.log(JSON.stringify(res));
		}
	});
	////console.log('已注册获取“分享到 QQ”状态事件');
	//	};

	// 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
	//document.querySelector('#onMenuShareWeibo').onclick = function() {
	wx.onMenuShareWeibo({
		title: window.share.title,
		desc: window.share.desc1,
		link: window.share.link,
		imgUrl: window.share.imgUrl,
		trigger: function(res) {
			console.log('用户点击分享到微博');
		},
		complete: function(res) {
			console.log(JSON.stringify(res));
		},
		success: function(res) {
			console.log('已分享');

		},
		cancel: function(res) {
			console.log('已取消');
		},
		fail: function(res) {
			console.log(JSON.stringify(res));
		}
	});
	//console.log('已注册获取“分享到微博”状态事件');
	//};
	/*var shareData = {
	 title : window.share.title,
	 desc : window.share.desc1,
	 link : window.share.link,
	 imgUrl : window.share.imgUrl,
	 };
	 wx.onMenuShareAppMessage(shareData);
	 wx.onMenuShareTimeline(shareData);*/
	wx.showOptionMenu();
}