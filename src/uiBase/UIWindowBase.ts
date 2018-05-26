module com.quickGame.uiBase{
    export class UIWindowBase extends fairygui.Window implements com.quickGame.modules.IModuleView {
        userData:any;
        constructor() {
            super();
        }

        protected constructFromXML(xml: Object): void {
			super.constructFromXML(xml);
			this.initComps();
		}

        initComps():void {
		}

		onAddToStage():void {
		}

        onShown():void {
            this.onAddToStage();
        }
    }
}