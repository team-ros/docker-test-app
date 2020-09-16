import express from "express"
const app = express()

app.get("/health", (req, res) => {
    console.log("QUERY", req.query)
    console.log("HEADERS", req.headers)

    if(req.query.headers){
        try {
            const headers = JSON.parse(String(req.query.headers))
            for(const header in headers) {
                res.setHeader(header, headers[header])
            }
        }
        catch(err) {
            console.log("Headers could not be set")
        }
    }

    
    res.status(Number(req.query.status) || 200).json({
        status: true,
        message: "service is active"
    })
})

app.listen(process.env.PORT || 8080)