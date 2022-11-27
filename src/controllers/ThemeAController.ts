import ErrorHandler from "../models/ErrorHandler";

class ThemeAController {
  defaultMethod() {
    throw new ErrorHandler(501, 'Not implemented method');
  }
}

export = new ThemeAController();