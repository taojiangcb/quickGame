/**
* name 
*/
module bubble{
	export class BubbleSceneEntry extends uimodules.UISceneModuleEntry{
		constructor(name?:string,view?:any) {
			
			super(appConfig.BUBBLE_SCENE_ENTRY,view);
			this.assetMap = [
				 { url: "res/GameMain.fui", type: Loader.BUFFER },
				 { url: "res/GameMain@atlas0.png", type: Loader.IMAGE }
			]

			this.addFairyPackage = [
				"res/GameMain"
			];

			this.setPackageItems = [
				{ui:"ui://GameMain/GameMainSceneUI",classType:bubble.GameScene}
			];

			this.packageName = "GameMain";
			this.resName = "GameMainSceneUI";
		}
	}
}