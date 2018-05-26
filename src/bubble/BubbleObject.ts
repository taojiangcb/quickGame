/**
* name 
*/
module com.quickGame.bubble{

	export class BubbleObject extends com.quickGame.uiBase.UIComponentBase{
		
		aGrap:fairygui.GGraph;		
		ax:number = 0;
		ay:number = 0;
		raidu:number =AppConst.DEFAULT_RADIU;

		constructor(){
			super();
		}

		public internalInit() {
			this.initComps();
		}

		protected initComps():void {
			super.initComps();
			this.aGrap = new fairygui.GGraph();
		
			this.drawUpdate();
			this.addChild(this.aGrap);
			this.setDefaultXY();
			//Laya.timer.loop(AppConst.FPS,this,this.onUpdate);
			Laya.timer.frameLoop(1,this,this.onUpdate);
		}

		private onUpdate():void {
			this.drawUpdate();
			this.updateDisplay();
			console.log("this a enterframe");
		}

		private drawUpdate() {
			this.aGrap.setPivot(0.5,0.5);
			this.aGrap.setSize(this.raidu * 2,this.raidu * 2,false);
			this.aGrap.drawEllipse(1,"#FF0000","#FFFFFF");
		}

		private setDefaultXY() {
			var halfX:number = fairygui.GRoot.inst.width >> 1;
			var halfY:number = fairygui.GRoot.inst.height >> 1;
			this.x = halfX;
			this.y = halfY;
		}

		updateDisplay():void {
			var vx:number = 0; 
			var vy:number = 0;
			vx += this.ax; 
			vy+= this.ay;
			
			var nx:number = this.x + vx;
			var ny:number = this.y + vy;

			this.x = nx;
			this.y = ny;
		}

		public dispose():void {
			Laya.timer.clear(this,this.onUpdate);
			super.dispose();
		}
	}
}