const express = require("express");

const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Welcome</title>
                <style>
                    body {
                        background: #f0f4f8;
                        font-family: Arial, sans-serif;
                        display: flex;
                        height: 100vh;
                        align-items: center;
                        justify-content: center;
                    }
                    .container {
                        background: #fff;
                        padding: 40px 60px;
                        border-radius: 12px;
                        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
                        text-align: center;
                    }
                    h1 {
                        color: #2d6cdf;
                        margin-bottom: 16px;
                    }
                    p {
                        color: #444;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Welcome to the Express API!</h1>
                    <p>This is a styled welcome page served from Express.</p>
                </div>
            </body>
        </html>
    `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
