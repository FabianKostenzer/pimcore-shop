## Docker

### Prerequisits

-   Your user must be allowed to run docker commands (directly or via sudo).
-   You must have docker-compose installed.
-   Your user must be allowed to change file permissions (directly or via sudo).

### Follow these steps

1. Install the dependencies
   `composer update`

2. Initialize the containers
   `docker-compose up -d`

3. Hook into docker instance
   `docker exec -it -u=root #NAME#_php-fpm_1 bash`

4. Set correct permissions
   `chown -Rf www-data:www-data .`

5. Hook into docker instance as www-data
   `docker exec -it -u=www-data #NAME#_php-fpm_1 bash`

6. Install pimcore and initialize the DB
   `./vendor/bin/pimcore-install --mysql-host-socket=db --mysql-username=pimcore --mysql-password=pimcore --mysql-database=pimcore`
    - When asked for admin user and password: Choose freely
    - This can take a while, up to 20 minutes
7. :heavy_check_mark: DONE - You can now visit your pimcore instance:
    - The frontend: <http://localhost>
    - The admin interface, using the credentials you have chosen above:
      <http://localhost/admin>
    - Make sure to activate the Bundle on the Pimcore admin interface. Set it up at Documents/Home/Controller.

## Frontend

Frontend will be done in WebsiteBundle. We use webpack/yarn for compiling.

### Follow these steps

1. Install the dependencies
   `yarn install`

2. Compile the assets
   `yarn development` or `yarn watch`
