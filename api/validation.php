<?php
declare(strict_types=1);

function validate_email(string $email): bool
{
    return (bool) filter_var($email, FILTER_VALIDATE_EMAIL);
}

function validate_required_fields(array $data, array $fields): array
{
    $errors = [];
    foreach ($fields as $field => $label) {
        if (!isset($data[$field]) || trim((string) $data[$field]) === '') {
            $errors[$field] = "$label is required.";
        }
    }
    return $errors;
}

function validate_file_upload(string $field, array $allowedTypes): ?string
{
    if (!isset($_FILES[$field]) || $_FILES[$field]['error'] === UPLOAD_ERR_NO_FILE) {
        return 'This file is required.';
    }

    $file = $_FILES[$field];

    if ($file['error'] !== UPLOAD_ERR_OK) {
        return 'File upload failed.';
    }

    if ($file['size'] > MAX_FILE_SIZE) {
        return 'File must be 5 MB or smaller.';
    }

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime = $finfo->file($file['tmp_name']);

    if (!in_array($mime, $allowedTypes, true)) {
        return 'File type is not supported.';
    }

    return null;
}

function save_upload(string $field, string $prefix): ?string
{
    if (!isset($_FILES[$field]) || $_FILES[$field]['error'] !== UPLOAD_ERR_OK) {
        return null;
    }

    ensure_upload_dir();
    $ext = pathinfo($_FILES[$field]['name'], PATHINFO_EXTENSION);
    $filename = $prefix . '_' . bin2hex(random_bytes(8)) . ($ext ? '.' . $ext : '');
    $destination = UPLOAD_DIR . '/' . $filename;

    if (!move_uploaded_file($_FILES[$field]['tmp_name'], $destination)) {
        return null;
    }

    return $filename;
}
