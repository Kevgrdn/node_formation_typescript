"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var app_bootstrap_1 = require("./core/express/app.bootstrap");
var data_source_1 = require("./core/db/data-source");
/** Lecture du fichier .env */
(0, dotenv_1.config)();
/** Initialisation BDD. */
data_source_1.AppDataSource.initialize().then(function () {
    /** Initialisation du serveur */
    (0, app_bootstrap_1.init)();
    /** Initialisation du test-db */
    // createTestTodoList().then(async (todolist) => {
    //     const getTodoList = await getTodoListById(todolist.id)
    //     await addTodo(getTodoList, "Ceci est mon Texte de TODO")
    // });
});
//# sourceMappingURL=main.js.map