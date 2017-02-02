(function() {
    console.log('demonade.js Loaded');
	
    // Mobile Check
    if(navigator.platform) {
		if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            $('head').append('<link href="https://rawgit.com/Katheor/Lemonade/demonade/lemonade.css" rel="stylesheet">');
			createMemo();   //  create Element
            memoKeyup();
		}
	}
    

	function createMemo() {

		var htmlTxt =`
            <div class="cstm-area slide-in">
                <div class="cstm-wrap">
                    <h5 class="cstm-title">메모장</h5>
                    <textarea id="cstm-area-memobox" rows="6"></textarea>
                </div>
                <div class="cstm-handle">
                    <span>open</span>
                </div>
            </div>
            `;
		
        $('#mw-wrapper').prepend(htmlTxt);
        if (sessionStorage["memo"]) $("#cstm-area-memoBox").val() = sessionStorage["memo"];
	}

    function memoKeyup() {
        $('#cstm-area-memobox').on('keyup', function() {
            sessionStorage["memo"] = this.value;
        });
    }
	
})()