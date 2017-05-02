import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class LoginGuard implements CanActivate {

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return confirm('Are you logged In?');
    }
}