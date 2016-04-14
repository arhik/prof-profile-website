export class TitleFormatValueConverter {
  toView(value) {
    return value.replace(/[{}]/g, '');
  }
}