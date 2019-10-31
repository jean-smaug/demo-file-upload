<?php
    header("Access-Control-Allow-Origin: *");
    
    $file = $_FILES["profile-picture"];
    $fileUploaded = move_uploaded_file($file["tmp_name"], __DIR__ . "/../storage/" . $file["name"]);

    if($fileUploaded === false) {
        http_response_code(500);
        return;
    }

    http_response_code(201);
