export class Page {
  title: string;
  content: string;

  constructor(data?: any) {
    if (data) {
      Object.keys(data).forEach(key => {
        this[key] = data[key];
      });
    }
  }

  isNew() {
    return !this.title && !this.content;
  }
}
