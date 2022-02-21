# NgLibrarySchematics

A very simple Angular workspace with a library containing schematics.
Detailed process in this article : [Add schematics to Angular library
](https://coco-boudard.medium.com/add-schematics-to-angular-library-bd5987328d7b)

Just create a new Angular project and run the ng add command.

## Usage

- ng new myApp
- cd myApp
- ng add @aboudard/ng-lib

## Application configuration

In the newly created application, if you want to use the exposed assets, modify the angular.json file, and add an assets entry :

```json
{
    "glob": "**/*",
    "input": "node_modules/@aboudard/ng-lib/assets",
    "output": "assets"
}
```