import { NextFunction, Request, Response, Router } from 'express';
import ThemeAController from '../../controllers/ThemeAController';

class ThemeARouter {
  private _router = Router();
  private _controller = ThemeAController;
  
  get router() {
    return this._router;
  }
  
  constructor() {
    this._configure();
  }
  
  /**
  * Connect routes to their matching controller endpoints.
  */
  private _configure() {
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = this._controller.defaultMethod();
        res.status(200).json(result);
      }
      catch (error) {
        next(error);
      }
    });
  }
}

export = new ThemeARouter().router;