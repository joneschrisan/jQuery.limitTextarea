(function($) {
    /* Start Objct Constructor */
    var LimitTextarea = function(element, options) {
        /* Start Private Variables */
        var
            e = element,
            id = $(e).attr('id'),
            idPart = '-limitTextarea-',
            overridable = [
                'afterInit',
                'afterKeyDown',
                'afterKeyUp',
                'afterMouseDown',
                'afterMouseUp',
                'afterContextMenu',
                'afterCut',
                'afterPaste',
                'afterEmpty',
                'afterNotEmpty',
                'afterWithinLimit',
                'afterReachLimit',
            ]
        ;
        /* End Private Variables */
        
        /* Start Create Object */
        var obj = {
            /* Start Main Functions */
            init: function() {
                var t = this;
                if(!t.initialized) {
                    $(e).data('limittextareaLimit', ($(e).data('limittextareaLimit')) ? $(e).data('limittextareaLimit') : (options && options.limit) ? options.limit : 0);
                    $(e).data('limittextareaCharactercount', ($(e).data('limittextareaCharactercount')) ? $(e).data('limittextareaCharactercount') : 0);
                    $(e).data('limittextareaIsempty', ($(e).data('limittextareaIsempty')) ? $(e).data('limittextareaIsempty') : false);
                    $(e).data('limittextareaLimitreached', ($(e).data('limittextareaLimitreached')) ? $(e).data('limittextareaLimitreached') : false);
                    
                    t.characterCount();
                    t.drawCounter();
                    t.addStyles();
                    t.initialized = true;
                }
                t.afterInit();
                return t;
            },
            drawCounter: function() {
                var
                    t = this,
                    container = document.createElement('div'),
                    counterContainer = document.createElement('span')
                ;
                
                counterContainer.id = id + idPart + 'characterCount';
                
                container.id = id + idPart + 'container';
                container.innerHTML = counterContainer.outerHTML + ' of ' + $(e).data('limittextareaLimit') + ' characters remaining'
                $(e).after(container);
                t.updateCounter();
                
                return t;
            },
            addStyles: function() {
                var t = this;
                if(!$('#' + id + idPart + 'container').hasClass('limitTextarea')) $('#' + id + idPart + 'container').addClass('limitTextarea');
                if(!$('#' + id + idPart + 'container').hasClass('container')) $('#' + id + idPart + 'container').addClass('container');
                if(!$('#' + id + idPart + 'characterCount').hasClass('limitTextarea')) $('#' + id + idPart + 'characterCount').addClass('limitTextarea');
                if(!$('#' + id + idPart + 'characterCount').hasClass('counterContainer')) $('#' + id + idPart + 'characterCount').addClass('counterContainer');
                return t;
            },
            updateCounter: function() {
                var
                    t = this,
                    remaining = parseInt($(e).data('limittextareaLimit')) - parseInt($(e).data('limittextareaCharactercount'))
                ;
                $('#' + id + idPart + 'characterCount').html(remaining);
                return t;
            },
            /* End Main Functions */
            
            /* Start Events */
            /* Start Non Editable Events */
            onKeyDown: function(event) {
                var t = this;
                window.setTimeout(
                    function() {
                        $(e).trigger('afterKeyDown');
                    },
                    0
                );
                return t;
            },
            onKeyUp: function(event) {
                var t = this;
                window.setTimeout(
                    function() {
                        $(e).trigger('afterKeyUp');
                    },
                    0
                );
                return t;
            },
            onMouseDown: function(event) {
                var t = this;
                window.setTimeout(
                    function() {
                        $(e).trigger('afterMouseDown');
                    },
                    0
                );
                return t;
            },
            onMouseUp: function(event) {
                var t = this;
                window.setTimeout(
                    function() {
                        $(e).trigger('afterMouseUp');
                    },
                    0
                );
                return t;
            },
            onContextMenu: function(event) {
                var t = this;
                window.setTimeout(
                    function() {
                        $(e).trigger('afterContextMenu');
                    },
                    0
                );
                return t;
            },
            onCut: function(event) {
                var t = this;
                window.setTimeout(
                    function() {
                        $(e).trigger('afterCut');
                    },
                    0
                );
                return t;
            },
            onPaste: function(event) {
                var t = this;
                window.setTimeout(
                    function() {
                        $(e).trigger('afterPaste');
                    },
                    0
                );
                return t;
            },
            onEmpty: function() {
                var t = this;
                $(e).data('limittextareaIsempty', true);
                window.setTimeout(
                    function() {
                        $(e).trigger('afterEmpty');
                    },
                    0
                );
                return t;
            },
            onNotEmpty: function() {
                var t = this;
                $(e).data('limittextareaIsempty', false);
                window.setTimeout(
                    function() {
                        $(e).trigger('afterNotEmpty');
                    },
                    0
                );
                return t;
            },
            onWithinLimit: function(event) {
                var t = this;
                $(e).data('limittextareaLimitreached', false);
                window.setTimeout(
                    function() {
                        $(e).trigger('afterWithinLimit');
                    },
                    0
                );
                return t;
            },
            onReachLimit: function(event) {
                var t = this;
                $(e).data('limittextareaLimitreached', true);
                $(e).val($(e).val().substr(0, $(e).data('limittextareaLimit')));
                if($(e).data('limittextareaCharactercount') > $(e).data('limittextareaLimit'))
                    $(e).data('limittextareaCharactercount', $(e).data('limittextareaLimit'));
                window.setTimeout(
                    function() {
                        $(e).trigger('afterReachLimit');
                    },
                    0
                );
                return t;
            },
            /* End Non Editable Events */
            /* Start Editable Events */
            afterInit: function() {
                var t = this;
                return t;
            },
            afterKeyDown: function(event) {
                var t = this;
                return t;
            },
            afterKeyUp: function(event) {
                var t = this;
                return t;
            },
            afterMouseDown: function(event) {
                var t = this;
                return t;
            },
            afterMouseUp: function(event) {
                var t = this;
                return t;
            },
            afterContextMenu: function(event) {
                var t = this;
                return t;
            },
            afterCut: function(event) {
                var t = this;
                return t;
            },
            afterPaste: function(event) {
                var t = this;
                return t;
            },
            afterEmpty: function(event) {
                var t = this;
                return t;
            },
            afterNotEmpty: function(event) {
                var t = this;
                return t;
            },
            afterWithinLimit: function(event) {
                var t = this;
                return t;
            },
            afterReachLimit: function(event) {
                var t = this;
                return t;
            },
            /* End Editable Events */
            /* End Events */
            
            /* Start Properties */
            characterCount: function(val) {
                var
                    t = this,
                    returns = t,
                    remaining = 0
                ;
                
                if(val) {
                    $(e).data('limittextareaCharactercount', val);
                } else {
                    $(e).data('limittextareaCharactercount', $(e).val().length);
                    returns = $(e).data('limittextareaCharactercount');
                    
                    if($(e).val().length == 0) {
                        $(e).trigger('empty');
                    } else {
                        $(e).trigger('notempty');
                    }
                    
                    if($(e).data('limittextareaLimit')) {
                        if(parseInt($(e).data('limittextareaCharactercount')) + 1 > parseInt($(e).data('limittextareaLimit'))) {
                            $(e).trigger('reachlimit');
                        } else {
                            $(e).trigger('withinlimit');
                        }
                    } else {
                        //Error
                    }
                }
                
                if(t.initialized)
                    t.updateCounter();
                    
                return returns;
            },
            limit: function(val) {
                return (val) ? $(e).data('limittextareaLimit', val) : $(e).data('limittextareaLimit');
            }
            /* End Properties */
        };
        /* End Create Object */
        
        /* Start Set Options */
        if(options) {
            Object.keys(options).each(
                function(key) {
                    var value = options[key];
                    if($.inArray(key, overridable) >= 0) {
                        obj[key] = options[key];
                    }
                }
            );
        }
        /* End Set Options */
        
        /* Start Set Event Listeners */
        $(e).on('keydown', function(event) { obj.onKeyDown(event).characterCount(); });
        $(e).on('keyup', function() { obj.onKeyUp(event).characterCount(); });
        $(e).on('mouseDown', function(event) { obj.afterKeyUp(event).characterCount(); });
        $(e).on('mouseup', function() { obj.onMouseUp(event).characterCount(); });
        $(e).on('contextmenu', function() { obj.onContextMenu(event).characterCount(); });
        $(e).on('cut', function() { obj.onCut(event).characterCount(); });
        $(e).on('paste', function(event) { obj.onPaste(event).characterCount(); });
        
        $(e).on('empty', function(event) { obj.onEmpty(event); });
        $(e).on('notempty', function(event) { obj.onNotEmpty(event); });
        $(e).on('withinlimit', function(event) { obj.onWithinLimit(event); });
        $(e).on('reachlimit', function(event) { obj.onReachLimit(event); });
        
        $(e).on('afterKeyDown', function(event) { obj.afterKeyDown(event); });
        $(e).on('afterKeyUp', function(event) { obj.afterKeyUp(event); });
        $(e).on('afterMouseDown', function(event) { obj.afterKeyUp(event); });
        $(e).on('afterMouseUp', function(event) { obj.afterMouseUp(event); });
        $(e).on('afterContextMenu', function(event) { obj.afterContextMenu(event); });
        $(e).on('afterCut', function(event) { obj.afterCut(event); });
        $(e).on('afterPaste', function(event) { obj.afterPaste(event); });
        $(e).on('afterEmpty', function(event) { obj.afterEmpty(event); });
        $(e).on('afterNotEmpty', function(event) { obj.afterNotEmpty(event); });
        $(e).on('afterWithinLimit', function(event) { obj.afterWithinLimit(event); });
        $(e).on('afterReachLimit', function(event) { obj.afterReachLimit(event); });
        /* End Set Event Listeners */
        
        return obj;
    };
    /* End Objct Constructor */
    
    /* Start Add Method To jQuery */
    $.fn.extend({
        limitTextarea: function(options) {
            if(!$(this).data('limittextarea')) {
                var obj = new LimitTextarea(this, options);
                
                $(this).data('limittextarea', obj);
                
                obj.init();
                
                return this;
            } else {
                return $(this).data('limittextarea');
            }
        }
    });
    /* End Add Method To jQuery */
})(jQuery);
