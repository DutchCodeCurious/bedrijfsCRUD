import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../../Store/model/user.model';
import { getUser, resetUser } from '../../../Store/Users/User.Actions';
import { getuser } from '../../../Store/Users/User.Selectors';

@Component({
  selector: 'app-userdetails',
  standalone: false,
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.scss',
})
export class UserdetailsComponent implements OnInit, OnDestroy {
  user!: User;
  userLoaded = false;
  constructor(private store: Store, private router: Router) {
    this.user = this.router.getCurrentNavigation()?.extras.state?.['user'];
    this.userLoaded = true;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.store.dispatch(resetUser());
  }
}
