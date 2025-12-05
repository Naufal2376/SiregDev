<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Models\Project;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Table;
use Filament\Tables;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Informasi Dasar')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn ($state, callable $set) => $set('slug', \Illuminate\Support\Str::slug($state))),
                        Forms\Components\TextInput::make('slug')
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true),
                        Forms\Components\Textarea::make('description')
                            ->rows(4)
                            ->columnSpanFull(),
                        Forms\Components\TextInput::make('client')
                            ->maxLength(255),
                        Forms\Components\DatePicker::make('completed_at')
                            ->label('Tanggal Selesai'),
                    ])->columns(2),

                Forms\Components\Section::make('Media & Teknologi')
                    ->schema([
                        Forms\Components\FileUpload::make('images')
                            ->label('Gambar Proyek')
                            ->multiple()
                            ->directory('projects')
                            ->disk('public')
                            ->image()
                            ->imageEditor()
                            ->reorderable()
                            ->downloadable()
                            ->openable()
                            ->columnSpanFull(),
                        Forms\Components\TagsInput::make('technologies')
                            ->label('Teknologi')
                            ->placeholder('Laravel, React, Tailwind...')
                            ->splitKeys(['Tab', ','])
                            ->columnSpanFull(),
                    ]),

                Forms\Components\Section::make('Links')
                    ->schema([
                        Forms\Components\TextInput::make('github_url')
                            ->url()
                            ->label('GitHub URL'),
                        Forms\Components\TextInput::make('live_url')
                            ->url()
                            ->label('Live Demo URL'),
                    ])->columns(2),

                Forms\Components\Section::make('Status & Pemilik')
                    ->schema([
                        Forms\Components\Select::make('status')
                            ->options([
                                'draft' => 'Draft',
                                'published' => 'Published',
                                'archived' => 'Archived',
                            ])
                            ->required()
                            ->default('draft'),
                        Forms\Components\Toggle::make('featured')
                            ->label('Tampilkan sebagai Featured'),
                        Forms\Components\Select::make('owner_user_id')
                            ->relationship('owner', 'name')
                            ->label('Owner')
                            ->searchable()
                            ->preload()
                            ->required()
                            ->default(fn () => auth()->id())
                            ->hidden(fn () => (int) (auth()->user()?->role ?? 1) !== 0),
                    ])->columns(3),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('slug')->searchable(),
                Tables\Columns\TextColumn::make('status')->badge(),
                Tables\Columns\TextColumn::make('owner.name')->label('Owner'),
                Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'published' => 'Published',
                        'archived' => 'Archived',
                    ]),
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
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
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): \Illuminate\Database\Eloquent\Builder
    {
        $query = parent::getEloquentQuery()->with(['owner']);

        $user = auth()->user();

        if (!$user) {
            return $query->whereRaw('1 = 0');
        }

        if ((int) ($user->role ?? -1) === 0) {
            return $query;
        }

        return $query->where('owner_user_id', $user->id);
    }
}