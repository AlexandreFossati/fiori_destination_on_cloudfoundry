# fiori_destination_on_cloudfoundry
How to use Destination from SCP Cloud Foundry in Business Application Studio in a Fiori application.

What really matters for the application to be able to consume the destination, is the following:

For your code:

1 - mta.yaml need to have a destination service in the "resources" section, and also need to "require" this destination in the HTML5Module.

2 - In the HTML5Module in xs-app.json file, you need to add the route for your destination.

Once the code is fine, you need to go to the "Run configuration" tab on SAP Business Application Studio.
Click on "Create configuration" and follow the steps.
When it's done, expand your project in this "Run configuration" tab and connect the "Data Source" to it's specific destination.

Here's the "northwind_api" destination used in the xs-app.json:

Type=HTTP

WebIDEAdditionalData=full_url

HTML5.DynamicDestination=true

Authentication=NoAuthentication

WebIDEUsage=odata_gen

Name=northwind_api

WebIDEEnabled=true

ProxyType=Internet

URL=https\://services.odata.org/V2/Northwind/Northwind.svc


Here's the "fcf7b533HanaDB" destination used in the xs-app.json:

clientSecret=<< Existing password/certificate removed on export >>

#Password=<< Existing password/certificate removed on export >>

Description=Hana from lab2dev account

Type=HTTP

clientId=sb-bankaccount\!t13613

HTML5.DynamicDestination=true

Authentication=OAuth2Password

WebIDEUsage=odata_gen

Name=fcf7b533HanaDB

WebIDEEnabled=true

tokenServiceURL=https\://fcf7b533trial.authentication.us10.hana.ondemand.com/oauth/token

ProxyType=Internet

URL=https\://fcf7b533trial-dev-srv-bankaccount.cfapps.us10.hana.ondemand.com

tokenServiceURLType=Dedicated

User=alexandre.fossati@lab2dev.com

