import SettingsModal from 'flarum/components/SettingsModal';

export default class ConfigureSMTPSettingModal extends SettingsModal {

    className() {
        return 'Modal--small';
    }

    title() {
        return 'SMTP Settings';
    }

    form() {
        return [
            <div className = "Form-group">
                <label> Mail Driver </label>
                
                smtp
            </div>

           
        ];
    }
}
