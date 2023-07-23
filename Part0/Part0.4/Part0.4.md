sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user inputs and submits the text for the new note.
    Note right of browser: Said text is than sent to the server in the body of a POST request and a note is created.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    server-->>browser: Status code: 302 (URL redirect), Location: /exampleapp/notes

    Note right of browser: The HTML, CSS and JavaScript files are fetched again upon page reload.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server-->>browser: HTML file

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: CSS file

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->>browser: JavaScript file

    Note right of browser: As the JavaScript file executes, another HTTP request is made to the server in order to fetch the notes

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>browser: JSON file with note info

