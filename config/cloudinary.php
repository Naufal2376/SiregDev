<?php

/*
|--------------------------------------------------------------------------
| Cloudinary Configuration
|--------------------------------------------------------------------------
|
| File konfigurasi ini wajib ada agar library cloudinary-labs bisa membaca
| CLOUDINARY_URL dari environment variable Vercel.
|
*/

return [

    /*
    |--------------------------------------------------------------------------
    | Cloud URL
    |--------------------------------------------------------------------------
    |
    | Ini adalah kunci utama. Pastikan env variable CLOUDINARY_URL
    | sudah diatur di dashboard Vercel.
    |
    */
    'cloud_url' => env('CLOUDINARY_URL'),

    /**
     * Upload Preset (Opsional)
     */
    'upload_preset' => env('CLOUDINARY_UPLOAD_PRESET'),

    /**
     * Notification URL (Opsional)
     */
    'notification_url' => env('CLOUDINARY_NOTIFICATION_URL'),

];