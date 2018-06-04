
/**
 * UIComponent 组件
 */

module uiBase{
	export class UIComponentBase extends fairygui.GComponent implements IModuleView{
		
		userData:any;
		constructor(){
			super();
			this.displayObject.on(Laya.Event.DISPLAY,this,this.openRefresh);
		}

		protected constructFromXML(xml: Object): void {
			super.constructFromXML(xml);
			this.initComps();
		}

		/**
		 * 初始化子组件
		 */
		initComps():void {
		}

		/**
		 * 当显示时刷新
		 */
		openRefresh():void {
		}

		dispose():void {
			if(!this.displayObject) {
				this.displayObject.off(Laya.Event.DISPLAY,this,this.openRefresh);
			}
			super.dispose();
		}
	}
}