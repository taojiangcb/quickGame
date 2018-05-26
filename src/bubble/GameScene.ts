/**
* name 
*/
module com.quickGame.bubble{
	export class GameScene extends com.quickGame.uiBase.UIComponentBase {
		
		role:RoleBubble;
		
		constructor(){
			super();
		}

		protected initComps():void {
			super.initComps();
			this.role = new RoleBubble();
			this.addChild(this.role);
		}
	}
}