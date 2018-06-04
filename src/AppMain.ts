
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;

module com.application {
	export class AppMain {
		constructor() {
			
			laya.utils.Stat.show(0, 0);
			Laya.stage.scaleMode = "fixedheight";
			Laya.stage.alignH = "left";
			Laya.stage.alignV = "top"
			Laya.stage.screenMode = "horizontal";
			Laya.stage.addChild(fairygui.GRoot.inst.displayObject);

			//模块注册
			appConfig.regiserUIModule();
			this.appLoading();
		}


		/**
		 * 
		 */
		private appLoading():void {
			Laya.loader.load( [
					{ url: "res/loading/loading.fui", type: Loader.BUFFER },
		 			{ url: "res/loading/loading@atlas0.png", type: Loader.IMAGE }
				]
			,Handler.create(this,this.loadingComplete,null,true)
			,Handler.create(this,this.loadingProgress)
			);
		}

		/**
		 * 
		 */
		private loadingComplete():void {

			Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
			fairygui.UIConfig.defaultFont = "宋体";
			fairygui.UIConfig.verticalScrollBar = "ui://Basic/ScrollBar_VT";
			fairygui.UIConfig.horizontalScrollBar = "ui://Basic/ScrollBar_HZ";
			fairygui.UIConfig.popupMenu = "ui://Basic/PopupMenu";
			fairygui.UIConfig.buttonSound = "ui://Basic/click";

			/**
			 * 开启第一个模块
			 */
			uimodules.moduleManagerInst().openSceneModule(appConfig.BUBBLE_SCENE_ENTRY);
		}

		/**
		 * 
		 */
		private loadingProgress():void {
		}
	};


	// export class TestGameMain {
	// 	constructor() {
	// 		console.log("123");

	// 		Stat.show(0, 0);
	// 		Laya.stage.scaleMode = "showall";
	// 		Laya.stage.alignH = "left";
	// 		Laya.stage.alignV = "top"

	// 		Laya.stage.screenMode = "horizontal";
	// 		// Laya.loader.load([
	// 		// 	{ url: "res/Basic.atlas", type: Loader.BUFFER },
	// 		// 	{ url: "res/Basic@atlas0.png", type: Loader.IMAGE }
	// 		// ], Handler.create(this, this.onLoaded));
	// 		AssertGroupConfig.resGroupLoader(AssertGroupConfig.MODULE_GAME_MAIN,Handler.create(this,this.onLoaded));
	// 	}

	// 	private onLoaded(): void {
	// 		Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
	// 		fairygui.UIPackage.addPackage("res/Basic");
	// 		fairygui.UIConfig.defaultFont = "宋体";
	// 		fairygui.UIConfig.verticalScrollBar = "ui://Basic/ScrollBar_VT";
	// 		fairygui.UIConfig.horizontalScrollBar = "ui://Basic/ScrollBar_HZ";
	// 		fairygui.UIConfig.popupMenu = "ui://Basic/PopupMenu";
	// 		fairygui.UIConfig.buttonSound = "ui://Basic/click";

	// 		var minPanel: GUIComponent = UIPackage.createObject("Basic", "Main") as GUIComponent;
	// 		console.log("hi")
	// 		if (minPanel != null) {
	// 			fairygui.GRoot.inst.addChild(minPanel);
	// 		}
	// 	}
	// }
}


function appMain() {
	//初始化微信小游戏
	Laya.MiniAdpter.init();
	//程序入口
	Laya.init(1366, 768);
	//激活资源版本控制
	Laya.ResourceVersion.enable("version.json", Handler.create(this, resourceLoad2), Laya.ResourceVersion.FILENAME_VERSION);

	function resourceLoad2() {
		//Laya.loader.load("res/atlas/comp.atlas", Handler.create(this, onLoadComp2));
		var main: com.application.AppMain = new com.application.AppMain();
	}

	// function onLoadComp2(): void {
	// 	var main: com.application.AppMain = new com.application.AppMain();
	// }
}

appMain();