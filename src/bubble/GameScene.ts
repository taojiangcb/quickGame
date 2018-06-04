/**
* name 
*/
module bubble{
	export class GameScene extends uiBase.UIComponentBase {
		
		role:RoleBubble;
		constructor(){
			super();
		}

		initComps():void {
			super.initComps();
			this.role = new RoleBubble();
			this.addChild(this.role);
		}
	}
}