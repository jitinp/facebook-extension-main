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
            return 'Facebook Details';
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
                'Facebook Id'
              ),
              m('input', { className: 'FormControl' })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                'Facebook Secret'
              ),
              m('input', { className: 'FormControl' })
            )];
          }
        }]);
        return FacebookSettingsModal;
      }(SettingsModal);

      _export('default', FacebookSettingsModal);
    }
  };
});;
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
				var fb_modal = new FacebookSettingsModal();
				console.log(fb_modal.form());
				console.log(app);
				app.extensionSettings['blitzz-main-facebook'] = function () {
					return app.modal.show(fb_modal);
				};
			});
		}
	};
});