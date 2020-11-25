// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Custom schemas
import article from './article';
import footer from './footer';
import get_involved from './get_involved';
import initiative from './initiative';
import member from './member';
import mission from './mission';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    article,
    footer,
    get_involved,
    initiative,
    member,
    mission
  ]),
})
