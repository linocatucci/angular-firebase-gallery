export class GalleryImagesModel {
  public key: string;
  public name: string;
  public url: number;

  constructor(key: string,
              name: string,
              url: number) {
    this.key = key;
    this.name = name;
    this.url = url;
  }
}


