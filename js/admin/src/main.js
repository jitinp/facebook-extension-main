import app from 'flarum/app';

import FacebookSettingsModal from 'blitzz/main/facebook/components/FacebookSettingsModal';

app.initializers.add('blitzz-main-facebook', () => {
	console.log("hey!!");
	var test = new FacebookSettingsModal();
	console.log(test.form());
	console.log(app);
  app.extensionSettings['blitzz-main-facebook'] = () => app.modal.show(test);
});
