$(function(){
    json = "test.json";
    target = $('#list');
    $.getJSON(json, function(data,status){
        for(var n in data) {
            var text = '<li>';
            if (data[n].url){
                line = '<a href="'+data[n].url+'" target="_blank"><span>'+data[n].name+'</span></a>';
            }else{
                line = '<i><span>'+data[n].name+'</span></i>';
            }
            text = text+line+'</li>';
            $(target).append(text);
        }
    });
});
