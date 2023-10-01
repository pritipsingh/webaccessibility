const OpenAI = require('openai').OpenAI
const fs = require('fs')
require('dotenv').config()
const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY
});

let id = "file-aO2yjJQnCbA5FVTa0ihw6WdK"

async function upload() {
    const file = await openai.files.create({
        file: fs.createReadStream('./training.jsonl'),
        purpose: 'fine-tune'
    })

    console.log(file)
}

async function fineTune() {
    const fineTune = await openai.fineTuning.jobs.create({
        training_file: "file-aO2yjJQnCbA5FVTa0ihw6WdK",
        model: 'gpt-3.5-turbo'

    })


    console.log(fineTune)
}

fineTune();