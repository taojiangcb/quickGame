/**
* name 
*/
module com.quickGame.modules{
	export interface IModuleView{
		userData:any;
		initComps():void;
		onAddToStage():void;
	}
}