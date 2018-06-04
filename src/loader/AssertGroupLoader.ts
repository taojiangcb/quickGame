/**
 * 资源模块管理下载类
 */


module loader {
    export class AssertGroupLoader {
        static AssetMap:Object = {};
        static resInit(): void {
            //appConfig.groupSetting();
        }

        static onWorker(): void {
            Laya.WorkerLoader.workerPath = "libs/worker.js";
            Laya.WorkerLoader.enable = true;
        }

        static offWoker(): void {
            Laya.WorkerLoader.enable = false;
        }

        // /**
        //  * 下载一个资源组模块
        //  * @param groupName 组名称 
        //  * @param complete 下载完成回调
        //  * @param progress 下载进度
        //  * @param type 
        //  * @param prioricty 
        //  * @param cache 
        //  * @param ignorCache 
        //  */
        // static resGroupLoader(groupName: string
        //     , complete?: Handler
        //     , progress?: Handler
        //     , type?: string
        //     , prioricty?: number
        //     , cache?: boolean
        //     , ignorCache?: boolean) {
        //     var urls: any[] = this.AssetMap[groupName];
        //     if (urls != null) {
        //         var loadMgr: laya.net.LoaderManager = Laya.loader;
        //         loadMgr.load(urls, complete, progress, type, prioricty, cache, groupName, ignorCache);
        //     }
        // }


        static resLoad(groupName:string,urls:any[],complete?:Handler,progress?:Handler,type?:string,prioricty?:number,cache?:boolean,ignorCache?:boolean):void {        
            if (urls != null) {
                var loadMgr: laya.net.LoaderManager = Laya.loader;
                loadMgr.load(urls, complete, progress, type, prioricty, cache, groupName, ignorCache);
            }
        }

        /**
         * 清理一个已经下载的资源组
         * @param groupName 
         */
        static resGroupClear(groupName: string) {
            Laya.loader.clearResByGroup(groupName);
        }

        /**
         * 取消一个资源组下载
         * @param groupName 
         */
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

