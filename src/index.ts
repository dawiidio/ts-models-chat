import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { createLanguageModel, createJsonTranslator, processRequests } from "typechat";

dotenv.config();

const model = createLanguageModel(process.env);
const schema = fs.readFileSync(path.join(__dirname, "../types/User.ts"), "utf8");
const translator = createJsonTranslator(model, schema, "User");

processRequests("💻> ", process.argv[2], async (request) => {
    const response = await translator.translate(request);
    
    if (!response.success) {
        console.log(response.message);
        return;
    }
    
    const cart = response.data;

    console.log("Success!", cart);
});