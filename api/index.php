<?php

/*
|--------------------------------------------------------------------------
| Vercel Entry Point (Custom)
|--------------------------------------------------------------------------
|
| Script ini memindahkan storage path ke folder /tmp agar Laravel bisa
| menulis cache/session tanpa error "Read-only file system".
|
*/

// 1. Load Composer Autoloader
require __DIR__ . '/../vendor/autoload.php';

// 2. Bootstrap Laravel App
$app = require __DIR__ . '/../bootstrap/app.php';

// 3. [PENTING] Pindahkan Storage Path ke /tmp
// Karena di Vercel, folder project asli tidak bisa diedit.
$storagePath = '/tmp/storage';

if (!is_dir($storagePath)) {
    mkdir($storagePath, 0777, true);
    
    // Buat ulang struktur folder penting di dalam /tmp
    $folders = [
        '/app/public',
        '/framework/cache/data',
        '/framework/views',
        '/framework/sessions',
        '/logs'
    ];
    
    foreach ($folders as $folder) {
        if (!is_dir($storagePath . $folder)) {
            mkdir($storagePath . $folder, 0777, true);
        }
    }
}

// Beritahu Laravel untuk memakai folder ini
$app->useStoragePath($storagePath);

// 4. Jalankan Aplikasi (Sama seperti public/index.php)
$kernel = $app->make(\Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = \Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);