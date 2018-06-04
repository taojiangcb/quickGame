/**
 * 模块先关的配置
* name 
*/

module appConfig{
	export let BUBBLE_SCENE_ENTRY:string = "BUBBLE_SCENE_ENTRY";
	export function regiserUIModule():void {
		uimodules.register(BUBBLE_SCENE_ENTRY,bubble.BubbleSceneEntry);
	}

	export function getFacade():puremvc.IFacade {
		return puremvc.Facade.instance;
	}
}