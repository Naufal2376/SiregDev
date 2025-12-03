<?php

namespace App\Filament\Resources\CertificateResource\Pages;

use App\Filament\Resources\CertificateResource;
use Filament\Resources\Pages\CreateRecord;

class CreateCertificate extends CreateRecord
{
    protected static string $resource = CertificateResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $user = auth()->user();
        if ($user && (int) ($user->role ?? 1) !== 0) {
            $data['user_id'] = $user->id;
        }
        return $data;
    }
}
