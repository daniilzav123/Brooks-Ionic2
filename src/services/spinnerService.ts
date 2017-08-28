import {Injectable} from '@angular/core';
import {Loading, LoadingController} from 'ionic-angular';

@Injectable()
export class Spinner {

    private loading: Loading;

    constructor(private loadingCtrl: LoadingController) {}

    public show(content) {
        this.loading = this.loadingCtrl.create({
            content: content,
            dismissOnPageChange: true
        });
        this.loading.present();
    }

    public hide() {
        this.loading.dismiss();
    }
}
