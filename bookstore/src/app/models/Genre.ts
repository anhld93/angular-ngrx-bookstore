export class Genre {
  id: number;
  name: string;

  constructor(genreResponse: any) {
    this.id = genreResponse.id;
    this.name = genreResponse.title;
  }
}
