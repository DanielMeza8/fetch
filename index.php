<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link rel="stylesheet" href="./public/css/styles.css">
    </head>
    <body>
        <div class="container-sm mt-4">
            <h1 class="title" style="font-family: 'Times New Roman', Times, serif;"><strong>API POKEMONS</strong></h1>
            <div class="row" id="pokemonInfo" style="background-color: transparent;">  
            </div>  
        </div>
        <div class="container">
            <div class="row">
            <div class="pagination d-flex justify-content-center" id="pagination"></div>
            </div>
        </div>
        
        <script src="./pokemonAPI.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </body>
</html>