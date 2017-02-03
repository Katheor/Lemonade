(function() {
    console.log('demonade.js Loaded');
	
    // Mobile Check
    if(navigator.platform) {
		if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            $('head').append('<link href="https://rawgit.com/Katheor/Lemonade/demonade/lemonade.css" rel="stylesheet">');
			initHtml();   //  create Element
            eventSet();
		}
	}
    

	function initHtml() {
		var htmlTxt =`
            <div class="cstm-area slide-in">
                <div class="cstm-wrap">
                    <div class="cstm-content">
                        <h5 class="cstm-title">메모장</h5>
                        <textarea id="cstm-memobox" rows="6"></textarea>
                    </div>
                    <div class="cstm-menu">
                        <div class="cstm-menu-item">
                            <i class="fa fa-clipboard" aria-hidden="true"></i>
                            <span>memo</span>
                        </div>
                        <div class="cstm-menu-item">
                            <i class="fa fa-refresh" aria-hidden="true"></i>
                            <span>recent</span>
                        </div>
                        <div class="cstm-menu-item">
                            <i class="fa fa-info-circle" aria-hidden="true"></i>
                            <span>notice</span>
                        </div>
                    </div>
                </div>
                <div class="cstm-handle">
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
            </div>
            `;
		
        $('#mw-wrapper').prepend(htmlTxt);
        if (sessionStorage["memo"]) $("#cstm-area-memoBox").val() = sessionStorage["memo"];
	}

    function eventSet() {
        $('#cstm-area-memobox').on('keyup', function() {
            sessionStorage["memo"] = this.value;
        });

        $('.cstm-handle').click(function() {
            $('.cstm-area').toggleClass('slide-in');
            $('.cstm-area').toggleClass('slide-out');
        });
    }
	
})()