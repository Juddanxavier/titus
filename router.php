<?php
// PHP built-in server router for local development
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if (str_starts_with($path, '/api/')) {
    $file = __DIR__ . $path;
    if (is_file($file)) {
        require $file;
        return true;
    }
}

$file = __DIR__ . '/dist' . $path;
if ($path !== '/' && is_file($file)) {
    return false;
}

readfile(__DIR__ . '/dist/index.html');
return true;
