$(document).ready(function() {
	
    function show_contact_adr() {
    var m; 
    m='oj';
    m+='@';
    m+='ojrasch.no';
	$('#contact-mail').attr("href", 'mailto:'+m);
	$('#contact-mail > span').text(m);
    }     
    show_contact_adr();
    
});
