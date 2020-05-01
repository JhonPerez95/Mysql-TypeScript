import { Router, Request, Response } from "express";
import Mysql from "../mysql/database";
const router = Router();

router.get("/heroes", (req: Request, res: Response) => {
  const query = "SELECT *  FROM heroes  ";

  Mysql.ejecutarQuery(query, (err: any, heroes: Object[]) => {
    if (err) {
      res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      heroes,
    });
  });
});

router.get("/heroes/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const escapeId = Mysql.instance.cnn.escape(id);
  const query = `SELECT * FROM heroes WHERE id=${escapeId} `;

  Mysql.ejecutarQuery(query, (err: any, heroes: Object[]) => {
    if (err) {
      res.status(400).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      heroes,
    });
  });
});

export default router;
