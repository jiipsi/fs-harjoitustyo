sequenceDiagram
    Title: Harjoitus 0.4 - Uusi muistiinpano
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: Failed to load response data: No content available because this request was redirected
    server-->>browser: Server asks Browser to make new HTTP GET request
    Note left of server: The server gives Status Code 302
    Note left of server: New HTTP GET request is asked from Browser
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "testidataa", "date": "2023-11-07" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes 

