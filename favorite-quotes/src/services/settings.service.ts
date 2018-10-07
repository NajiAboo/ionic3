export class SettingService {
    private backgroundAlt = false;

    setBackgroundAlt(change:boolean) {
        this.backgroundAlt = change;
    }

    backGroundAltStatus() {
        return this.backgroundAlt;
    }
}