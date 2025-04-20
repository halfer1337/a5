import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-show-name',
  imports: [],
  templateUrl: './show-name.component.html',
  styleUrl: './show-name.component.css'
})
export class ShowNameComponent {

  name = "test"

  constructor(private activateRouter: ActivatedRoute,
    private router: Router) {
this.name = activateRouter.snapshot.params['name'];
}

goMain(): void {
  this.router.navigateByUrl('/');
  }
}
