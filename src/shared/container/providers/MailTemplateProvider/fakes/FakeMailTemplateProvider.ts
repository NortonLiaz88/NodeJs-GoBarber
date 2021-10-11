import ISendMailDTO from '../../MailProvider/dtos/ISendMailDTOS';
import IMailProvider from '../../MailProvider/models/IMailProvider';
import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

interface IMessage {
  to: string;
  body: string;
}
export default class FakeMailTemplateProvider implements IMailTemplateProvider {
  private messages: ISendMailDTO[] = [];
  public async parse(): Promise<string> {
    return 'Mail Content';
  }
}
