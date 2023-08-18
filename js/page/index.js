
$(function() {
    // Click hiện popup add tài sản
    $('#addPopupBtn').click(function(){
        $('#detailPopup').show();
        $('.overlay-popup').show();
        $('#assetCode').focus();
    })

    // Click ẩn popup add tài sản
    $('.btn-popup-close').click(function(){
        $('#detailPopup').hide();
        $('.overlay-popup').hide();
        $('input[required]').removeClass('error');
        $('input[required]').removeAttr("title", "Thông tin này không được phép để trống")
    })

    // khi blur các input sẽ kiểm tra
    $('input[required]').blur(function(){
        if(!$(this).val()){
            $(this).addClass('error');
            $(this).attr("title", "Thông tin này không được phép để trống")
        } else {
            $(this).removeClass('error');
            $(this).removeAttr("title", "Thông tin này không được phép để trống")
        }
    })

    // khi bấm hủy ở popup
    $('.cancel-popup-btn').click(function(){
        $('#saveDialog').show();
        $('.overlay-dialog').show();
    })

    // khi bấm lưu ở popup
    $('.save-popup-btn').click(function(){
        // đóng popup
        $('#detailPopup').hide();
        $('.overlay-popup').hide();
        // lưu dữ liệu vào database 
        toastMessageShow();
    })

    // Save dialog
    $('.cancel-dialog-btn').click(function(){
        //đóng dialog không đóng popup
        $('#saveDialog').hide();
        $('.overlay-dialog').hide();
    })

    $('.not-save-dialog-btn').click(function(){
        //đóng dialog và popup nhưng không lưu
        $('#saveDialog').hide();
        $('.overlay-dialog').hide();
        $('#detailPopup').hide();
        $('.overlay-popup').hide();
    })

    $('.save-dialog-btn').click(function(){
        //đóng dialog
        $('#saveDialog').hide();
        $('.overlay-dialog').hide();
        // đóng popup
        $('#detailPopup').hide();
        $('.overlay-popup').hide();
        //lưu dữ liệu popup vào database
        toastMessageShow();
    })
});

function toastMessageShow(){
    $('.toast-list').html(`<div class="toast-item toast--success">
        <div class="toast-item__body">
            <div class="wrapper-icon icon-24 toast-item__icon">
                <div class="check-icon"></div>
            </div>
            <div class="toast-text">Bạn đã lưu thành công</div>
        </div>
    </div>`)
    
    $('.')
    setTimeout(function(){
        $('.toast-item').remove();
    }, 6000)
}

