// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import PageInfo from "./pageInfo";
import Project from "./project";
import Social from "./social";
import Skill from "./skillS";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([PageInfo, Project, Social, Skill]),
});
