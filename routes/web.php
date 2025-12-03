<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;

Route::get('/', function () {
    return Inertia::render('Landing');
});

Route::get('/portfolio/{slug}', function ($slug) {
    $user = User::where('slug', $slug)->firstOrFail();
    
    return Inertia::render('Portfolio', [
        'member' => [
            'name' => $user->name,
            'slug' => $user->slug,
            'position' => $user->position,
            'bio' => $user->bio,
            'avatar' => $user->avatar,
            'skills' => $user->skills ?? [],
            'github_url' => $user->github_url,
            'linkedin_url' => $user->linkedin_url,
            'portfolio_url' => $user->portfolio_url,
        ],
        'projects' => $user->projects()
            ->where('status', 'published')
            ->latest()
            ->get()
            ->map(fn($p) => [
                'id' => $p->id,
                'title' => $p->title,
                'description' => $p->description,
                'client' => $p->client,
                'images' => $p->images ?? [],
                'technologies' => $p->technologies ?? [],
                'github_url' => $p->github_url,
                'live_url' => $p->live_url,
                'completed_at' => $p->completed_at?->format('M Y'),
                'featured' => $p->featured,
            ]),
        'certificates' => $user->certificates()
            ->latest('issued_at')
            ->get()
            ->map(fn($c) => [
                'id' => $c->id,
                'title' => $c->title,
                'issuer' => $c->issuer,
                'credential_id' => $c->credential_id,
                'credential_url' => $c->credential_url,
                'issued_at' => $c->issued_at->format('M Y'),
                'expires_at' => $c->expires_at?->format('M Y'),
                'description' => $c->description,
                'image' => $c->image,
            ]),
    ]);
})->name('portfolio.show');