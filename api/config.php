<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

define('UPLOAD_DIR', __DIR__ . '/../storage/uploads');
define('MAX_FILE_SIZE', 5 * 1024 * 1024);

function json_response(array $data, int $code = 200): void
{
    http_response_code($code);
    echo json_encode($data);
    exit;
}

function ensure_upload_dir(): void
{
    if (!is_dir(UPLOAD_DIR)) {
        mkdir(UPLOAD_DIR, 0755, true);
    }
}
