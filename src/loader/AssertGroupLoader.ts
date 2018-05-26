import LoaderManager = laya.net.LoaderManager;

module com.quickGame.loader {
    export class AssertGroupLoader {
        static AssetMap: Object = {};
        static resInit(): void {
            AppConfig.groupSetting();
        }

        static onWorker(): void {
            Laya.WorkerLoader.workerPath = "libs/worker.js";
            Laya.WorkerLoader.enable = true;
        }

        static offWoker(): void {
            Laya.WorkerLoader.enable = false;
        }

        static resGroupLoader(groupName: string
            , complete?: Handler
            , progress?: Handler
            , type?: string
            , prioricty?: number
            , cache?: boolean
            , ignorCache?: boolean) {
            var urls: any[] = this.AssetMap[groupName];
            if (urls != null) {
                var loadMgr: LoaderManager = Laya.loader;
                loadMgr.load(urls, complete, progress, type, prioricty, cache, groupName, ignorCache);
            }
        }

        static resGroupClear(groupName: string) {
            Laya.loader.clearResByGroup(groupName);
        }

        static resGroupCancel(groupName: string) {
            var urls: any[] = this.AssetMap[groupName];
            var address: string[] = [];
            urls.forEach(element => {
                address.push(element);
            });
            Laya.loader.cancelLoadByUrls(address);
        }
    }
}

