
function oFixed(opts){
	var opts=opts || {},
		elem=opts.elem,
		maxRelativeHeight=opts.maxRelativeHeight ? opts.maxRelativeHeight : null,
		offset=opts.offset ? opts.offset : 0;

	var o_ot=parseInt($(elem).offset().top),
		o_t=parseInt($(elem).css("top")),
		o_h=parseInt($(elem).height()),
		sTop;

	$(window).bind('scroll',function(){
		sTop=document.documentElement.scrollTop || document.body.scrollTop;
		if(maxRelativeHeight){
			if(parseInt(sTop)>o_ot && parseInt(sTop)<o_ot+parseInt(maxRelativeHeight)-o_h){
				elem.style.top=parseInt(sTop)-o_ot+o_t+offset+"px";
			}else{
				elem.style.top=o_t+"px";
			}
		}else{
			if(parseInt(sTop)>o_ot){
				elem.style.top=parseInt(sTop)-o_ot+o_t+offset+"px";
			}else{
				elem.style.top=o_t+"px";
			}
		}
	});
}