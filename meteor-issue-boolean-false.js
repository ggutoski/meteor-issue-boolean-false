var data = [
 {name: "This flag is true", flag: true},
 {name: "This flag is false", flag: false}
];

if (Meteor.isClient) {
  Template.body.helpers({ data: data });
}
