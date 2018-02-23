# Tolk
Push/Pull translations from translate.dhis2.org server


## Configuration

Add configuration at *~/.tolk/config.xml*

```xml
<?xml version="1.0" encoding="UTF-8"?>
<config>
  <!-- Authorizations -->
  <auth name="dhis2" username="USERNAME" password="PASSWORD" />
  
  <!-- Servers -->
  <server name="dhis2" type="pootle" auth="dhis2" url="https://translate.dhis2.org" apiVersion="v1" />

  <!-- TODO, list translation projects -->
</config>
```
