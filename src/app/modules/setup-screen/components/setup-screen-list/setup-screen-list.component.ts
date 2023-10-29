import { Component, OnInit } from '@angular/core';
import { SetupScreen } from '../../model/setup-screen';
import { SetupScreenService } from '../../services/setup-screen.service';

@Component({
  selector: 'app-setup-screen-list',
  templateUrl: './setup-screen-list.component.html',
  styleUrls: ['./setup-screen-list.component.css']
})
export class SetupScreenListComponent implements OnInit {
  setupScreen: SetupScreen;
  contentLoaded = false;
  constructor(private setupScreenService: SetupScreenService) { }

  ngOnInit(): void {
    this.getallSetupScreens();
  }

  async getallSetupScreens() {
    this.setupScreen = await this.setupScreenService.getSetupScreen();
    this.contentLoaded = true;
  }

}
