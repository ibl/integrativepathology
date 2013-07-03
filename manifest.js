// This is the base manifest for integrativepathology.org
// At https://github.com/wApps/manifest#wapps-all-you-need-is-a-manifest it is explanined how you can add your own apps through the use of the "addmanifest" argument
// it includes four sections: 1) Branding, 2) Tabs, 3) Apps, and 4) Authors


// 1) BRANDING - the icon and link in the upper left corner
wApps.manifest.brand={
    pic:'https://raw.github.com/ibl/integrativepathology/master/iPath.png',
    url:'https://github.com/ibl/integrativepathology/blob/master/manifest.js'
};

// 2) TABS - the navigation tabs in the head of wApps. 
//    The code manage "myApps", "Store" and "People",
//    the rest is up to you.
wApps.manifest.tabs={
    "myApps":{
        html:'Apps you selected from the AppStore ...',
        Div:{} // where the DOM element will be set later 
    },
    "Store":{
        html:'Retrieving list of Apps from the manifest ...',
        Div:{}
    },
    "People":{
        html:'Retrieving list of people authoring Apps ...',
        Div:{}
    },
    "About":{
        html:'<h1>Integrative Pathology</h1>This is a prototype integrative web ecosystem for web applications developped to analyse Pathology results. For a web application to be included <a href=https://github.com/wApps/manifest#wapps-all-you-need-is-a-manifest target=blank>all you need is a manifest</a>. The wApps framework used to achieve this is an experiment in loosening the architecture of a webApp store to achieve a deeper integration between autonomously developed components. If you read this far, you are probably the coding type and are ready to learn about <a href=https://github.com/wApps/manifest#parameters target=blank>the URL arguments</a> that direct the wApps environment to a suite of applications selected by you. Note in particular the "addmanifest" argument, particularly useful if you are developping a new app, or want a targetted audience to use an extended/tailored version of the base manifest.',
        Div:{}
    }
};

// 3) APPS - the description of the applications 
wApps.manifest.apps.push(
    
    {
    "name": "ET callHome",
    "description": "a little coding on the manifest can go a long way.",
    "url": "https://code.google.com/p/jmat/", // home page of App
    "author":"Jonas Almeida",
    "namespace":'jmat',
    buildUI:function(id){
        this.require('https://jmat.googlecode.com/git/jmat.js', //'http://localhost:8888/jmat/jmat.js',
            function(){
                $('<div id="plotHere">').appendTo($('#'+id).html(''));
                jmat.plot("plotHere",jmat.rand(100),jmat.rand(100));
                var bt = $('<button>').html('call home').appendTo($('#'+id));
                bt.click(function(){jmat.plot("plotHere",jmat.rand(100),jmat.rand(100))});      
            }
        )}
    },

    {
    "name": "someWApp",
    "description": "Some wApp one of you links here",
    "url": "http://uab.mathbiol.org/workshop",
    "author":"Some Author",
    "namespace":'Some_wAapp',
    buildUI:function(id){
        this.require('', // script to load your code 
            function(){
                $('#'+id).html("<h1>Some wApp</h1>Some Application you developped and want to wApp here");
            });
        }
    }
);

// 4) AUTHORS - description of the authors, matching the names in the Apps,
//              where they can be described as a string or, when there is
//              a team of authors, as an Array of strings .
wApps.manifest.authors.push(
    {
    "name":"Jonas Almeida",
    "url":"http://jonasalmeida.info"
    },

    {
    "name":"David Robbins",
    "url":"https://sites.google.com/a/mathbiol.org/robbinsd/"
    },

    {
    "name":"Sean Wilkinson",
    "url":"mailto:wilkinson@uab.edu"
    },

    {
    "name":"Alexander Gruneberg",
    "url":"https://sites.google.com/a/mathbiol.org/agrueneberg/"
    },

    {
    "name":"Alex Dussaq",
    "url":"mailto:adussaq@uab.edu"
    },

    {
    "name":"Some Author",
    "url":"http://someUrl.com"
    }
);