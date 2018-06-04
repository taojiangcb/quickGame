/**
* name 
*/
module uiBase{
	export class FastChildGetter  {

        component:fairygui.GComponent;
        childPathDic:any;
        clickListner:Function;
        clickThisObj:any;

        constructor(component:fairygui.GComponent, clickListner:Function, thisObj:any) {
            this.component = component;
            this.childPathDic = {};
            this.clickListner = clickListner;
            this.clickThisObj = thisObj;
        }


        getChild(path:string):fairygui.GObject {
            var pathArr = path.split(".");
            var len = pathArr.length;
            var gObject:fairygui.GObject = this.component;
            for (var i=0; i<len; ++i){
                gObject = gObject.asCom.getChild(pathArr[i]);
            }
            if (gObject != null) {
                this.childPathDic[gObject._id] = path;
				gObject.onClick(this,this.onClick,[this]);
            }
            return gObject;
        }

        getPath(gobj:fairygui.GObject):string {
            return this.childPathDic[gobj.id];
        }

        onClick(...params):void {
            var target:fairygui.GObject = <fairygui.GObject><any>params[0];
            if (this.clickListner != null) {
                this.clickListner.call(this.clickThisObj,target);
            }
        }

    }
}