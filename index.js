const OpenAI = require('openai').OpenAI
const fs = require('fs')
const openai = new OpenAI({
    apiKey: "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"
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
        model: 'davinci-002'

    })


    console.log(fineTune)
}

fineTune();