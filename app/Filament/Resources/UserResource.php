<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Table;
use Filament\Tables;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';

    protected static ?string $navigationLabel = 'Tim Member';

    protected static ?string $pluralLabel = 'Tim Member';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Informasi Akun')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn ($state, callable $set) => $set('slug', \Illuminate\Support\Str::slug($state))),
                        Forms\Components\TextInput::make('slug')
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true)
                            ->helperText('Digunakan untuk URL portfolio: /portfolio/{slug}'),
                        Forms\Components\TextInput::make('email')
                            ->email()
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->maxLength(255),
                        Forms\Components\TextInput::make('password')
                            ->password()
                            ->dehydrateStateUsing(fn ($state) => filled($state) ? bcrypt($state) : null)
                            ->dehydrated(fn ($state) => filled($state))
                            ->required(fn ($record) => $record === null)
                            ->helperText('Kosongkan jika tidak ingin mengubah password'),
                        Forms\Components\Select::make('role')
                            ->options([
                                0 => 'Superadmin',
                                1 => 'Admin 1',
                                2 => 'Admin 2',
                                3 => 'Admin 3',
                                4 => 'Admin 4',
                                5 => 'Admin 5',
                                6 => 'Admin 6',
                                7 => 'Admin 7',
                            ])
                            ->required()
                            ->default(1),
                    ])->columns(2),

                Forms\Components\Section::make('Profil Portfolio')
                    ->schema([
                        Forms\Components\TextInput::make('position')
                            ->label('Posisi')
                            ->maxLength(255),
                        Forms\Components\Textarea::make('bio')
                            ->rows(3)
                            ->maxLength(500)
                            ->columnSpanFull(),
                        Forms\Components\TextInput::make('avatar')
                            ->label('URL Avatar')
                            ->url()
                            ->helperText('Gunakan URL gambar (misal: /dimas.png)'),
                    ])->columns(2),

                Forms\Components\Section::make('Skills & Links')
                    ->schema([
                        Forms\Components\TagsInput::make('skills')
                            ->placeholder('React, Laravel, PHP...')
                            ->splitKeys(['Tab', ','])
                            ->columnSpanFull(),
                        Forms\Components\TextInput::make('github_url')
                            ->url()
                            ->label('GitHub URL'),
                        Forms\Components\TextInput::make('linkedin_url')
                            ->url()
                            ->label('LinkedIn URL'),
                        Forms\Components\TextInput::make('portfolio_url')
                            ->url()
                            ->label('Portfolio External URL'),
                    ])->columns(3),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('avatar')
                    ->circular()
                    ->defaultImageUrl(fn ($record) => 'https://ui-avatars.com/api/?name=' . urlencode($record->name)),
                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('slug')
                    ->searchable()
                    ->copyable(),
                Tables\Columns\TextColumn::make('position')
                    ->label('Posisi'),
                Tables\Columns\TextColumn::make('email')
                    ->searchable(),
                Tables\Columns\BadgeColumn::make('role')
                    ->formatStateUsing(fn ($state) => match ($state) {
                        0 => 'Superadmin',
                        default => 'Admin ' . $state,
                    })
                    ->color(fn ($state) => $state === 0 ? 'danger' : 'success'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('role')
                    ->options([
                        0 => 'Superadmin',
                        1 => 'Admin 1',
                        2 => 'Admin 2',
                        3 => 'Admin 3',
                        4 => 'Admin 4',
                        5 => 'Admin 5',
                        6 => 'Admin 6',
                        7 => 'Admin 7',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }

    public static function canViewAny(): bool
    {
        $user = auth()->user();
        return $user && (int) ($user->role ?? -1) === 0;
    }

    public static function getRelations(): array
    {
        return [
            UserResource\RelationManagers\ProjectsRelationManager::class,
            UserResource\RelationManagers\CertificatesRelationManager::class,
        ];
    }
}
