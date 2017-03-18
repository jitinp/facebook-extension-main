import app from 'flarum/app';

import FacebookSettingsModal from 'blitzz/main/facebook/components/FacebookSettingsModal';

app.initializers.add('blitzz-main-facebook', () => {
	console.log("hey!!");
	var fb_modal = new FacebookSettingsModal();
	console.log(fb_modal.form());
	console.log(app);
  app.extensionSettings['blitzz-main-facebook'] = () => app.modal.show(fb_modal);
});
