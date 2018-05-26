/**
* name 
*/

import Stat = laya.utils.Stat;
import UIPackage = fairygui.UIPackage;
import GUIComponent = fairygui.GComponent;
import GWindow = fairygui.Window;
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
import UIComponentBase = com.quickGame.uiBase.UIComponentBase;
import AssertGroupConfig = com.quickGame.loader.AssertGroupLoader;
import GameScene = com.quickGame.bubble.GameScene;
import AppConfig = com.quickGame.appConfig;

module com.application {

	export class AppMain {
		constructor() {
			Stat.show(0, 0);
			Laya.stage.scaleMode = "showall";
			Laya.stage.alignH = "left";
			Laya.stage.alignV = "top"
			Laya.stage.screenMode = "horizontal";

			Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
			AssertGroupConfig.resGroupLoader(AppConfig.MODULE_GAME_MAIN,Handler.create(this,this.onLoaded));
		}

		private gameScene:GameScene;
		private onLoaded():void {
			var uiPackage:UIPackage = fairygui.UIPackage.addPackage("res/GameMain");
			fairygui.UIObjectFactory.setPackageItemExtension("ui://GameMain/GameMainSceneUI",GameScene);
			if(uiPackage != null) {
				this.gameScene = uiPackage.createObject("GameMainSceneUI") as GameScene;
				fairygui.GRoot.inst.addChild(this.gameScene);
			}
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
	Laya.init(1136, 768);
	//激活资源版本控制
	Laya.ResourceVersion.enable("version.json", Handler.create(this, resourceLoad2), Laya.ResourceVersion.FILENAME_VERSION);

	AssertGroupConfig.resInit();
	AssertGroupConfig.onWorker();

	function resourceLoad2() {
		Laya.loader.load("res/atlas/comp.atlas", Handler.create(this, onLoadComp2));
	}
	
	function onLoadComp2(): void {
		var main:com.application.AppMain = new com.application.AppMain();
	}
}

appMain();