(function() {
    console.log('demonade.js Loaded');
	
    // Mobile Check
    if(navigator.platform) {
		if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            $('head').append('<link href="https://rawgit.com/Katheor/Lemonade/lemonade/lemonade.css" rel="stylesheet">');
			initHtml();   //  create Element
            eventSet();
		}
	}
    

	function initHtml() {
		var htmlTxt =`
            <div class="cstm-area slide-in" style="display:none;">
                <div class="cstm-wrap">
                    <div class="cstm-content">
                        <h5 class="cstm-title">메모장</h5>
                        <textarea id="cstm-memobox" rows="6"></textarea>
                    </div>
                    <div class="cstm-menu">
                        <div class="cstm-menu-item" id="cstm-item-memo">
                            <i class="fa fa-clipboard" aria-hidden="true"></i>
                            <span>memo</span>
                        </div>
                        <div class="cstm-menu-item" id="cstm-item-recent">
                            <i class="fa fa-refresh" aria-hidden="true"></i>
                            <span>recent</span>
                        </div>
                        <div class="cstm-menu-item" id="cstm-item-notice">
                            <i class="fa fa-info-circle" aria-hidden="true"></i>
                            <span>notice</span>
                        </div>
                    </div>
                </div>
                <div class="cstm-handle slide-in">
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                </div>
            </div>
            `;
		
        $('#mw-wrapper').prepend(htmlTxt);
        if (sessionStorage["memo"]) $("#cstm-memobox").val(sessionStorage["memo"]);
	}

    function eventSet() {
        // 메모장 내용 sessionStorage에 보존
        $('#cstm-memobox').on('keyup', function() {
            sessionStorage["memo"] = this.value;
        });

        // 로그아웃 시에 sessionStorage 내용 폐기
        $('li.pt-logout a').click(function () { delete sessionStorage["memo"] });

        // addOn slide in-out
        $('.cstm-handle').click(function() {
            $('.cstm-area').toggleClass('slide-in');
            $('.cstm-area').toggleClass('slide-out');
            $('.cstm-handle').toggleClass('slide-in');
            $('.cstm-handle').toggleClass('slide-out');
        });

        // notice page link
        $('#cstm-item-notice').click(function() {
            window.open('https://github.com/Katheor/Lemonade');
        });
    }
	
})()

$(document).ready(function() {
    $('.cstm-area').css('display', '');
});