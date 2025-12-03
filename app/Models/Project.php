<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'client',
        'github_url',
        'live_url',
        'images',
        'technologies',
        'completed_at',
        'featured',
        'status',
        'owner_user_id',
    ];

    protected $casts = [
        'images' => 'array',
        'technologies' => 'array',
        'completed_at' => 'date',
        'featured' => 'boolean',
    ];

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_user_id');
    }
}
