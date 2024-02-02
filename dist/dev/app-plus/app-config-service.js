
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F8F8F8","bounce":"none","navigationBar":{"backgroundColor":"#F8F8F8","titleText":"uni-app","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.94","entryPagePath":"pages/Index","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#494949","selectedColor":"#8f60df","borderStyle":"block","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"60px","backgroundColor":"#fff","iconfontSrc":"/static/Icon/iconfont.ttf","list":[{"pagePath":"pages/Index","color":"#494949","text":"首页","iconfont":{"text":"","selectedText":"","fontSize":"22px","color":"#494949","selectedColor":"#8f60df"}},{"pagePath":"pages/question/QuestionIndex","text":"八股文","iconfont":{"text":"","selectedText":"","fontSize":"22px","color":"#494949","selectedColor":"#8f60df"}},{"pagePath":"pages/exam/ExamIndex","text":"在线考试","iconfont":{"text":"","selectedText":"","fontSize":"22px","color":"#494949","selectedColor":"#8f60df"}},{"pagePath":"pages/share/ShareIndex","text":"经验分享","iconfont":{"text":"","selectedText":"","fontSize":"22px","color":"#494949","selectedColor":"#8f60df"}},{"pagePath":"pages/my/MyIndex","text":"我的","iconfont":{"text":"","selectedText":"","fontSize":"22px","color":"#494949","selectedColor":"#8f60df"}}],"selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/Index","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"style":"custom","type":"default"},"isNVue":false}},{"path":"pages/question/QuestionIndex","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"navigationBar":{"titleText":"uni-app","type":"default"},"isNVue":false}},{"path":"pages/my/MyIndex","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":4,"navigationBar":{"titleText":"uni-app","type":"default"},"isNVue":false}},{"path":"pages/exam/ExamIndex","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"navigationBar":{"titleText":"uni-app","type":"default"},"isNVue":false}},{"path":"pages/share/ShareIndex","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"navigationBar":{"titleText":"uni-app","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  