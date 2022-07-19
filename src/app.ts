import {
    Application, Graphics,
    Loader,
    LoaderResource,
    utils,
} from "pixi.js";
import {Spine} from "pixi-spine";

export class App {
    constructor() {
            const app = new Application({
                width: 1920,
                height: 1080,
                resolution: window.devicePixelRatio || 1,
                backgroundColor:0x000000,
                resizeTo: window,
            });
            document.body.appendChild(app.view);

            // app.loader.baseUrl = "./assets/";
            // app.loader.add('spineboy-pro', 'spineboy-pro.json')
            // app.loader.onComplete.add(onAssetsLoaded)
            // app.loader.load();
            // function onAssetsLoaded(loader: Loader, resources: utils.Dict<LoaderResource>) {
            //     console.log(resources);


                app.stage.addChild(new Graphics().beginFill(0xffffff).drawRect(100,100,200,200).endFill());

            //     const spine = new Spine(resources.spine.spineData);
            // }
    }
}
