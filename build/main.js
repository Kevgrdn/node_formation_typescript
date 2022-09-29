"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var app_bootstrap_1 = require("./core/express/app.bootstrap");
var data_source_1 = require("./core/db/data-source");
var test_db_1 = require("./test-db");
/** Lecture du fichier .env */
(0, dotenv_1.config)();
/** Initialisation BDD. */
data_source_1.AppDataSource.initialize().then(function () {
    /** Initialisation du serveur */
    (0, app_bootstrap_1.init)();
    /** Initialisation du test-db */
    (0, test_db_1.createTestTodoList)().then(console.log);
});
//# sourceMappingURL=main.js.map