"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = __importDefault(require("../mysql/database"));
const router = express_1.Router();
router.get("/heroes", (req, res) => {
    const query = "SELECT *  FROM heroes  ";
    database_1.default.ejecutarQuery(query, (err, heroes) => {
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
router.get("/heroes/:id", (req, res) => {
    const id = req.params.id;
    const escapeId = database_1.default.instance.cnn.escape(id);
    const query = `SELECT * FROM heroes WHERE id=${escapeId} `;
    database_1.default.ejecutarQuery(query, (err, heroes) => {
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
exports.default = router;
