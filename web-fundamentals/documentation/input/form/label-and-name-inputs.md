# 03 Label and name inputs properly

**TL;DR**

- Always use `label`s on form inputs, and ensure they're visible when the field is in focus.
- Use `placeholder`s to provide guidance about what you expect.
- To help the browser auto-complete the form, use established `name`'s for elements and include the `autocomplete` attribute.

### The importance of labels

    <label for="keyName">
    <input id="keyName">

### Label sizing and placement

In portrait viewports, field labels should be above input elements, and beside them in landscape.

### Use placeholders (`placeholder`)

### Use metadata to enable auto-complete (`autocomplete`)

### Recommended input `name` and `autocomplete` attribute values

Content type | name attribute | autocomplete attribute
------------ | -------------- | ----------------------
Name | name fname mname lname | name (full name)<br>given-name (first name)<br>additional-name (middle name)<br>family-name (last name)
Email | email | email
Address | address city region province state zip zip2 postal country | For one address input:<br>street-address<br>For two address inputs:<br>address-line1<br>address-line2<br>address-level1 (state or province)<br>address-level2 (city)<br>postal-code (zip code)<br>country
Phone | phone mobile country-code area-code exchange suffix ext | tel
Credit Card | ccname cardnumber cvc ccmonth ccyear exp-date card-type | cc-name<br>cc-number<br>cc-csc<br>cc-exp-month<br>cc-exp-year<br>cc-exp<br>cc-type

### The `autofocus` attribute

[sample](samples/order.html)
