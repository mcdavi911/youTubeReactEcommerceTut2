

export default class Prd {

  static _id = 0;
  //static _prds = [];
  _children = []

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

    //Prd._prds.push(this);
    //console.log('hello from PRd class', Prd._prds);
  }

  static childrenTest() {



    //console.log('childId', this.childIds);
    /*
    if (this.childIds.length === 0) return;

    childIds.forEach(id => {
      const prd = Prd._prds.find(p => p.id === id);
      this._children.push(prd);
    })
    */
  }







  /*
  get imgs() {
    
  }
  */
}



/*
{
  id: 1,
  title: "Nodalview Cases",
  imgHero: "img/products/cases.jpg",
  childIds: [],
  imgs: [],
  price: 19,
  info:
    "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub. Echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
  count: 0,
  category: productType.CASE,
}
*/
