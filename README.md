# json-schema-to-typescript

## How to run the conversion

I use node v10.21.0 for this project, though I imagine most versions after such should work fine.  Versions prior may be suspect.

Grab this project and run "npm install" command first in its directory.

The input JSON Schema file should be put in the project's main directory and named: unifiedshipmentobject.schema.json

The output file should be in the project's main directory after running the below command and will be unifiedShipmentObject.d.ts

The command to execute creating the typescript from the schema is simply "npm run build"

## What to do with the outputted typescript file

You will want to take unifiedShipmentObject.d.ts's contents and completely replace the contents in the main project's file named unifiedShipmentObject.ts, this file is found in the models directory.

Do not try to rename any of these files differently unless you are ready to get into the code.

Once the main project's unifiedShipmentObject.ts file has been updated, you will want to look for errors in usoImpl.ts, which is likewise found in the models directory.  If the additions are minor and "optional" then there may be no errors to correct, but if they are significant or required, then classes in usoImpl.ts may have to be modified or even added.  You can of course see examples of how to do such in the usoImpl.ts file.  I use Webstorm to find these errors easily and correct them, but building the project should also illuminate any errors during the typescript compilation phase.  Likewise using tsc command to compile the project should illuminate them.  Once all errors are fixed, you should be able to use the updated USO object at will!
