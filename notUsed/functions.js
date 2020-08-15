// 要素を垂直移動させるファンクション
	const verticalMoveElement = () => {
		// 移動の滑らかさ
		const limit = 1000;
		let time;

		// 移動前の座標
		const loc_y = document.getElementById('moveTarget').getBoundingClientRect().top;
		console.log(loc_y);
		// 移動後の座標
		const goal_y = 0;

		// 毎秒の移動距離
		let sec_move_y = (goal_y - loc_y) / limit;

		let cnt_y = loc_y;
		let cnt = 0;
		time = setInterval(function() {
			cnt_y += sec_move_y;

			document.getElementById('moveTarget').style.top = cnt_y + "px";
			if (cnt >= limit) {
				clearInterval(time);
			}
			cnt++
		}, 5);
	};

	// フェードアウトのアニメーションを与える
	const setCssAnimationFadeOut = () => {
		const fadeOutTarget = document.querySelectorAll('.fadeOutTarget').item(0) as HTMLElement;

		fadeOutTarget.style.transition = 'all 1.5s';
		fadeOutTarget.style.opacity = '0';
	}

	const onClick = () => {
		setCssAnimationFadeOut();
		setCssVerticalMoveAnimation();
	}


	// 垂直移動のアニメーションを与える
	const setCssVerticalMoveAnimation = () => {

		// 移動前の座標
		const moveTarget = document.querySelectorAll('.moveTarget').item(0) as HTMLElement;
		const domRect = moveTarget.getBoundingClientRect();
		let loc_y = domRect.top + domRect.height;

		// 移動後の座標
		const goal_y = 0;
		// 移動距離
		let dist_y = goal_y - loc_y;

		moveTarget.style.transform = 'translateY' + `(${dist_y}px)`;
		moveTarget.style.transitionTimingFunction = 'ease-out';
		moveTarget.style.transitionDuration = '1s';
	};
