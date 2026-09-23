<?php
declare(strict_types=1);

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/validation.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['success' => false, 'message' => 'Method not allowed.'], 405);
}

$input = json_decode(file_get_contents('php://input'), true) ?? [];

$errors = validate_required_fields($input, [
    'name' => 'Name',
    'email' => 'Email',
]);

if (!validate_email($input['email'] ?? '')) {
    $errors['email'] = 'Enter a valid email address.';
}

if (!empty($errors)) {
    json_response(['success' => false, 'message' => 'Please correct the errors.', 'errors' => $errors], 422);
}

$logFile = __DIR__ . '/../storage/brochure.log';
$logDir = dirname($logFile);
if (!is_dir($logDir)) mkdir($logDir, 0755, true);

file_put_contents($logFile, json_encode([
    'submitted_at' => date('c'),
    'name' => $input['name'],
    'email' => $input['email'],
    'courseInterest' => $input['courseInterest'] ?? '',
]) . PHP_EOL, FILE_APPEND | LOCK_EX);

json_response(['success' => true, 'message' => 'Brochure request recorded.']);
