import SettingsModal from 'flarum/components/SettingsModal';

export default class FacebookSettingsModal extends SettingsModal {
  className() {
    //console.log('ya');
    return 'FacebookSettingsModal Modal--small';
  }

  form() {
    return [
      <div className="Form-group">
        <label>App Id</label>
        <input className="FormControl" bidi={this.setting('blitzz-main-facebook.app_id')}/>
      </div>,

      <div className="Form-group">
        <label>App Secret</label>
        <input className="FormControl" bidi={this.setting('blitzz-main-facebook.app_secret')}/>
      </div>
    ];
  }
}
