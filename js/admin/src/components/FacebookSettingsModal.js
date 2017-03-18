import SettingsModal from 'flarum/components/SettingsModal';

export default class FacebookSettingsModal extends SettingsModal {
  className() {
    //console.log('ya');
    return 'FacebookSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('blitzz-main-facebook.admin.facebook_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('blitzz-main-facebook.admin.facebook_settings.app_id_label')}</label>
        <input className="FormControl" bidi={this.setting('flarum-main-facebook.app_id')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('blitzz-main-facebook.admin.facebook_settings.app_secret_label')}</label>
        <input className="FormControl" bidi={this.setting('blitzz-main-facebook.app_secret')}/>
      </div>
    ];
  }
}
