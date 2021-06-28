<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title> 
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <!-- Fonts -->
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

    </head> 
    <body>
        <div id="app">
            <App />
        </div> 
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
