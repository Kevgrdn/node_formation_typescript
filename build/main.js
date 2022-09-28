"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var app_bootstrap_1 = require("./core/express/app.bootstrap");
/** Lecture du fichier .env */
(0, dotenv_1.config)();
/** Initialisation du serveur */
(0, app_bootstrap_1.init)();
//# sourceMappingURL=main.js.map