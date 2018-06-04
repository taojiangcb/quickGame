/**
 * 模块管理
 *  
*/
module uimodules{
	/**
	 * 单例
	 */
	var moduleInst:UIModuleManager;
	export function moduleManagerInst():UIModuleManager {
		if(moduleInst == null) {
			moduleInst = new UIModuleManager();
		}
		return moduleInst;
	}

	/**
	 * UIModuleCls 缓存
	 */
	var uiModuleClsMap:any;
	export function register(moudleName:string,cls:Object) {
		if(uiModuleClsMap == null) uiModuleClsMap = new Object();
		uiModuleClsMap[moudleName] = cls;
	}

	export class UIModuleManager{
		/**
		 * 缓存
		 */
		uiModuleEntryMap:any = {};

		/**
		 * 
		 */
		preloadingScene:loader.SceneLoading;
		

		constructor(){}
		/**
		 * 
		 * @param uiModuleName 
		 * @param moduleEntry 
		 * @param userData 
		 */
		openSceneModule(uiModuleName:string,userData?:any):void {
			var moduleEntryCls:any = uiModuleClsMap[uiModuleName];
			if(moduleEntryCls == null) return;
			var uiModuleEntry:UIModuleEntry;
			uiModuleEntry = this.uiModuleEntryMap[uiModuleName];
			if( uiModuleEntry != null) {
				uiModuleEntry.userOpenData = userData;
				if(uiModuleEntry.state != EntryState.LOADING && uiModuleEntry.state != EntryState.OPEN) {
					uiModuleEntry.openView();
				}
				else if(uiModuleEntry.state == EntryState.OPEN) {
					uiModuleEntry.refreshView();
				}
			} else {
				uiModuleEntry = new moduleEntryCls();
				this.uiModuleEntryMap[uiModuleName] = uiModuleEntry;

				if(this.preloadingScene == null) {
					this.preloadingScene = new loader.SceneLoading();
					this.preloadingScene.addFairyGUIPackage();
					this.preloadingScene.setPackageItemComponent();
				}

				this.preloadingScene.openView();
				/**
				 * 开启预制加载
				 */
				this.preloadingScene.preloading(uiModuleEntry,Handler.create(this,this.preloadingComplete,[uiModuleEntry]));
			}
		}

		/**
		 * 
		 */
		preloadingComplete(...args):void {
			var uiModuleEntry:UIModuleEntry = <UIModuleEntry>args[1];
			uiModuleEntry.addFairyGUIPackage();
			uiModuleEntry.setPackageItemComponent();
			appConfig.getFacade().registerMediator(uiModuleEntry);
			uiModuleEntry.openView();
			this.preloadingScene.closeView();
		}

		openWindowModule(uiModuleName:string,userData?:any,needPreload:boolean = false):void {
			var moduleEntryCls:any = uiModuleClsMap[uiModuleName];
			if(moduleEntryCls == null) return;
			var uiModuleEntry:UIModuleEntry;
			if(needPreload) {
				this.openSceneModule(uiModuleName,userData);
			}  else {
				uiModuleEntry = this.uiModuleEntryMap[uiModuleName];
				if( uiModuleEntry != null) {
					uiModuleEntry.userOpenData = userData;
					if(uiModuleEntry.state != EntryState.LOADING && uiModuleEntry.state != EntryState.OPEN) {
						uiModuleEntry.openView();
					} else if(uiModuleEntry.state == EntryState.OPEN) {
						uiModuleEntry.refreshView();
					}
				} else {
					var uiModuleEntry:UIModuleEntry = new moduleEntryCls();
					this.uiModuleEntryMap[uiModuleName] = uiModuleEntry;
					uiModuleEntry.addFairyGUIPackage();
					uiModuleEntry.setPackageItemComponent();
					appConfig.getFacade().registerMediator(uiModuleEntry);
					uiModuleEntry.openView();
				}
			}
		}

		closeModule(uiModuleName:string,destory:boolean):void {
			var uiModuleEntry:UIModuleEntry = this.uiModuleEntryMap[uiModuleName];
			if(uiModuleEntry != null) {
				uiModuleEntry.closeView(destory);
				if(destory) {
					delete this.uiModuleEntryMap[uiModuleName];
					//删除资源和缓存
					loader.AssertGroupLoader.resGroupCancel(uiModuleName);
					loader.AssertGroupLoader.resGroupClear(uiModuleName)
				}
			}
		}
	}
}