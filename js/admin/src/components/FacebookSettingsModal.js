import SettingsModal from 'flarum/components/SettingsModal';

export default class FacebookSettingsModal_ extends SettingsModal {
  className() {
    //console.log('ya');
    return 'FacebookSettingsModal Modal--small';
  }

  title() {
    return 'Facebook Details';
  }

  form() {
    return [
      <div className="Form-group">
        <label>Facebook Id</label>
        <input className="FormControl" />
      </div>,

      <div className="Form-group">
        <label>Facebook Secret</label>
        <input className="FormControl" />
      </div>
    ];
  }
}
