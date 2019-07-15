<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        // Base Repository
        $this->app->singleton(
            \App\Repositories\BaseInterface::class,
            \App\Repositories\Eloquent\BaseRepository::class
        );

        // Category Repository
        $this->app->singleton(
            \App\Repositories\CategoryInterface::class,
            \App\Repositories\Eloquent\CategoryRepository::class
        );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
