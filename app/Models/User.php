<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;

class User extends Authenticatable implements FilamentUser
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'slug',
        'email',
        'password',
        'role',
        'bio',
        'avatar',
        'github_url',
        'linkedin_url',
        'portfolio_url',
        'skills',
        'position',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'skills' => 'array',
        ];
    }

    public function certificates()
    {
        return $this->hasMany(Certificate::class);
    }

    public function projects()
    {
        return $this->hasMany(Project::class, 'owner_user_id');
    }

    public function canAccessPanel(Panel $panel): bool
    {
        // Allow only defined roles (0=superadmin, 1-7=admins)
        $role = (int) ($this->role ?? -1);
        return in_array($role, [0,1,2,3,4,5,6,7], true);
    }
}
