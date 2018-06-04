module uiBase{

    //typescript的bug 这里实现了接口就报错 "Object prototype may only be an Object or null: undefined" 
    export class UIWindowBase extends fairygui.Window implements IModuleView {

        userData:any;
        constructor() {
            super();
        }

        init(): void{
            super.init();
            this.initComps();
        }

        initComps():void {
		}

		openRefresh():void {
		}

        onShown():void {
            this.openRefresh();
        }
    }
}