
module uimodules{
	export class UISceneModuleEntry extends UIModuleEntry{		

		openView(): void {

			if (this.moduleView == null) {
				this.moduleView = <uiBase.UIComponentBase>fairygui.UIPackage.createObject(this.packageName, this.resName).asCom;
				this.internalInit();
			}
			if (this.state == EntryState.OPEN) {
				return;
			}
			if (this.asComp != null) {
				this.asComp.userData = this.userOpenData;
				if (this.parentLayer != null) {
					this.parentLayer.addChild(this.asComp);
					this.state = EntryState.OPEN;
				}
			}
		}

		closeView(destory: boolean = false): void {
			if (this.asComp != null) {
				this.asComp.removeFromParent();
				this.state = EntryState.CLOSE;
				if (destory) {
					this.asComp.dispose();
				} 
				this.moduleView = null;
			}
		}

		get asComp():uiBase.UIComponentBase {
			return this.moduleView as uiBase.UIComponentBase;
		}
	}
}