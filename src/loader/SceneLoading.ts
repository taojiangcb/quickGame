
module loader{
	export class SceneLoading extends uimodules.UISceneModuleEntry {
		static NAME = "SceneLoading";
		constructor() {
			super(SceneLoading.NAME);

			this.packageName = "loading";
			this.resName = "AppLoading";

			this.addFairyPackage = [
				"res/loading/loading"
			];

			this.setPackageItems = [
				{ui:"ui://loading/AppLoading",classType:uiBase.UIComponentBase},
			];
		}

		completeFunc:Handler;
		progressFunc:Handler;
		loadingModuel:uimodules.UIModuleEntry;

		//=========================
		//txtProgress:fairygui.GTextField;
		/**
		 * 
		 * @param moduleEntry 
		 * @param complete 
		 * @param progress 
		 */
		preloading(moduleEntry:uimodules.UIModuleEntry,complete?:Handler,progress?:Handler) {
			this.completeFunc = complete;
			this.progressFunc = progress;
			this.loadingModuel = moduleEntry;
			AssertGroupLoader.resLoad(moduleEntry.uiModuleName,moduleEntry.assetMap,Handler.create(this,this.loadingComplete),Handler.create(this,this.loadingProgress),null,0,true,false)
		}

		loadingComplete(loadigSucceed:boolean):void {
			if(this.completeFunc != null) {
				if(this.completeFunc.args != null) {
					this.completeFunc.args.unshift(loadigSucceed);
				} else {
					this.completeFunc.args = [loadigSucceed];
				}
				this.completeFunc.run();
			}
		}

		loadingProgress(progress:number):void {
			console.log("progress:" + progress.toString());
			if(this.progressFunc != null) {
				if(this.progressFunc.args != null) {
					this.progressFunc.args.unshift(progress);
				} else {
					this.progressFunc.args = [progress];
				}
				this.progressFunc.run();
			}
		}
	}
}