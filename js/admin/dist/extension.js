'use strict';

System.register('blitzz/main/facebook/main', ['flarum/app', 'blitzz/main/facebook/components/FacebookSettingsModal'], function (_export, _context) {
	"use strict";

	var app, FacebookSettingsModal;
	return {
		setters: [function (_flarumApp) {
			app = _flarumApp.default;
		}, function (_blitzzMainFacebookComponentsFacebookSettingsModal) {
			FacebookSettingsModal = _blitzzMainFacebookComponentsFacebookSettingsModal.default;
		}],
		execute: function () {

			app.initializers.add('blitzz-main-facebook', function () {
				console.log("hey!!");
				var test = new FacebookSettingsModal();
				//console.log(test);
				app.extensionSettings['blitzz-main-facebook'] = function () {
					return app.modal.show(test);
				};
			});
		}
	};
});;
'use strict';

System.register('blitzz/main/facebook/components/FacebookSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, FacebookSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      FacebookSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(FacebookSettingsModal, _SettingsModal);

        function FacebookSettingsModal() {
          babelHelpers.classCallCheck(this, FacebookSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, (FacebookSettingsModal.__proto__ || Object.getPrototypeOf(FacebookSettingsModal)).apply(this, arguments));
        }

        babelHelpers.createClass(FacebookSettingsModal, [{
          key: 'className',
          value: function className() {
            //console.log('ya');
            return 'FacebookSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('blitzz-main-facebook.admin.facebook_settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('blitzz-main-facebook.admin.facebook_settings.app_id_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('flarum-main-facebook.app_id') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('blitzz-main-facebook.admin.facebook_settings.app_secret_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('blitzz-main-facebook.app_secret') })
            )];
          }
        }]);
        return FacebookSettingsModal;
      }(SettingsModal);

      _export('default', FacebookSettingsModal);
    }
  };
});