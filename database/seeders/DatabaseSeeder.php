<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create superadmin
        User::factory()->create([
            'name' => 'Super Admin',
            'email' => 'superadmin@gmail.com',
            'password' => bcrypt('superadmin'),
            'role' => 0,
        ]);

        // Create team members matching TeamMarquee.jsx
        $teamMembers = [
            ['name' => 'M. Dimas Anwar', 'slug' => 'dimas', 'position' => 'Front End Developer', 'bio' => 'Crafting immersive & intuitive digital interfaces.', 'avatar' => '/dimas.png', 'skills' => ['React', 'Tailwind']],
            ['name' => 'Syawaludin Boy', 'slug' => 'sawal', 'position' => 'Lead Architect', 'bio' => 'Cloud Infrastructure & Scalable Systems Expert.', 'avatar' => '/syawal.jpg', 'skills' => ['AWS', 'Next.js']],
            ['name' => 'Maulana Adiatma', 'slug' => 'maul', 'position' => 'UI/UX Lead', 'bio' => 'Crafting immersive & intuitive digital interfaces.', 'avatar' => '/maul.png', 'skills' => ['Figma', 'Motion']],
            ['name' => 'M. Ghalib A. G', 'slug' => 'ghalib', 'position' => 'Front End Developer', 'bio' => 'Cloud Infrastructure & Scalable Systems Expert.', 'avatar' => '/ghalib.png', 'skills' => ['Laravel', 'Vue']],
            ['name' => 'M. Naufal Rafif Pratama', 'slug' => 'naufal', 'position' => 'FullStack Developer Senior', 'bio' => 'Database architect focusing on security & speed.', 'avatar' => '/naufal.png', 'skills' => ['Laravel', 'Go', 'Next.js', 'Tailwind']],
            ['name' => 'Rafael', 'slug' => 'Rafael', 'position' => 'Frontend Wizard', 'bio' => 'Translating designs into clean React code.', 'avatar' => '/rafael.jpg', 'skills' => ['Tailwind', 'React']],
        ];

        foreach ($teamMembers as $index => $member) {
            User::factory()->create([
                'name' => $member['name'],
                'slug' => $member['slug'],
                'email' => strtolower($member['slug']) . '@siregdev.com',
                'password' => bcrypt('password'),
                'role' => $index + 1,
                'position' => $member['position'],
                'bio' => $member['bio'],
                'avatar' => $member['avatar'],
                'skills' => $member['skills'],
            ]);
        }
    }
}