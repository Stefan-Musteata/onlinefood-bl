### Setting the project on a local environment
1. Install Composer (https://getcomposer.org/doc/00-intro.md)
2. Install NodeJS (https://nodejs.org/en/download/)
3. Download the files from repository
4. go to "/front", run "npm install" to install all the js libraries
5. go to "/front", run "npm start" for run project in react
6. go to "/server", run "composer install" 
7. go to "/server", run php artisan jwt:secret
8. from the folder "/server" copy ".env.example" file to ".env" and edit the database credentials there
9. "/server", run "php artisan key:generate"
10. "/server", either run the php server locally like "php -S localhost:8000 -t public" or php artisan serve


### In case you have troubles migrating the tables and getting the seed data you can do the following
1. Delete all the tables, they will be all recreated anyways
2. "/server", run "composer dump-autoload"
3. "/server", run "php artisan migrate --seed"

### Useful links
https://packagist.org/packages/webpatser/laravel-countries#1.5
https://packagist.org/packages/orangehill/iseed