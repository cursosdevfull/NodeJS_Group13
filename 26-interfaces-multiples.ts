interface INotificationEmail {
  sentEmail(message: string): void;
}

interface INotificationWhatsapp {
  sentWhatsapp(message: string): void;
}

class NotificationCustomer
  implements INotificationEmail, INotificationWhatsapp
{
  sentWhatsapp(message: string): void {
    console.log("whatsapp's message send");
  }
  sentEmail(message: string): void {
    console.log("email's message send");
  }
}

class NotificationPlanner implements INotificationEmail {
  sentEmail(message: string): void {
    console.log("message send by planner");
  }
}
