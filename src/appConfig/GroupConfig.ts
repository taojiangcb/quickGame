/**
* name 
*/
module com.quickGame.appConfig{
	export let MODULE_GAME_MAIN: string = "MODULE_GAME_MAIN";
	export function groupSetting():void {
		 let AssetMap:any = com.quickGame.loader.AssertGroupLoader.AssetMap;
		 AssetMap[MODULE_GAME_MAIN] = [
			{ url: "res/GameMain.fui", type: Loader.BUFFER },
			{ url: "res/GameMain@atlas0.png", type: Loader.IMAGE }
		];
	}
}