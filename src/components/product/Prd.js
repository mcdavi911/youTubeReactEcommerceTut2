//import PrdStore from "../../AppStart";


export default class Prd {
  children = []

  constructor(id, title, imgHero, imgs, childIds, price, info, count, category) {
    this.id = id;
    this.title = title;
    this.imgHero = imgHero;
    this.imgs = imgs;
    this.childIds = childIds;
    this.price = price;
    this.info = info;
    this.count = count;
    this.category = category;
  }

  static create(prdObj) {
    const { id, title, imgHero, imgs, childIds, price, info, count, category } = prdObj;

    return new Prd(id, title, imgHero, imgs, childIds, price, info, count, category);
  }

  get getImgs() {
    const childrenHeroImg = this.children.map(p => p.imgHero);

    return [this.imgHero, ...this.imgs, ...childrenHeroImg];
  }
}
