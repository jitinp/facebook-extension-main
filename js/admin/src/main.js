import app from 'flarum/app';

import FacebookSettingsModal_ from 'blitzz/main/facebook/components/FacebookSettingsModal';
import ConfigureSMTPSettingModal from 'blitzz/main/facebook/components/ConfigureSMTPSettingModal';

app.initializers.add('blitzz-main-facebook', () => {
	//console.log("hey!!");
	var fb_modal = new FacebookSettingsModal_();
	var smtp_modal = new ConfigureSMTPSettingModal();
	console.log(smtp_modal.form());
	//console.log(app);
	//console.log("Hoa!!");
  app.extensionSettings['flarum-auth-facebook'] = () => app.modal.show(fb_modal);
});
