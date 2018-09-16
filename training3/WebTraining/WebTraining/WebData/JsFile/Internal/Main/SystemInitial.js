import	'./InitObject.js';
import  './Vue/Instance/IVue.js';
import	'../../../CSS/Internal/Main/main.css';//import css 

$(window).on('load', function () {
    webTrainingObject.vueModule.Init();
});

//develop code for webpakc HMR Use
if( module.hot ) {
    module.hot.accept();
}
