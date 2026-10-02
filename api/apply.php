<?php
declare(strict_types=1);

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/validation.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['success' => false, 'message' => 'Method not allowed.'], 405);
}

$data = $_POST;
$errors = validate_required_fields($data, [
    'fullName' => 'Full name',
    'dateOfBirth' => 'Date of birth',
    'email' => 'Email',
    'phone' => 'Phone',
    'city' => 'City',
    'country' => 'Country',
    'highestQualification' => 'Highest qualification',
    'teachingExperience' => 'Teaching experience',
    'currentOccupation' => 'Current occupation',
    'coursePreference' => 'Course preference',
    'preferredFormat' => 'Preferred format',
    'preferredBatch' => 'Preferred batch',
    'interestStatement' => 'Interest statement',
]);

if (!validate_email($data['email'] ?? '')) {
    $errors['email'] = 'Enter a valid email address.';
}

if (empty($data['consent'])) {
    $errors['consent'] = 'You must consent to continue.';
}

$resumeErr = validate_file_upload('resume', [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);
if ($resumeErr) $errors['resume'] = $resumeErr;

if (!empty($errors)) {
    json_response(['success' => false, 'message' => 'Please correct the errors below.', 'errors' => $errors], 422);
}

$applicationId = 'APP-' . date('Ymd') . '-' . bin2hex(random_bytes(4));

save_upload('resume', $applicationId . '_resume');

// Placeholder: log application or send email notification
$logFile = __DIR__ . '/../storage/applications.log';
$logDir = dirname($logFile);
if (!is_dir($logDir)) mkdir($logDir, 0755, true);

$logEntry = json_encode([
    'id' => $applicationId,
    'submitted_at' => date('c'),
    'fullName' => $data['fullName'],
    'email' => $data['email'],
    'coursePreference' => $data['coursePreference'],
]) . PHP_EOL;

file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);

json_response([
    'success' => true,
    'message' => 'Application received successfully.',
    'applicationId' => $applicationId,
]);
