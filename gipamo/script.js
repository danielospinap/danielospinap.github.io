(async () => {
    const rawResponse = await fetch(
        "https://jdrfg4tq6dqevq6wsyel5lab340ommcq.lambda-url.us-east-1.on.aws/",
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }
    );
    const content = await rawResponse.text().replace(/['"]+/g, '');
    console.log("hola");
    document.getElementById("headline").innerHTML += content;
    document.getElementById("loading").style.display = 'none';
    document.getElementById("container").style.display = 'block';
    
    console.log(x);
})();
