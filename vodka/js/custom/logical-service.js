/**
 * Created by lenn on 16/9/5.
 */

// 数据存储(单例对象)
var custom_items = {
    modal_selected: 'B0701',
    vehicle_color: 'A03',
    interior_color: 'C01',
    // 标配(初始选中逻辑项)
    logical_items_default_selected : ['H01', 'I01', 'J01', 'K01', 'L01', 'M01', 'P00', 'Q01', 'W00', 'Y01'],
    logical_items_sequence: [
        'B01', 'B02', 'B03', 'F01', 'G01', 'H01', 'H02', 'I01', 'I02',
        'J01', 'J02', 'J03', 'J04', 'K01', 'K02', 'K03', 'L01', 'L02', 'M01',
        'M02', 'M03', 'M04', 'P00', 'P01', 'P02', 'P03', 'P04', 'P05', 'P06',
        'P07', 'P08', 'P09', 'Q01', 'Q02', 'Q03', 'Q04', 'Q05', 'S01', 'S02',
        'S03', 'S04', 'T01', 'T02', 'U01', 'U02', 'U03', 'V01', 'V02', 'Y01',
        'Y02', 'W00', 'AE01', 'AE02', 'AE03', 'AF01'
    ],
    logical_items_status : {
        'B01': {'text': '轮毂罩', 'price': 1, 'selected': false},
        'B02': {'text': '长江logo轮毂标', 'price': 1, 'selected': false},
        'B03': {'text': '定制轮毂中心标', 'price': 1, 'selected': false},

        'F01': {'text': '客户定制车身拉花', 'price': 1, 'selected': false},
        'G01': {'text': '尾翼', 'price': 1, 'selected': false},
        'H01': {'text': '手动滑移门', 'price': 0, 'selected': false},
        'H02': {'text': '电动滑移门', 'price': 1, 'selected': false},
        'I01': {'text': '固定天窗', 'price': 0, 'selected': false},
        'I02': {'text': '电动天窗', 'price': 1, 'selected': false},

        'J01': {'text': '人造革车顶(无造型)', 'price': 0, 'selected': false},
        'J02': {'text': '暖阳', 'price': 1, 'selected': false},
        'J03': {'text': '印月', 'price': 1, 'selected': false},
        'J04': {'text': '蓝天', 'price': 1, 'selected': false},
        'K01': {'text': '标配侧墙板', 'price': 0, 'selected': false},
        'K02': {'text': '菱形格子造型', 'price': 1, 'selected': false},
        'K03': {'text': '竖条纹造型', 'price': 1, 'selected': false},

        'L01': {'text': '标配塑料窗框内饰', 'price': 0, 'selected': false},
        'L02': {'text': '窗帘盒造型', 'price': 1, 'selected': false},
        'M01': {'text': '人造地板革', 'price': 0, 'selected': false},
        'M02': {'text': '单层地毯', 'price': 1, 'selected': false},
        'M03': {'text': '双层进口地毯', 'price': 1, 'selected': false},
        'M04': {'text': '驾驶舱全包围地毯', 'price': 1, 'selected': false},

        'P00': {'text': '灭火器2个', 'price': 0, 'selected': false},
        'P01': {'text': '灭火器4个', 'price': 1, 'selected': false},
        'P02': {'text': '车内行李固定装置', 'price': 1, 'selected': false},
        'P03': {'text': '首长办公桌', 'price': 1, 'selected': false},
        'P04': {'text': '秘书办公桌', 'price': 1, 'selected': false},
        'P05': {'text': '带logo的迎宾踏板', 'price': 1, 'selected': false},
        'P06': {'text': '冰箱', 'price': 1, 'selected': false},
        'P07': {'text': '乘客位折叠桌',  'price': 1,'selected': false},
        'P08': {'text': '乘客位茶杯架', 'price': 1, 'selected': false},
        'P09': {'text': '乘客位带USB接口的充电插座', 'price': 1, 'selected': false},

        'Q01': {'text': '标配窗帘', 'price': 0, 'selected': false},
        'Q02': {'text': '手动窗帘(上下拉)', 'price': 1, 'selected': false},
        'Q03': {'text': '手动窗帘(左右拉)', 'price': 1, 'selected': false},
        'Q04': {'text': '电动窗帘(上下拉)', 'price': 1, 'selected': false},
        'Q05': {'text': '电动窗帘(左右拉)', 'price': 1, 'selected': false},

        'S01': {'text': '柔软带折面真皮座椅', 'price': 1, 'selected': false},
        'S02': {'text': '带对比色缝线的内饰(基本部分)', 'price': 1, 'selected': false},
        'S03': {'text': '带对比色滚边的内饰组件', 'price': 1, 'selected': false},
        'S04': {'text': '座椅头枕绣logo',  'price': 1,'selected': false},
        'T01': {'text': '普通翻毛皮内饰', 'price': 1, 'selected': false},
        'T02': {'text': 'Alcantara面料车顶', 'price': 1, 'selected': false},

        'U01': {'text': '人造桃木内饰组件', 'price': 1, 'selected': false},
        'U02': {'text': '胡桃木内饰组件', 'price': 1, 'selected': false},
        'U03': {'text': '驾驶舱装饰及方向盘木质组件', 'price': 1, 'selected': false},
        'V01': {'text': '复合地板', 'price': 1, 'selected': false},
        'V02': {'text': '游艇级柚木地板', 'price': 1, 'selected': false},

        'Y01': {'text': '标配音响', 'price': 0, 'selected': false},
        'Y02': {'text': 'boss高端环绕声音响系统', 'price': 1, 'selected': false},

        'W00': {'text': '标配电视', 'price': 0, 'selected': false},

        'AE01': {'text': '带长江logo雨伞', 'price': 1, 'selected': false},
        'AE02': {'text': '客户定制logo雨伞', 'price': 1, 'selected': false},
        'AE03': {'text': '雨伞架', 'price': 1, 'selected': false},
        'AF01': {'text': '快捷地毯(可拆洗)', 'price': 1, 'selected': false},
    },
    logical_item_groups : [
        'I01|I02', 'J01|J02|J03|J04', 'T01|T02',
        'Q01|Q02|Q03|Q04', 'L01|L02', 'K01|K02|K03',
        'H01|H02', 'P08|P09',
        'M01|M02|M03|M04', 'V01|V02', 'U01|U02',
        'P03|P04', 'AE01|AE02', 'B02|B03', 'Y01|Y02',
        'P00|P01'
    ],
};


// 解决方案的构造函数
function CustomLogicSolution(solutionType){
    /**
     * type: 解决方案的类型,可取值:
     * 'default': 默认解决方案, 只改变所操作项的状态,
     * 'disabled': 不改变当前状态,
     * 'normal': 更改当前操作项以及所要求增加或删除的项, 不弹模态框,
     * 'modal': 弹模态框让用户确认是否需要更改当前操作项
     */
    this.type = solutionType;
    this.isMulti = false;
    this.detail = {
        'addItems': [], 'delItems': []
    };
}

// 逻辑处理服务的构造函数
function CustomLogicService(data){
    this.data = data;
    // 初始化
    this.init();
}

// 初始化状态数据
CustomLogicService.prototype.init = function(){
    var _data_ = this.data;
    // 车身颜色
    _data_.vehicle_color = 'A03';
    // 内饰颜色及材质
    _data_.interior_color = 'C01';

    // 状态全置为空
    _data_.logical_items_sequence.forEach(function(code){
        if (_data_.logical_items_status[code]){
            _data_.logical_items_status[code].selected = false;
        }
    });

    // 选中默认项
    _data_.logical_items_default_selected.forEach(function(code){
        if (_data_.logical_items_status[code]){
            _data_.logical_items_status[code].selected = true;
        }
    });
}

// 设置当前的状态
CustomLogicService.prototype.updateStatus = function(codes){
    var _data_ = this.data;
    // 状态全置为空
    _data_.logical_items_sequence.forEach(function(code){
        if (_data_.logical_items_status[code]){
            _data_.logical_items_status[code].selected = false;
        }
    });

    // 更新状态
    if(codes instanceof Array){
        _data_.modal_selected = codes[0];
        _data_.vehicle_color = codes[1];
        _data_.interior_color = codes[2];

        codes.forEach(function(code){
            if (_data_.logical_items_status[code]){
                _data_.logical_items_status[code].selected = true;
            }
        });
    }else{
        throw '[error] The codes(' + codes + ') is not Array!';
    }

    // 重新渲染页面
    this.render();
}

// 是否在同一个逻辑项组内
CustomLogicService.prototype.isInSameGroup = function(code1, code2){
    var _data_ = this.data;

    for(var i = 0; i < _data_.logical_item_groups.length; i++){
        var group = _data_.logical_item_groups[i].split('|');
        if(group.indexOf(code1) != -1 && group.indexOf(code2) != -1){
            return true;
        }
    }
}

// 添加某项
CustomLogicService.prototype.select = function(code){
    var _data_ = this.data;
    if (_data_.logical_items_status[code]){
        _data_.logical_items_status[code].selected = true;
    }
}

// 取消某项
CustomLogicService.prototype.unSelect = function(code){
    var _data_ = this.data;
    if (_data_.logical_items_status[code]){
        _data_.logical_items_status[code].selected = false;
    }
}

// 获取配置项的名字
CustomLogicService.prototype.getItemText = function(code){
    return this.data.logical_items_status[code].text;
}

// 获取配置项的价格
CustomLogicService.prototype.getItemPrice = function(code){
    return this.data.logical_items_status[code].price;
}

// 判断某项是否选中
CustomLogicService.prototype.isSelected = function(code){
    var _data_ = this.data;
    if(!_data_.logical_items_status[code]){
        throw '[error] The code(' + code + ') is invalid!'
    }

    return _data_.logical_items_status[code].selected;
}

// 设置逻辑表
CustomLogicService.prototype.setLogicalTable = function(logical_table){
    this.logical_table = logical_table;
}

/**
 * 获取当前操作的类型
 * 1: 添加项
 * 2: 取消项
 * @param op
 */
CustomLogicService.prototype.getOperationType = function(op){
    if(!op){
        throw '[error] Operation Type is invalid!';
    }

    if(op.indexOf('+') != -1){
        return 1;
    }else if(op.indexOf('-') != -1){
        return 2;
    }
}

// 获取操作项的code
CustomLogicService.prototype.getOperationItemCode = function(op){
    return op.slice(1, op.length);
}

// 判断当前操作是否合法
CustomLogicService.prototype.isValidOperation = function(op){
    var code = this.getOperationItemCode(op);
    if( (this.getOperationType(op) == 1 && this.isSelected(code))
        || (this.getOperationType(op) == 2 && !this.isSelected(code)) ){
        return false;
    }

    return true;
}

/**
 * 根据逻辑表查找解决方案
 * @param operation
 * @returns {Array}
 */
CustomLogicService.prototype.findSolution = function(operation){

    // 若没有设置逻辑表,抛异常
    if(!this.logical_table){
        throw '[error] Logical Table is not set!';
    }

    if(!this.isValidOperation(operation)) {
        throw '[error] Operation(' + op + ') is invalid!';
    }

    // 定义解决方案
    var solutions = [];
    // 获取该操作的逻辑关系
    var logicalRelation = this.logical_table[operation];

    // 根据逻辑表返回解决方案
    if(!logicalRelation){
        // return new CustomLogicSolution('default');
        solutions.push(new CustomLogicSolution('default'));
    }else if(logicalRelation.disabled){
        // return new CustomLogicSolution('disabled');
        solutions.push(new CustomLogicSolution('disabled'));
    }else{
        if(logicalRelation instanceof Array){
            // 有多个solution
            logicalRelation.forEach(function(relation){
                solutions.push(this.getSolutionByLogicalRelation(operation, relation));
            }, this);
        }else{
            // 有且仅有一个solution
            solutions.push(this.getSolutionByLogicalRelation(operation, logicalRelation));
        }
    }

    return solutions;
};

// 根据逻辑关系找到
CustomLogicService.prototype.getSolutionByLogicalRelation = function(operation, logicalRelation){
    var _data_ = this.data;

    // 需要添加的项以及需要去除的项
    var addItems = [];
    var delItems = [];
    // 根据当前状态筛选出需要添加的项
    logicalRelation.plus.forEach(function(item){
        if(item.indexOf('|') != -1){
            var codes = item.split('|');
            var isNeedPushToAddItems = true;
            for(var index = 0; index < codes.length; index++){
                if(_data_.logical_items_status[codes[index]].selected){
                    isNeedPushToAddItems = false;
                    break;
                }
            }
            if(isNeedPushToAddItems){
                addItems.push(item);
            }
        }else{
            // 如果当前需要选中的项还没有选中, 则添加之到需添加的项的数组中
            if(!_data_.logical_items_status[item].selected){
                addItems.push(item);
            }
        }
    }, this);

    // 根据当前状态筛选出需要删除的项
    logicalRelation.minus.forEach(function(item){
        if(item.indexOf('|') != -1){
            var codes = item.split('|');
            for(var index = 0; index < codes.length; index++){
                if(_data_.logical_items_status[codes[index]].selected){
                    delItems.push(codes[index]);
                    break;
                }
            }
        }else{
            // 如果当前需要去除的项被选中了, 则添加之到需去除的项的数组中
            if(_data_.logical_items_status[item].selected){
                delItems.push(item);
            }
        }
    }, this);

    /**
     *  判断结果怎么处理
     */
    // 默认类型
    if(addItems.length == 0 && delItems.length == 0){
        // 若经过计算,添加的项跟删减的项的个数都为0,则判断为默认解决方案
        return new CustomLogicSolution('default');
    }

    // normal
    if(this.getOperationType(operation) == 1 &&
        addItems.length == 0 &&
        delItems.length == 1){
        // 若因增加一项而仅仅消除另一项, 并且是在同一组, 就无需弹框了
        // 判断是否在同一组
        var code1 = this.getOperationItemCode(operation);
        var code2 = delItems[0];
        if(this.isInSameGroup(code1, code2)){
            var solution = new CustomLogicSolution('normal');
            solution.detail.addItems = addItems;
            solution.detail.delItems = delItems;
            return solution;
        }
    }
    // modal
    var solution = new CustomLogicSolution('modal');
    solution.detail.addItems = addItems;
    solution.detail.delItems = delItems;
    return solution;
}

// 获取当前选中的项目
CustomLogicService.prototype.getSelectedItems = function(){
    var _data_ = this.data;

    var selectedItems = [];
    // 车型
    selectedItems.push(_data_.modal_selected);
    // 车身颜色
    selectedItems.push(_data_.vehicle_color);
    // 内饰材质及颜色
    selectedItems.push(_data_.interior_color);

    // 其他逻辑项
    _data_.logical_items_sequence.forEach(function(code){
        if(_data_.logical_items_status[code] && _data_.logical_items_status[code].selected){
            selectedItems.push(code);
        }
    });

    return selectedItems;
}

// 操作完之后的渲染
CustomLogicService.prototype.render = function(op){
    // 清除颜色项目的选中状态
    $('.card-area a.square').removeClass('square-active');
    $('.result-pic-option a.square').removeClass('square-active');
    // 清除button上的选中状态
    $(".single-line-option .select-option input[type='button']").removeClass('item-selected');

    // 刷新选中项的状态
    var selectedItems = this.getSelectedItems();

    //初始化价格
    var priceSum = 0;

    selectedItems.forEach(function(code){
        var picItem = $(".square[data-code='" + code + "']");
        var inputItem = $(".optional-checkbox[data-code='" + code + "']");
        if(picItem){
            picItem.addClass('square-active');

            if(picItem.attr("data-price")){
              priceSum += parseInt(picItem.attr("data-price"));
            }
        }

        if(inputItem){
            inputItem.addClass('item-selected');

            if(inputItem.attr("data-price")){
              priceSum += parseInt(inputItem.attr("data-price"));
            }
        }
    });

    //设置配置页选装及定制价格
    $(".custom-price").text("¥" + priceSum);
    $(".total-price").text("¥" + (priceSum+1));

    // 刷新详细模态框操作按钮的状态
    if(op){
        var opCode = this.getOperationItemCode(op);
        if (this.isSelected(opCode)) {
            $('#toggle-selected').addClass('included');
            $('#toggle-selected').text('在配置中已经包含了');
        } else {
            $('#toggle-selected').removeClass('included');
            $('#toggle-selected').text('加入配置中');
        }
    }

    //判断乘客位折叠桌,乘客位茶杯架,乘客位带USB接口的充电插座是否被选中
    var codeArray = ["P07","P08","P09"];
    for(var i = 0 ;i < codeArray.length ;i++){
      var _obj = $(".optional-checkbox[data-code="+codeArray[i]+"]").parents(".single-line-option").find(".number-text");
      if(selectedItems.indexOf(codeArray[i])!=-1){
        if(_obj.text()==0){
          _obj.text(_obj.attr("maxnum"));
        }
      }else{
        _obj.text(0);
      }
    }

    //当已经保存后再返回继续配置清空sessionStorage
    if(sessionStorage){
      sessionStorage.setItem("code",'');
      sessionStorage.setItem("qrUrl",'');
    }

    //当在配置结果页时,点击了详情按钮,刷新配置结果
    Custom.reloadResultPage();

}

// 处理解决方案的组件
function CustomSolutionHandler(service, operation, solutions){
    //if(!(solution instanceof CustomLogicSolution)){
    //    throw '[error] solution is invalid!';
    //}

    this.service = service;
    this.operation = operation;
    this.solutions = solutions;
    this.currentSolutionIndex = 0;
}

// 模态框渲染器
CustomSolutionHandler.prototype.conflictModalRender = function(){
    var _service = this.service;
    var _operation = this.operation;
    var _solution = this.solutions[this.currentSolutionIndex];
    var _this = this;
    if(_solution.type != 'modal'){
        throw '[error] solution is not the type of modal!';
    }

    // 清空模态框的内容
    $('#conflict .modal-body').empty();

    // 创建某一单独的条目
    function createConflictComponentItem(input_box_type, code){
        var element = $('.conflict-single-option-template').find('.conflict-single-option').clone();
        // 设置code
        element.attr('data-code', code);
        // 设置input_box
        if(input_box_type == 'plus-icon'){
            element.find('.input-box').append($('<img src="http://static.yangtzeev.com/img/optional/btn_add.png" width="18px" height="18px"/>'));
        }else if(input_box_type == 'minus-icon'){
            element.find('.input-box').append($('<img src="http://static.yangtzeev.com/img/optional/btn_subtract.png" width="18px"/>'));
        }else if(input_box_type == 'input'){
            // 设置多选的class
            element.addClass('conflict-multi');
            var inputBoxContent = $("input[data-code='" + code + "']").parent().clone();

            // 改ID
            var newID = 'conflict-' + inputBoxContent.find('input').attr('id');
            inputBoxContent.find('input').attr('id', newID);
            inputBoxContent.find('label').attr('for', newID);

            element.find('.input-box').append(inputBoxContent);
        }

        var name = _service.getItemText(code);
        var price = _service.getItemPrice(code) ;
        // 设置名字
        element.find('.conflict-option-name').text(name);
        // 设置价格
        element.find('.conflict-option-price').text('￥' + price);

        return element;
    }

    // 创建模态框中的条目
    function createConflictComponent(componentType, codes){
        var conflictComponent = $('.conflict-component-template').find('.conflict-component').clone();

        if(componentType == 'action'){
            // 设置title
            conflictComponent.find('.conflict-title').text('您想变动:');
            // 获取ICON类型
            var opType = _service.getOperationType(_operation);
            var input_box_type;
            if (opType == 1){
                input_box_type = 'plus-icon';
            }else if(opType == 2){
                input_box_type = 'minus-icon';
            }
            // 获取操作的code
            var code = _service.getOperationItemCode(_operation);
            var conflictComponentItem = createConflictComponentItem(input_box_type, code);
            conflictComponent.append(conflictComponentItem);
        }else if(componentType == 'multi-plus'){
            // 设置title
            conflictComponent.find('.conflict-title').text('您必须增加以下选装配置中的一个:');
            var input_box_type = 'input';
            codes.forEach(function(code, index){
                var conflictComponentItem = createConflictComponentItem(input_box_type, code);
                // 第一个默认选中
                if(index == 0){
                    conflictComponentItem.find("input[type='button']").addClass('item-selected');
                }
                conflictComponent.append(conflictComponentItem);
            });

        }else if(componentType == 'plus'){
            // 设置title
            conflictComponent.find('.conflict-title').text('您必须增加以下选装配置:');
            var input_box_type = 'plus-icon';
            codes.forEach(function(code){
                var conflictComponentItem = createConflictComponentItem(input_box_type, code);
                conflictComponent.append(conflictComponentItem);
            });
        }else if(componentType == 'minus'){
            // 设置title
            conflictComponent.find('.conflict-title').text('以下选装配置将会被移除:');
            var input_box_type = 'minus-icon';
            codes.forEach(function(code){
                var conflictComponentItem = createConflictComponentItem(input_box_type, code);
                conflictComponent.append(conflictComponentItem);
            });
        }

        return conflictComponent;
    }

    // 设置操作项
    $('#conflict .modal-body').append(createConflictComponent('action'));

    // 设置需添加的项
    var singlePlusItems = [];
    _solution.detail.addItems.forEach(function(item){
        if(item.indexOf('|') != -1){
            var codes = item.split('|');
            $('#conflict .modal-body').append(createConflictComponent('multi-plus', codes));
            // 设置点击事件
            codes.forEach(function(code){
                $('.conflict-single-option.conflict-multi').find("input[data-code='" + code + "']").click(function(event){
                    if(!$(this).hasClass('item-selected')){
                        $(this).parents('.conflict-component').find('input').removeClass('item-selected');
                        $(this).addClass('item-selected');
                    }
                });
            });
        }else{
            singlePlusItems.push(item);
        }
    });
    if(singlePlusItems.length > 0){
        $('#conflict .modal-body').append(createConflictComponent('plus', singlePlusItems));
    }

    // 设置需删除的项
    if(_solution.detail.delItems.length > 0){
        $('#conflict .modal-body').append(createConflictComponent('minus', _solution.detail.delItems));
    }

    // 注册详情按钮点击事件
    $(".conflict-single-option").find('.show-details-img').on('click', function(event){
        var code = $(this).parents('.conflict-single-option').attr('data-code');
        var name = _service.getItemText(code);
        var price = _service.getItemPrice(code) ;

        var eventHandler = new EventService(_service);
        eventHandler.handlers.showDetailModal(eventHandler, code, name, price, true);
    });

    // 解绑两个事件处理
    $('#save-conflict-solution').unbind('click');
    $('#drop-conflict-solution').unbind('click');

    // 注册'接受更改'的事件处理
    $('#save-conflict-solution').click(function(event){
        // 处理操作的结果
        _this.handleOp();

        // 添加所需添加的项
        _solution.detail.addItems.forEach(function(item){
            if(item.indexOf('|') != -1){
                var codes = item.split('|');
                // 设置点击事件
                codes.forEach(function(code){
                    var target = $(".conflict-multi input[data-code='" + code + "']");
                    if(target.hasClass('item-selected')){
                        _service.select(code);
                    }
                });
            }else{
                _service.select(item);
            }
        });

        // 删除所需删除的项
        _solution.detail.delItems.forEach(function(code){
            _service.unSelect(code);
        });

        // 渲染结果
        _service.render(_operation);
        // 隐藏模态框
        $('#conflict').modal('hide');
    });

    // 注册'取消选择'的事件处理
    $('#drop-conflict-solution').click(function(){
        $('#conflict').modal('hide');
    });

    // 多种解决方案
    if(this.solutions.length > 1){
        $('#other-solution').css('display', 'block');
        $('#other-solution').unbind('click');
        $('#other-solution').click(function(event){
            _this.currentSolutionIndex = (_this.currentSolutionIndex + 1) % _this.solutions.length;
            _this.handle();
        });
    }else{
        $('#other-solution').css('display', 'none');
    }

    // 显示当前modal
    $('#conflict').modal('show');
}

// 解决方案的详细处理过程
CustomSolutionHandler.prototype.handle = function(){
    var _service = this.service;
    var _operation = this.operation;
    var _solution = this.solutions[this.currentSolutionIndex];

    var type = _service.getOperationType(_operation);
    var code = _service.getOperationItemCode(_operation);

    if(_solution.type == 'disabled'){
        return true;
    }

    if(_solution.type == 'modal'){
        this.conflictModalRender();
        return true;
    }

    // type : 'default' or 'normal'
    if(type == 1){
        _service.select(code);
    }else if(type == 2){
        _service.unSelect(code);
    }

    if(_solution.type == 'normal'){
        _solution.detail.addItems.forEach(function(item){
            // item 不包含复合项, 即类似'XX|XX|XX'
            this.service.select(item);
        }, this);

        _solution.detail.delItems.forEach(function(item){
            this.service.unSelect(item);
        }, this);
    }

    _service.render(_operation);
    return true;
}

// 处理当前操作所产生的结果
CustomSolutionHandler.prototype.handleOp = function(){
    var _service = this.service;
    var _operation = this.operation;

    var code = _service.getOperationItemCode(_operation);
    var opType = _service.getOperationType(_operation);

    if(opType == 1){
        _service.select(code);
    }else if(opType == 2){
        _service.unSelect(code);
    }
}
