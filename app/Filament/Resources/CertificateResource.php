<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CertificateResource\Pages;
use App\Models\Certificate;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Table;
use Filament\Tables;

class CertificateResource extends Resource
{
    protected static ?string $model = Certificate::class;

    protected static ?string $navigationIcon = 'heroicon-o-academic-cap';

    protected static ?string $navigationLabel = 'Sertifikat';

    protected static ?string $pluralLabel = 'Sertifikat';

    protected static bool $isGloballySearchable = false;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Informasi Sertifikat')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->label('Nama Sertifikat')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('issuer')
                            ->label('Penerbit')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('credential_id')
                            ->label('ID Kredensial')
                            ->maxLength(255),
                        Forms\Components\TextInput::make('credential_url')
                            ->label('URL Kredensial')
                            ->url()
                            ->maxLength(255),
                    ])->columns(2),

                Forms\Components\Section::make('Tanggal & Media')
                    ->schema([
                        Forms\Components\DatePicker::make('issued_at')
                            ->label('Tanggal Terbit')
                            ->required()
                            ->default(now()),
                        Forms\Components\DatePicker::make('expires_at')
                            ->label('Tanggal Kadaluarsa')
                            ->after('issued_at'),
                        Forms\Components\FileUpload::make('image')
                            ->label('Gambar Sertifikat')
                            ->directory('certificates')
                            ->disk('public')
                            ->image()
                            ->imageEditor(),
                    ])->columns(3),

                Forms\Components\Textarea::make('description')
                    ->label('Deskripsi')
                    ->rows(3)
                    ->columnSpanFull(),

                Forms\Components\Select::make('user_id')
                    ->relationship('user', 'name')
                    ->label('Pemilik')
                    ->searchable()
                    ->preload(false)
                    ->required()
                    ->default(fn () => auth()->id())
                    ->hidden(fn () => (int) (auth()->user()?->role ?? 1) !== 0),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('Sertifikat')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('issuer')
                    ->label('Penerbit')
                    ->searchable(),
                Tables\Columns\TextColumn::make('issued_at')
                    ->label('Tanggal Terbit')
                    ->date('M Y')
                    ->sortable(),
                Tables\Columns\TextColumn::make('user.name')
                    ->label('Pemilik')
                    ->sortable(),
                Tables\Columns\IconColumn::make('expires_at')
                    ->label('Berlaku')
                    ->boolean()
                    ->trueIcon('heroicon-o-check-circle')
                    ->falseIcon('heroicon-o-x-circle')
                    ->getStateUsing(fn ($record) => !$record->expires_at || $record->expires_at->isFuture()),
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make()->label('Tambah Sertifikat'),
            ])
            ->defaultSort('issued_at', 'desc')
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCertificates::route('/'),
            'create' => Pages\CreateCertificate::route('/create'),
            'edit' => Pages\EditCertificate::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): \Illuminate\Database\Eloquent\Builder
    {
        $query = parent::getEloquentQuery()->with(['user']);

        $user = auth()->user();

        if (!$user) {
            return $query->whereRaw('1 = 0');
        }

        // Superadmin sees all
        if ((int) ($user->role ?? -1) === 0) {
            return $query;
        }

        // Admins see only their own certificates
        return $query->where('user_id', $user->id);
    }
}