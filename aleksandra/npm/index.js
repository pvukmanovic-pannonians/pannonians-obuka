import _ from "lodash";

console.log(_.upperFirst("aleksandra vukasinovic"));
console.log(_.kebabCase("aleksandra vukasinovic"));
console.log(_.camelCase("aleksandra vukasinovic"));
console.log(_.pad("aleksandra vukasinovic", 30, "*"));
console.log(_.padEnd("aleksandra vukasinovic", 30, "*"));
console.log(_.padStart("aleksandra vukasinovic", 30, "*"));
console.log(_.repeat("aleksandra vukasinovic ", 2));
console.log(_.replace("aleksandra vukasinovic", "aleksandra", "nana"));
console.log(_.snakeCase("aleksandra vukasinovic"));
console.log(_.split("aleksandra vukasinovic", " "));
console.log(_.words("! *aleksandra vukasinovic :) *"));
