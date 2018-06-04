/**
* name 
*/
module uimodules{
	export class UIModuleWindowView extends uiBase.UIWindowBase{
		/**
		 * 包名
		 */
		packageName: string = "";
		/**
		 * 组件资源名字
		 */
		resName: string = "";
		

		constructor(packageName:string,resName:string){
			super();

			this.resName = resName;
			this.packageName = packageName;
		}

		initComps():void {
			super.initComps();
			this.contentPane = fairygui.UIPackage.createObject(this.packageName,this.resName).asCom;
		}

		protected doShowAnimation():void {
            this.setScale(0.1, 0.1);
            laya.utils.Tween.to(this,{scaleX:1,scaleY:1,alpha:1},300,laya.utils.Ease.backOut,Handler.create(
                this,this.onShown
            ));
        }

        protected doHideAnimation():void {
            laya.utils.Tween.to(this,{scaleX:0.1,scaleY:0.1,alpha:0.5},300,laya.utils.Ease.backIn,Handler.create(
                this,this.hideImmediately
            ));
        }


	}
}