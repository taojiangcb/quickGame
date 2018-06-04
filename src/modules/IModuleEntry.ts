
module uimodules{

	export enum EntryState {
		NORMAL = 0,
		OPEN ,		//已打卡
		CLOSE,		//关闭
		LOADING,	//下载中
	}


	export interface IUIModuleEntry{
		/**
		 * 界面
		 */
		moduleView:uiBase.IModuleView;
		/**
		 * 当前的状态
		 */
		state:EntryState;
		/**
		 * 开启模块是的用户数据
		 */
		userOpenData:any;
		
		/**
		 * 获取UI子级内容
		 */
		internalInit():void;
		addFairyGUIPackage():void;
		setPackageItemComponent():void;
		closeView(destory:boolean):void;
		openView():void
		refreshView():void;
	}
}