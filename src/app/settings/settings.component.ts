import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../shared/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
  }

  /**
   * saveSettings
   */
  public saveSettings() {
    this.settingsService.saveSettings();
  }
}
