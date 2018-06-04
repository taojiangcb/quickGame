/**
* name 
*/
module uimodules {
	/**
	 * 
	 */
	export class UIWindowModuleEntry extends UIModuleEntry{
		constructor(medianame?:string,viewcomp?:any) {
			super(medianame,viewcomp);
		}

		/**
		 * 
		 */
		openView(): void {
			if(this.moduleView == null) {
				this.moduleView = new UIModuleWindowView(this.packageName,this.resName);
			}
			this.moduleView.userData = this.userOpenData;
			var win:UIModuleWindowView = <UIModuleWindowView>this.moduleView;
			win.show();
			this.state = EntryState.OPEN;
		}

		/**
		 * @param destory 
		 */
		closeView(destory: boolean):void {
			if(this.moduleView != null) {
				var win:UIModuleWindowView = <UIModuleWindowView>this.moduleView;
				if(destory) {
					win.hideImmediately();
					win.dispose();
					this.moduleView = null;
				} else {
					win.hide();
				}
				this.state = EntryState.OPEN;
			}
		}
	}
}