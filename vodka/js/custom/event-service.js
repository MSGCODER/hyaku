/**
 * Created by lenn on 16/9/9.
 */

function EventService(service){
    this.service = service;
}

EventService.prototype.register = function(){
    var _this = this;

    // 切换车型
    $('.second-dropdown-menu .first-cartype').click(function (event) {
        // 获取选中车型的编码
        var code = $(this).attr("data-code");

        // 更改menu选中的显示状态
        $(".second-dropdown-menu .first-cartype").removeClass("cartype-pressed");
        $(this).addClass("cartype-pressed");

        // 获取车型的text
        var dropDownText = $(this).find(".dropdown-text").text();

        _this.handlers.changeVehicleModal(_this, code, dropDownText);
    });

    // 图片但选项的click事件
    ['#car-color-options', '#interior-nav'].forEach(function (title) {
        $(title).siblings('.option-body').find('a.square').click(function(event){
            //$(title).siblings('.option-body').find('a.square').removeClass('square-active');
            //$(this).addClass('square-active');
            var selectItemCode = $(this).attr('data-code');
            if(title == '#car-color-options'){
                _this.service.data.vehicle_color = selectItemCode;
            }else{
                _this.service.data.interior_color = selectItemCode;
            }

            //设置选装及定制价格和总价
            _this.service.render();
        });
    });

    // 选配项详情显示
    $('.single-line-option').find('.show-details-img').on('click', function(event){
        var code = $(this).parents('.single-line-option').find('input').attr('data-code');
        var name = _this.service.getItemText(code);
        var price = _this.service.getItemPrice(code) ;
        _this.handlers.showDetailModal(_this, code, name, price);
    });

    // 推荐选装点击图片显示详情
    var recommends = $('.recomment-parent');
    $(recommends).unbind('click');
    $(recommends).click(function(){
        var code = $(this).attr('data-slider-code');
        var name = $(this).find(".recomment-text").text();
        var price = "¥1";
        _this.handlers.showDetailModal(_this, code, name, price);
    });

    // 处理搜索
    /**********************************************************************
     * 搜索功能:配置页/搜索结果
     * 原理: 找出匹配组,修改一下input和label,使得在搜索结果中作出的选项能够同步
     */
    // 1. search according to description
    var searchInput = $('#search-input');
    // 2. handle the search window
    $(searchInput).on('keyup', function (e) {
        var inputValue = e.target.value;
        $('#search-result-content').empty();
        if (inputValue != '') {
            // pop up search window while keydown
            $("#search-parent").show();
            $('#search-window').show();
            _this.handlers.showSearchResult(_this, inputValue);
        } else {
            // disappear while no input
            $("#search-parent").hide();
            $('#search-window').hide();
        }
    });
    //搜索框变长
    $(searchInput).focus(function () {
        $(this).animate({width: "300px"}, 100);
    });
    //搜索框变回原长度
    $(searchInput).blur(function () {
        $(this).animate({width: "200px"}, 100);
    });

    $(".search-close").click(function () {
        $("#search-parent").hide();
        $('#search-window').hide();
        $(searchInput).val("");
    });

    //点击导航栏部分让搜索框消失
    $(".navbar").click(function(e){
      $("#search-window").hide();
      $('#search-parent').hide();
      $(searchInput).val("");
    });
    // $(document).click(function(e){
    //    if($(e.target).parents().is("#search-window")){
    //        return false;
    //    }
    //    $("#search-window").hide();
    //    $('#search-parent').hide();
    //    $(searchInput).val("");
    // });

}

EventService.prototype.handlers = {
    changeVehicleModal : function(event_service, code, dropDownText){
        // 更改选中车型状态 && 初始化状态数据
        var custom_logical_service = event_service.service;
        custom_logical_service.data.modal_selected = code;
        custom_logical_service.init();

        // 切换title以及隐藏相应的选项
        var carTypeTitle = '';
        var hideColorItems = [];
        var hideSelectItems = [];

        if(code.indexOf("B") != -1){
            carTypeTitle = '奕阁B07' + dropDownText;
            hideColorItems = ["A01","A02","A06","A07"];

            //设置这个车型没有的选项为不可选
            hideSelectItems = ["P03","P04","U01","U02"];
        }
        else{
            carTypeTitle = '奕胜G08' + dropDownText;
            // 隐藏没有图片的颜色，待修改
            hideColorItems = ["A04","A05","A06","A07"];

            //设置这个车型没有的选项为不可选
            hideSelectItems = ["P04"];

        }
        $("#cartype-title").text(carTypeTitle);
        Custom.hideColorSquare(hideColorItems);
        Custom.hideSelectOption(hideSelectItems);

        // 返回配置页面
        $('.preview-back-to-custom').trigger("click");

        // 重新渲染页面
        custom_logical_service.render();

        //初始化大图
        Custom.setBigImg("A03");

    },
    /*
     * 详情页/图片详情
     */
    showDetailModal : function (event_service, code, name, price, hide_btn) {
        var detailModal = $('#show-details-modal');

        // 冲突框的modal
        if(hide_btn){
            detailModal = $('#nested-detail-modal');
        }

        $(detailModal).find('h4.modal-title').html(name);
        $(detailModal).find('#show-model-price').html("¥" + price);
        // 设置图片
        var img = $('<img src="'+ CDN +'/img/optional/' + code +'.jpg"/>');
        $(img).attr("onerror",'javascript:this.src="' + CDN + '/img/optional/small_pic_default.png"');

        var container = $(detailModal).find('.show-img');
        //console.log(img);
        container.empty();
        container.append(img);

        if(!hide_btn){
            /** 切换选择状态btn的初始功能 **/
            // 清除btn绑定
            var btn = $('#toggle-selected');
            $(btn).unbind('click');
            // 确定按钮状态
            var inputElem = $('.optional-body').find('[data-code="'+code+'"]');
            var isChecked = $(inputElem).hasClass('item-selected');
            // 默认是已经选择的状态,对于没有选择的情况:
            if (isChecked) {
                $(btn).addClass('included');
                $(btn).text('在配置中已经包含了');
            } else {
                $(btn).removeClass('included');
                $(btn).text('加入配置中');
            }

            // 注册btn点击事件
            $(btn).on('click', function (event) {
                var custom_logic_service = event_service.service;

                var op = '';
                if(custom_logic_service.isSelected(code)){
                    op = '-' + code;
                }else{
                    op = '+' + code;
                }
                var solutions = custom_logic_service.findSolution(op);

                // for debug
                console.log(op);
                console.log(solutions);

                // handle solution
                var solutionHandler = new CustomSolutionHandler(custom_logic_service, op, solutions);
                solutionHandler.handle();
            });
        }

        $(detailModal).modal('show');
    },

    /**
     * 搜索处理
     */
    showSearchResult: function(event_service, keyword){
        var _service = event_service.service;
        var matchCases = [];
        // search each option
        var allOptions = $('.optional-body').find('[data-code]');
        allOptions.each(function (i, node) {
            var tag = node.tagName.toLowerCase();
            var code = $(node).attr('data-code');
            switch (tag) {
                case 'a':
                    // pic options
                    if ($(node).text().indexOf(keyword) != -1) {
                        // wrap the node into a readable result
                        //var newClone = $(node).clone().append('<div></div>');
                        var newClone = $(node).clone();
                        var newNodeA = $('<div class="result-pic-option"></div>').append(newClone);
                        if(!window.testnode){
                            window.testnode = newClone;
                        }
                        console.log(newClone);
                        if(newClone.css('display') != 'none') {
                            matchCases.push(newNodeA);
                        }
                    }
                    break;
                case 'input':
                    var description = _service.getItemText(code);
                    // input options
                    if (description.indexOf(keyword) != -1) {
                        // wrap the node into a readable result (just take the single-line-option)
                        var divClone = $(node).parents('.single-line-option').clone();
                        var newNode = $('<div class="result-radio-option"></div>').append(divClone);
                        // remove id and add data-id of input
                        var newInput = $(newNode).find('input');
                        var id = $(newInput).attr('id');
                        $(newInput).removeAttr('id');
                        $(newInput).attr('data-id', id);
                        // store
                        matchCases.push(newNode);
                    }

                    break;
                default:
                    console.log(tag);
                    break;
            }
        });
        // append all to search result and add event listener
        matchCases.forEach(function (n) {
            // append
            $('#search-result-content').append(n);

            // 添加图片点击事件
            $(n).find('a').click(function(event){
                var code = $(this).attr('data-code');
                $('.card-area').find("a[data-code='"+ code +"']").trigger('click');
            });

            // input项点击通过label(for='{id}')的机制触发

            //添加查看详情事件
            $(n).find(".show-details-img").on('click',function(){
                var code = $(this).parents('.single-line-option').find('input').attr('data-code');
                var name = $(this).parents('.single-line-option').find('.line-option-description').html();
                var price = $(this).parents('.single-line-option').find('.line-option-price').html();
                event_service.handlers.showDetailModal(event_service, code, name, price);
            })
        });
        //搜索后乘客位相应选项的事件
        Custom.specialInput();

        // 改变搜索结果数
        $('#results').text(matchCases.length);
    }

} // end of handlers
