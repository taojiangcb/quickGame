
module uimodules{

	export class UIModuleEntry extends puremvc.Mediator implements IUIModuleEntry {
		/**
		 * 模块显示
		 */
		moduleView: uiBase.IModuleView;

		/**
		 * 当前的状态
		 */
		state: EntryState = EntryState.NORMAL;

		/**
		 * 上层显示
		 */
		parentLayer: fairygui.GComponent;

		/**
		 * 加载的资源文件列表
		 */
		assetMap: any[] = [
			// { url: "res/GameMain.fui", type: Loader.BUFFER },
			// { url: "res/GameMain@atlas0.png", type: Loader.IMAGE }
		];

		/**
		 * 添加的资源包
		 */
		addFairyPackage: string[] = [
			// "res/GameMain"
		];

		/**
		 * 设置包组件
		 */
		setPackageItems: any[] = [
			// {ui:"ui://GameMain/GameMainSceneUI",classType:com.quickGame.bubble.GameScene},
		]
		
		/**
		 * 包名字
		 */
		packageName: string = "";

		/**
		 * 组件资源名字
		 */
		resName: string = "";
	
		/**
		 * 打开时的数据 
		 * 
		 **/
		userOpenData: any;

		constructor (mediatorName?: string, viewComponent?: any) {
			super(mediatorName,viewComponent);
			this.parentLayer = fairygui.GRoot.inst;
		}


		internalInit(): void {

		}

		/**
		 * 添加到包体
		 */
		addFairyGUIPackage(): void {
			var fpackages: string[] = this.addFairyPackage;
			fpackages.forEach(element => {
				fairygui.UIPackage.addPackage(element);
			});
		}

		/**
		 * 设置包内的组件
		 */
		setPackageItemComponent(): void {
			var packageItems: any[] = this.setPackageItems;
			packageItems.forEach(element => {
				fairygui.UIObjectFactory.setPackageItemExtension(element.ui, element.classType);
			});
		}


		openView(): void {
			
		}

		refreshView(): void {
			if (this.moduleView != null) {
				this.moduleView.openRefresh();
			}
		}

		/**
		 * @param destory 
		 */
		closeView(destory: boolean): void {
			
		}

		get uiModuleName():string {
			return this.mediatorName;
		}
	}
}