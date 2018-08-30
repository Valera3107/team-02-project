import Storage from "./Storage";
import Controller from "./Controller";
import Model from "./Model";
import View from "./View";

export default class App {
  constructor() {
    const storage = new Storage();
    const model = new Model(storage);
    const view = new View();
    this.controller = new Controller(model, view);
  }
}
