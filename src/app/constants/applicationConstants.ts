export class ApplicationConstants {
  public static HOST_IP:string = 'localhost';
  public static SERVER_PORT:string = '8080';
  // public static SERVER_PORT:string = '80';
  // public static HOST_IP:string = '105.186.182.19';
  public static SERVICE_ENDPOINT = 'http://' + ApplicationConstants.HOST_IP + ':' + ApplicationConstants.SERVER_PORT;
}
