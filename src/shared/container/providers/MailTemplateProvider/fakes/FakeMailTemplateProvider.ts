import IMailProvider from '../../MailProvider/models/IMailProvider';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return;
  }
}
