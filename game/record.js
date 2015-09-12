function Record(name, record, rank) {
    this.name = name;
    this.record = record;
    this.rank = rank;
};
Record.server = 'http://rureta.me:1337/';
Record.model = 'record/';
Record.record_list = [];
Record.getRecord = function(win_sec) {
    change_info("record");
    var query = 'findFirstFive/';
    jQuery.ajax({
        url: Record.server + Record.model + query,
    })
    .done(function(data) {
        self.record_list = [];
        for (var i in data) {
            var rec = data[i];
            self.record_list.push(new Record(rec.name, rec.record, parseInt(i)+1));
        }
        if ((!Record.refreshFlag &&
            typeof win_sec !== 'undefined' &&
            ( self.record_list.length<5 ||
            win_sec < self.record_list.slice(-1)[0].record
            ))) {
            jQuery('#record-break #name').focus();
            change_info("break_record");
        }
        else {
            for(var i in self.record_list) {
            var record = self.record_list[i];
            jQuery('#record-list').append(record.as_('p'));
            }
            jQuery('#record-list #loader').removeClass('active');
        }
    })
    .fail(function(e) {
        jQuery('#record-list').append('<h2>Rank board</h2>').addClass('ui center aligned header');
        jQuery('#record-list').append('<h2>Sorry server error</h2>').addClass('ui center aligned header');
        jQuery('#record-list #loader').removeClass('active');
        console.log("error",e);
    })
    .always(function() {
        console.log("complete");
    });
};
Record.breakRecord = function(name, record) {
    var query = 'create/';
    jQuery.ajax({
        url: Record.server + Record.model + query,
        data: {
            name: name,
            record: record,
        },
    })
    .done(function() {
        Record.getRecord();
    })
    .fail(function(e) {
        console.log("error",e);
    })
    .always(function() {
        console.log("complete");
    });
    
};
Record.prototype = {
    as_: function(header) {
        return new jQuery(
            '<'+header+'>'+
            this.rank+'. '+this.name+' '+this.record+'s'+
            '</'+header+'>'
                ).addClass('ui center aligned header');
    },
}

// Record.getRecord()
