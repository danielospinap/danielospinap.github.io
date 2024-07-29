/*global fetch*/
import jsdom from "jsdom";
const { JSDOM } = jsdom;

export const handler = async (event) => {
    const rawResponse = await fetch(
        "https://www.leagueofgraphs.com/es/summoner/lan/Gipamo-1688",
        {
            method: "get",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }
    );
    const content = await rawResponse.text();
    const dom = new JSDOM(content, { runScripts: "outside-only" });

    let x = dom.window.document
        .getElementsByClassName("gameDate requireTooltip")[0]
        .innerHTML.trim()
        .toLocaleLowerCase();

    const response = {
        statusCode: 200,
        body: JSON.stringify(x),
    };
    return response;
};
