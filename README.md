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

Once the main project's unifiedShipmentObject.ts file has been updated, you will want to look for errors in usoImpl.ts, which is likewise found in the models directory.  If the additions are minor and "optional" then there may be no errors to correct, but if they are significant or required, then classes in usoImpl.ts may have to be modified or even added.  You can of course see examples of how to do such in the usoImpl.ts file.  I use Webstorm to find these errors easily and correct them, but building the project should also illuminate any errors during the typescript compilation phase.  Likewise using the "tsc" command to compile the project should illuminate them.  Once all errors are fixed, you should be able to use the updated USO object at will!

## Notes

This is not and never was meant to be a final product by any means.  It was simply another project's example code that I used to get the results we needed quickly until we had time to make a better solution.  That better solution would probably be to have the app ask for an input filename, an output filename, and work appropriately to generate those, but I did not have time to get around to that.  Such changes should be relatively simple though if you know nodeJS or even if you don't and are willing to delve into it a bit.  Likewise, my intent originally was to have the unifiedShipmentObject.d.ts file exist in the main project as well and be a drop-in replacement.  However, getting the Angular project to accept a new .d.ts file not associated with an external module found in node_modules turned out to be more difficult than I thought it would be.  For our purposes it is probably unnecessary in any case, as the Interfaces found in the unifiedShipmentObject.d.ts file can be dropped into a unifiedShipmentObject.ts file and implemented in another file(usoImpl.ts) without needing to modify the unifiedShipmentObject.ts file's generated content.  Not modifying the generated code found in unifiedShipmentObject.ts is critical to the success of using the JSON schema for code generation purposes, so I highly recommend only ever fully replacing it with other generated code and not touching it otherwise.

You might ask why I didn't just have the output filename be unfiedShipmentObject.ts instead of unfiedShipmentObject.d.ts since the .ts is what is found in the main project.  The reason for this is that it is really supposed to be a .d.ts file, and I had hoped to one day find a good way to bring a .d.ts file into the Angular project and use it.  You can of course change the code to rename it as you wish, or take my suggestion above and just prompt for an input filename and output filename and make such decisions at runtime.

Good luck!
