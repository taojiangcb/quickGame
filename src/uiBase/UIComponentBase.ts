/**
* name 
*/

import GComponent = fairygui.GComponent;
import IModuleView = com.quickGame.modules.IModuleView;


module com.quickGame.uiBase{
	export class UIComponentBase extends fairygui.GComponent implements IModuleView{

		userData:any;
		constructor(){
			super();
			this.displayObject.on(Laya.Event.DISPLAY,this,this.onAddToStage);
		}

		protected constructFromXML(xml: Object): void {
			super.constructFromXML(xml);
			this.initComps();
		}

		initComps():void {
		}

		onAddToStage():void {
		}

		dispose():void {
			if(!this.displayObject) {
				this.displayObject.off(Laya.Event.DISPLAY,this,this.onAddToStage)
			}
			super.dispose();
		}
	}
}