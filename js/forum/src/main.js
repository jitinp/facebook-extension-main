import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('blitzz-main-facebook', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('facebook',
      <LogInButton
        className="Button LogInButton--facebook"
        icon="facebook-official"
        path="/main/facebook">
        {app.translator.trans('blitzz-main-facebook.forum.log_in.with_facebook_button')}
      </LogInButton>
    );
  });
});
