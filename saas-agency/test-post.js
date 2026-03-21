const url = "https://script.google.com/macros/s/AKfycbyrpRySZjblNyU-EmLEEmf5QJw9k4jQ8g6-HuF-QEYEURl_8wktWw_HZFNYXRO7mDOIOA/exec";

async function test() {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: "AI Agent",
                email: "test@example.com",
                message: "Testing the endpoint"
            })
        });
        
        const text = await response.text();
        console.log("Status:", response.status);
        console.log("Response:", text);
    } catch (e) {
        console.error("Error:", e);
    }
}

test();
