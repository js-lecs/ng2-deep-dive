import { HomeComponent } from './../../pages/home/home.component';
import { CanDeactivate } from '@angular/router';


export class UnsavedGuard implements CanDeactivate<HomeComponent> {

    canDeactivate(target: HomeComponent) {
        if (target.hasChanges()) {
            return confirm('Do you really want to cancel?');
        }
        return true;
    }
}