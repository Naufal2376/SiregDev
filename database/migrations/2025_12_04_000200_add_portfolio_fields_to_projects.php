<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->string('client')->nullable()->after('description');
            $table->string('github_url')->nullable()->after('client');
            $table->string('live_url')->nullable()->after('github_url');
            $table->json('technologies')->nullable()->after('live_url');
            $table->date('completed_at')->nullable()->after('technologies');
            $table->boolean('featured')->default(false)->after('completed_at');
        });
    }

    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn(['client', 'github_url', 'live_url', 'technologies', 'completed_at', 'featured']);
        });
    }
};
