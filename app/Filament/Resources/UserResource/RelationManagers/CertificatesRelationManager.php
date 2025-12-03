<?php

namespace App\Filament\Resources\UserResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class CertificatesRelationManager extends RelationManager
{
    protected static string $relationship = 'certificates';

    protected static ?string $title = 'Certificates';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')->required()->maxLength(255),
                Forms\Components\TextInput::make('issuer')->required()->maxLength(255),
                Forms\Components\TextInput::make('credential_id')->maxLength(255),
                Forms\Components\TextInput::make('credential_url')->url(),
                Forms\Components\DatePicker::make('issued_at')->required(),
                Forms\Components\DatePicker::make('expires_at'),
                Forms\Components\Textarea::make('description')->rows(3),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('title')
            ->columns([
                Tables\Columns\TextColumn::make('title')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('issuer')->searchable(),
                Tables\Columns\TextColumn::make('issued_at')->date('M Y')->sortable(),
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }
}