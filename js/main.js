// repos of authenticated
/* user.repos(function(err, repos) {
	//console.log('repos of authenticated',repos);
	$.each( repos, function (index,value){
	  var actualrepo = github.getRepo('petrosh', value.name);
		actualrepo.show(function(err, info) {
			//console.log(JSON.stringify(info, null, 4));
			console.log('repo info',info);
		});
	  actualrepo.languages(function(err, language){
		  console.log('repo languages', language);
		});
	})
}); */

// User Rate Limit
/* user.ratelimit(function(err, ratelimit) {
	console.log('Rate Limit', ratelimit);
}); */

// other user info
//var username = 'michael';
/**
user.show(username, function(err, caio) {
    console.log('caio info', caio)
});
*/

$(document).ready(function(){
    
    init();

    function init() {
        if (!store.enabled) {
            alert('Local storage is not supported by your browser. Please disabled "Private Mode", or upgrade to a modern browser');
            return;
        }
        var remember = store.get('remember');
        if( remember ){
            $('#logindiv').hide();
            var usersto = store.get('username');
            var passsto = store.get('password');
            $('#username').val( usersto );
            $('#password').val( passsto );
            Engine( usersto, passsto );
            // TODO: don't remember me
        }else $('#logoutdiv').hide();
    }
    
    $('#clearstorage').click(function (e){
        e.preventDefault();
        store.clear();
    })
    
    $('#login').click(function (e){
        e.preventDefault();
        var userval = $('#username').val();
        var passval = $('#password').val();
        var rememberme = $('#remember').prop('checked');
        
        if( rememberme ){
            store.set('username', userval);
            store.set('password', passval);
            store.set('remember', true);
        }
        // TODO: check not empty
        Engine( userval, passval );
    });
    
    $('#logout').click(function (e){
        e.preventDefault();
        store.remove('username');
        store.remove('password');
        store.set('remember', false);
        location.reload(false);
    });
        
    function Engine (user, pass){
        $('#out').html('');
        // LANGUAGES COLORS
        var langColor=[];
        $.getJSON( "data/languages.json", function( data ) {
            $.each( data, function( key, val ) {
                langColor[ key ] = val.color;
            });
        });
        // AUTHENTICATE
        var github = new Github({
            username: user,
            password: pass
        });
        // USER
        var user = github.getUser();
        user.gists(function (err, gists) {
            // TODO: check empty objects and empty gists
            $.each( gists, function (index, item){
                // filelist
                var filelist = $('<div/>', {'class': 'files'});
                $.each( item.files, function (fileindex, filevalue){
                    if (undefined == langColor[filevalue.language]) langColor[filevalue.language]='#ccc';
                    filelist.append(
                        $('<div/>', {'class': 'file', 'style': 'background:' + langColor[filevalue.language] }).append(
                            $('<a/>', {text: filevalue.filename, href: item.html_url + '#file-' + fileindex.replace(/\./g, '-') })
                        )
                    );
                });
                // dates
                var dates = $('<i/>', {'class': 'dates'}).append(
                    ' - ',
                    $('<span/>', { title: item.created_at }), ' (modified ',
                    $('<span/>', { title: item.updated_at }), ')'
                )
                $("#out").append(
                    $('<div/>', {'class': 'gist'}).append(
                        $('<a/>', {text: item.description, href: item.html_url, target: '_blank' }), dates, filelist
                    )
                )
                console.log(item);
            });
            $('i.dates span').timeago();
        });
    };
});

    
    // PRINT ON DIV
/*     function cl(div,array){
        for (var i in array) {
            $( div ).append( array[i][0] , ": " , array[i][1], "<br>" )
        };
    } */
/*
user.userGists(username, function(err, gists) {
console.log('caio gists', gists)
});
*/
/* user.userRepos(username, function(err, repos) {
	$.each( repos, function (index, value){
		var actualrepo = github.getRepo( username, value.name);
		actualrepo.languages(function(err, language) {
			console.log('repo',value,'language',language);
		});
	})
}); */