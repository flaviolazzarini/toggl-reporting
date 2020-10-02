import { Injectable } from '@angular/core';
import { ElectronService } from '../core/services'

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settingsPath: string;

  constructor(private electronService: ElectronService) {

    const userDataPath = (electronService.remote.app).getPath('userData');
    this.settingsPath = electronService.path.join(userDataPath, "settings.json")
   }

   public saveSettings() {
    this.electronService.fs.writeFileSync(this.settingsPath, JSON.stringify({ token: "mytoken" }));
  }

}
