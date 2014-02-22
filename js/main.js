$(function () {
    // LANGUAGES COLORS
    var COLOURS = {"ABAP":"#ccc","ANTLR":"#9DC3FF","ASP":"#6a40fd","ActionScript":"#e3491a","Ada":"#02f88c","Agda":"#467C91","ApacheConf":"#ccc","Apex":"#ccc","AppleScript":"#ccc","Arc":"#ca2afe","Arduino":"#bd79d1","AsciiDoc":"#ccc","Assembly":"#a67219","Augeas":"#ccc","AutoHotkey":"#6594b9","AutoIt":"#36699B","Awk":"#ccc","Batchfile":"#ccc","Befunge":"#ccc","BlitzBasic":"#ccc","BlitzMax":"#ccc","Bluespec":"#ccc","Boo":"#d4bec1","Brainfuck":"#ccc","Brightscript":"#ccc","Bro":"#ccc","C":"#555","C#":"#5a25a2","C++":"#f34b7d","C-ObjDump":"#ccc","C2hs Haskell":"#ccc","CLIPS":"#ccc","CMake":"#ccc","COBOL":"#ccc","CSS":"#1f085e","Ceylon":"#ccc","ChucK":"#ccc","Clean":"#3a81ad","Clojure":"#db5855","CoffeeScript":"#244776","ColdFusion":"#ed2cd6","Common Lisp":"#3fb68b","Coq":"#ccc","Cpp-ObjDump":"#ccc","Creole":"#ccc","Crystal":"#ccc","Cucumber":"#ccc","Cuda":"#ccc","Cython":"#ccc","D":"#fcd46d","D-ObjDump":"#ccc","DM":"#075ff1","DOT":"#ccc","Darcs Patch":"#ccc","Dart":"#98BAD6","DCPU-16 ASM":"#ccc","Diff":"#ccc","Dylan":"#3ebc27","Ecere Projects":"#ccc","ECL":"#8a1267","Eiffel":"#946d57","Elixir":"#6e4a7e","Elm":"#ccc","Emacs Lisp":"#c065db","Erlang":"#0faf8d","F#":"#b845fc","FORTRAN":"#4d41b1","Factor":"#636746","Fancy":"#7b9db4","Fantom":"#dbded5","Forth":"#341708","GAS":"#ccc","GLSL":"#ccc","Genshi":"#ccc","Gentoo Ebuild":"#ccc","Gentoo Eclass":"#ccc","Gettext Catalog":"#ccc","Glyph":"#e4cc98","Go":"#a89b4d","Gosu":"#82937f","Groff":"#ccc","Groovy":"#e69f56","Groovy Server Pages":"#ccc","HTML":"#ccc","HTML+Django":"#ccc","HTML+ERB":"#ccc","HTML+PHP":"#ccc","HTTP":"#ccc","Haml":"#ccc","Handlebars":"#ccc","Haskell":"#29b544","Haxe":"#346d51","Hy":"#7891b1","IDL":"#e3592c","INI":"#ccc","Idris":"#ccc","Inno Setup":"#ccc","IRC log":"#ccc","Io":"#a9188d","Ioke":"#078193","J":"#ccc","JSON":"#ccc","JSON5":"#ccc","Jade":"#ccc","Java":"#b07219","Java Server Pages":"#ccc","JavaScript":"#f15501","Julia":"#a270ba","KRL":"#f5c800","Kotlin":"#ccc","LFE":"#004200","LLVM":"#ccc","Lasso":"#2584c3","Less":"#ccc","LilyPond":"#ccc","Literate Agda":"#ccc","Literate CoffeeScript":"#ccc","Literate Haskell":"#ccc","LiveScript":"#499886","Logos":"#ccc","Logtalk":"#ccc","Lua":"#fa1fa1","M":"#ccc","Makefile":"#ccc","Mako":"#ccc","Markdown":"#ccc","Matlab":"#bb92ac","Max":"#ce279c","MediaWiki":"#ccc","MiniD":"#ccc","Mirah":"#c7a938","Monkey":"#ccc","Moocode":"#ccc","MoonScript":"#ccc","Myghty":"#ccc","NSIS":"#ccc","Nemerle":"#0d3c6e","NetLogo":"#ff2b2b","Nginx":"#ccc","Nimrod":"#37775b","Nu":"#c9df40","NumPy":"#ccc","OCaml":"#3be133","ObjDump":"#ccc","Objective-C":"#438eff","Objective-J":"#ff0c5a","Omgrofl":"#cabbff","Opa":"#ccc","OpenCL":"#ccc","OpenEdge ABL":"#ccc","Org":"#ccc","Oxygene":"#5a63a3","PAWN":"#dbb284","PHP":"#6e03c1","Parrot":"#f3ca0a","Parrot Internal Representation":"#ccc","Parrot Assembly":"#ccc","Pascal":"#b0ce4e","Perl":"#0298c3","Perl6":"#0298c3","Pike":"#066ab2","Pod":"#ccc","PogoScript":"#d80074","PostScript":"#ccc","PowerShell":"#ccc","Processing":"#2779ab","Prolog":"#74283c","Protocol Buffer":"#ccc","Puppet":"#cc5555","Pure Data":"#91de79","Python":"#3581ba","Python traceback":"#ccc","QML":"#44a51c","R":"#198ce7","RDoc":"#ccc","REALbasic":"#ccc","RHTML":"#ccc","RMarkdown":"#ccc","Racket":"#ae17ff","Ragel in Ruby Host":"#ff9c2e","Raw token data":"#ccc","Rebol":"#358a5b","Redcode":"#ccc","RobotFramework":"#ccc","Rouge":"#cc0088","Ruby":"#701516","Rust":"#dea584","SCSS":"#ccc","SQL":"#ccc","Sage":"#ccc","Sass":"#ccc","Scala":"#7dd3b0","Scaml":"#ccc","Scheme":"#1e4aec","Scilab":"#ccc","Self":"#0579aa","Shell":"#5861ce","Slash":"#007eff","Smalltalk":"#596706","Smarty":"#ccc","Squirrel":"#ccc","Standard ML":"#dc566d","Stylus":"#ccc","SuperCollider":"#46390b","TOML":"#ccc","TXL":"#ccc","Tcl":"#e4cc98","Tcsh":"#ccc","TeX":"#3D6117","Tea":"#ccc","Textile":"#ccc","Turing":"#45f715","Twig":"#ccc","TypeScript":"#31859c","Unified Parallel C":"#755223","UnrealScript":"#a54c4d","VHDL":"#543978","Vala":"#ee7d06","Verilog":"#848bf3","VimL":"#199c4b","Visual Basic":"#945db7","Volt":"#0098db","XC":"#ccc","XML":"#ccc","XProc":"#ccc","XQuery":"#2700e2","XS":"#ccc","XSLT":"#ccc","Xtend":"#ccc","YAML":"#ccc","eC":"#ccc","edn":"#db5855","fish":"#ccc","mupad":"#ccc","nesC":"#ffce3b","ooc":"#b0b77e","reStructuredText":"#ccc","wisp":"#7582D1","xBase":"#3a4040"};
//$(document).ready(function(){
    var github,
        user;
    init();

    function init() {
        if (!store.enabled) {
            alert('Local storage is not supported by your browser. Please disabled "Private Mode", or upgrade to a modern browser');
            return;
        }
        var remember = store.get('remember');
        if( remember ){
            $('#logoutdiv').show();
            var usersto = store.get('username');
            Render( usersto );
            // TODO: don't remember me
        }else $('#logindiv').show();
    }
    
    $('#login').click(function (e){
        e.preventDefault();
        // Reset divs
        $('#logindiv').hide();
        $('#logoutdiv').show();
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
        store.clear();
        location.reload(false);
    });
        
    function Engine (userval, passval){
        // AUTHENTICATE
        github = new Github({
            username: userval,
            password: passval
        });
        // USER
        user = github.getUser();
        // STARRED
        user.starredGists(function (err, stars){
           store.set('starred', stars); 
           // GISTS
           user.gists(function (err, gists) {
               store.set('gists', gists);
               // TODO: check empty objects and empty gists
               Render( userval );
           });
        });
    };
    
    function Render (userval){
        $('#out').html('<h3>Gists</h3>');
        gists = store.get('gists');

        $.each( gists, function (index, item){
            // filelist
            var filelist = $('<ul/>', {'class': 'files'});
            $.each( item.files, function (fileindex, filevalue){
                var languageColor = COLOURS[filevalue.language] || '#ccc';
                filelist.append(
                    $('<li/>', {'class': 'file' }).append(
                        $('<span/>', {'class': 'langbullet', 'style': 'background-color:' + languageColor }),
                        $('<a/>', {href: filevalue.raw_url, class: 'raw' }).append(
                            $('<img/>', {src: 'css/svg/raw.svg'})
                        ),
                        $('<a/>', {text: filevalue.filename, href: item.html_url + '#file-' + fileindex.replace(/\./g, '-') })
                    )
                );
            });
            // dates
            var dates = $('<div/>', {'class': 'dates'}).append(
                $('<span/>', { title: item.created_at }), ' (mod ',
                $('<span/>', { title: item.updated_at }), ')'
            )
            // edit
            var baseurl = 'https://gist.github.com/' + userval + '/';
            var edit = $('<a/>', {href: baseurl + item.id  + '/edit', class: 'edit' }).append(
                $('<img/>', { src: 'css/svg/edit.svg', width: '.8em' })
            );
            // CHECK description
            if( item.description !== '' ) title=item.description;
                else title=Object.keys(item.files)[0];
            // RENDER
            $("#out").append(
                $('<div/>', {'class': 'gist'}).append(
                    $('<div/>', { 'class': 'icon ' + item.public }).append(
                        $('<img/>', { src: 'css/svg/' + item.public })),
                    $('<a/>', {text: title, href: item.html_url, target: '_blank' }), edit, dates, filelist
                )
            )
        });

        $('#starred').html('<h3>Starred</h3>');
        starred = store.get('starred');
        $.each( starred, function (index, item){
            var filelist = $('<ul/>', {'class': 'files'});
            $.each( item.files, function (fileindex, filevalue){
                var languageColor = COLOURS[filevalue.language] || '#ccc';
                filelist.append(
                    $('<li/>', {'class': 'file' }).append(
                        $('<span/>', {'class': 'langbullet', 'style': 'background-color:' + languageColor }),
                        $('<a/>', {href: filevalue.raw_url, class: 'raw' }).append(
                            $('<img/>', {src: 'css/svg/raw.svg'})
                        ),
                        $('<a/>', {text: filevalue.filename, href: item.html_url + '#file-' + fileindex.replace(/\./g, '-') })
                    )
                );
            });
            // dates
            var dates = $('<div/>', {'class': 'dates'}).append(
                $('<span/>', { title: item.created_at }), ' (mod ',
                $('<span/>', { title: item.updated_at }), ')'
            );
            // CHECK description
            if( item.description !== '' ) title=item.description;
                else title=Object.keys(item.files)[0];
            // RENDER
            var owner = $('<span/>', { text: ' by ', class: 'owner' }).append(
                $('<a/>', { href: 'https://gist.github.com/' + item.user.login + '/', text: item.user.login })            
            );
            $("#starred").append(
                $('<div/>', {'class': 'gist'}).append(
                    $('<div/>', { 'class': 'icon ' + item.public }).append(
                        $('<img/>', { src: 'css/svg/' + item.public })),
                    $('<a/>', {text: title, href: item.html_url, target: '_blank' }), owner, dates, filelist
                )
            )
        });
        
        $('.dates span').timeago();
    }
});