import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export const confirmInGuard = (route: ActivatedRouteSnapshot, router: RouterStateSnapshot) => {
    return confirm("Точно хотите перейти?");
}
